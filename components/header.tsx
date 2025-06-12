"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Instagram, Facebook } from "lucide-react"
import { motion } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full backdrop-blur-sm z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div whileHover={{ rotate: 10 }} className="w-10 h-10 rounded-lg overflow-hidden bg-white p-1">
              <img src="/images/new-logo.png" alt="Ankuram Pre School Logo" className="w-full h-full object-contain" />
            </motion.div>
            <span className="text-xl font-bold text-gray-800">Ankuram Pre School</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.1 }}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-600 hover:text-purple-500 transition-colors font-medium"
                >
                  {item.name}
                </button>
              </motion.div>
            ))}
          </nav>

          {/* Social Media Icons and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-2">
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.instagram.com/ankurampreschool2022?igsh=dmJmOHRxOHlxcnRz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg transition-all"
              >
                <Instagram className="h-4 w-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.facebook.com/share/1AVag5Q8oT/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg transition-all"
              >
                <Facebook className="h-4 w-4" />
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.href)
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-purple-500 transition-colors"
                >
                  {item.name}
                </button>
              ))}
              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 px-3 py-2">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.instagram.com/ankurampreschool2022?igsh=dmJmOHRxOHlxcnRz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                >
                  <Instagram className="h-4 w-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.facebook.com/share/1AVag5Q8oT/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                >
                  <Facebook className="h-4 w-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
