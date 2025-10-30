import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_SENDER,
      to: "humairasultana059@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0a0a0a; color: #ffffff; padding: 20px; border-radius: 8px;">
          <h2 style="color: #ff2d95; border-bottom: 2px solid #ff2d95; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #1a1a1a; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #ff2d95;">
            <p><strong style="color: #ff2d95;">Name:</strong> ${name}</p>
            <p><strong style="color: #ff2d95;">Email:</strong> ${email}</p>
            <p><strong style="color: #ff2d95;">Subject:</strong> ${subject}</p>
          </div>
          <div style="background-color: #1a1a1a; padding: 20px; border: 1px solid #ff2d95/30; border-radius: 5px;">
            <h3 style="color: #ff2d95; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #a0a0a0;">${message}</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; background-color: #2a2a2a; border-radius: 5px; border-left: 4px solid #ff2d95;">
            <p style="margin: 0; font-size: 12px; color: #a0a0a0;">
              This message was sent from Humaira Sultana's portfolio website contact form.
            </p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
