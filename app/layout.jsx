import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata = {
  title: "Humaira Sultana - Full-Stack & AI Developer",
  description:
    "Portfolio of Humaira Sultana - Full-Stack Developer specializing in React.js, Next.js, React Native, Node.js, and Generative AI",
  keywords: "Full-Stack Developer, AI Developer, React, Next.js, React Native, Node.js, Python",
  authors: [{ name: "Humaira Sultana" }],
  openGraph: {
    title: "Humaira Sultana - Full-Stack & AI Developer",
    description: "Explore my portfolio showcasing full-stack web and mobile applications with AI integration",
    type: "website",
  },
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className="font-sans antialiased bg-black text-white">
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
