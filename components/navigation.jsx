"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [active, setActive] = useState("#home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "backdrop-blur-md bg-black/50 shadow-lg border-b border-pink-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-0 lg:px-8">
        <div className="flex items-center md:justify-start justify-between h-16">
          <a href="#home" className="text-xl font-bold text-pink-500 flex items-center gap-2">
            <img src="/hs.png" alt="Humaira Sultana" className="w-10 h-10" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:ml-10 lg:ml-32">
            <div className="flex items-center flex-wrap gap-px bg-backdrop-blur bg-slate-800/50 p-px rounded-[20px] border-t border-gray-700">
              {navLinks.map((link, index) => (
                <label
                  key={link.href}
                  className={`
                    w-28 h-10 bg-backdrop-blur bg-gradient-to-b from-gray-900 from-gray-950
                    flex flex-col items-center justify-center py-2
                    transition-all duration-100 ease-linear
                     relative cursor-pointer 
                    shadow-lg
                    ${
                      active === link.href
                        ? "shadow-none bg-backdrop-blur bg-gradient-to-b from-pink-900 to-pink-800 border-none"
                        : ""
                    }
                    ${index === 0 ? "rounded-l-[20px]" : ""}
                    ${index === navLinks.length - 1 ? "rounded-r-[20px]" : ""}
                  `}
                >
                  <input
                    type="radio"
                    name="navbar"
                    checked={active === link.href}
                    onChange={() => setActive(link.href)}
                    onClick={() => (window.location.hash = link.href)}
                    aria-label={`Navigate to ${link.label}`}
                    className="hidden"
                  />
                  <span
                    className={`
                    text-white text-sm font-extrabold uppercase
                    transition-all duration-100 ease-linear
                    [-webkit-text-stroke:1px_rgba(0,0,0,0.3)]
                    [text-shadow:0px_2px_3px_rgba(0,0,0,0.3)]
                    ${active === link.href ? "[text-shadow:0px_0px_12px_rgba(255,255,255,0.5)]" : ""}
                  `}
                  >
                    {link.label}
                  </span>

                  {/* Gradient overlay */}
                  <div
                    className={`
                    absolute inset-0 rounded-md pointer-events-none
                    bg-gradient-to-b transition-all duration-100 ease-linear
                    ${
                      active === link.href
                        ? "from-transparent via-white/10 to-transparent"
                        : "from-transparent via-transparent to-transparent"
                    }
                  `}
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-pink-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-pink-500/20 flex">
            <div className="flex flex-col w-full">
              {navLinks.map((link) => (
                <label
                  key={link.href}
                  className={`
                    py-2 px-4 transition-colors cursor-pointer
                    ${active === link.href ? "text-pink-500 font-semibold" : "text-white hover:text-pink-500"}
                  `}
                >
                  <input
                    type="radio"
                    name="navbar-mobile"
                    checked={active === link.href}
                    onChange={() => {
                      setActive(link.href)
                      setIsMobileMenuOpen(false)
                      window.location.hash = link.href
                    }}
                    className="hidden"
                    aria-label={`Navigate to ${link.label}`}
                  />
                  <span>{link.label}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
