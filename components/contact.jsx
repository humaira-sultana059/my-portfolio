"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react"

export default function Contact() {
  const contactRef = useRef(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Honeypot spam protection
    if (formData.honeypot) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." })
        setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" })
      } else {
        setSubmitStatus({ type: "error", message: "Failed to send message. Please try again." })
      }
    } catch (error) {
      console.error("Error sending message:", error)
      setSubmitStatus({ type: "error", message: "Failed to send message. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 }
    )

    if (contactRef.current) {
      observer.observe(contactRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "humairasultana059@gmail.com",
      link: "mailto:humairasultana059@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1951 422953",
      link: "tel:+8801951422953",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chattogram, Bangladesh",
      link: null,
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/Sultanamim",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/humaira-sultana-b8a8b5250/",
    },
  ]

  return (
    <section id="contact" ref={contactRef} className="py-20 px-4 sm:px-6 lg:px-8 opacity-0 bg-black">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-white">
          Get In <span className="text-pink-500">Touch</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          I'm currently available for freelance work and open to discussing new projects. Whether you have a question or
          just want to say hi, feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-0 border border-pink-500/30 rounded-xl overflow-hidden shadow-lg shadow-pink-500/30">
          <Card className="p-6 bg-[url(/galaxy-3.png)] bg-cover bg-center space-y-6 relative overflow-hidden z-0 md:rounded-tr-none md:rounded-br-none md:border-r-0 max-md:border-b-0 max-md:rounded-b-none">
            <div class="backdrop-blur-xs w-full h-full top-0 left-0 bottom-0 right-0 z-1 absolute"></div>
            <CardHeader className="mb-0 pb-0 text-center">
              <CardTitle className="text-white z-2 ">Contact Information</CardTitle>
            </CardHeader>

            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center gap-4 z-2 bg-black/40 px-2 py-1 rounded-md border-pink-700/80 text-white hover:bg-black/70 hover:text-pink-500 transition-colors m-0"
              >
                <div className="p-2 bg-pink-500/10 rounded-lg">
                  <info.icon className="text-pink-500" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{info.label}</p>
                  {info.link ? (
                    <a href={info.link} className="">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            <p className="text-gray-400 mb-3 z-2">
              Follow me on social media to stay updated with my latest projects and insights.
            </p>
            <div className="flex items-center justify-center gap-4 z-2">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  asChild
                  variant="outline"
                  className=" justify-start dark:bg-pink-500/30 border-pink-500/30 text-white hover:bg-pink-500/10 hover:border-pink-500 hover:text-pink-500 transition-colors"
                >
                  <a href={social.link} target="_blank" rel="noopener noreferrer">
                    <social.icon size={20} className="mr-2" />
                    {social.label}
                  </a>
                </Button>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-gray-900  space-y-6 md:rounded-tl-none md:rounded-bl-none md:border-l-0 max-md:border-t-0 max-md:rounded-t-none">
            <CardHeader className="text-center mb-0 pb-0">
              <CardTitle className="text-white text-[20px]">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleInputChange}
                  style={{ display: "none" }}
                  tabIndex="-1"
                  autoComplete="off"
                />

                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  aria-label="Your name"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                />
                <Input
                  name="email"
                  placeholder="Your Email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  aria-label="Your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                />
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  aria-label="Message subject"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  aria-label="Your message"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                />

                {submitStatus && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 border border-green-500/30 text-green-400"
                        : "bg-red-500/10 border border-red-500/30 text-red-400"
                    }`}
                    role="alert"
                  >
                    {submitStatus.message}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black border border-pink-900 shadow-sm shadow-white/50 hover:bg-pink-600/30 backdrop-blur-2xl text-white disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">© 2025 Humaira Sultana.</p>
        </div>
      </div>
    </section>
  )
}
