"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <Link href="/" className="flex items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-12 h-12 rounded-lg overflow-hidden bg-white p-1 flex-shrink-0"
              >
                <img
                  src="/images/brand-logo.png"
                  alt="Ankuram Pre School Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <span className="text-xl font-bold">Ankuram Pre School</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">Nurturing Little Minds</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }}>
                <Link href="#about" className="text-gray-300 hover:text-yellow-300 transition-colors text-sm">
                  About Us
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link href="#programs" className="text-gray-300 hover:text-yellow-300 transition-colors text-sm">
                  Programs
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link href="#gallery" className="text-gray-300 hover:text-yellow-300 transition-colors text-sm">
                  Gallery
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link href="#contact" className="text-gray-300 hover:text-yellow-300 transition-colors text-sm">
                  Contact
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link href="#" className="text-gray-300 hover:text-yellow-300 transition-colors text-sm">
                  Admissions
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }}>
                <span className="text-gray-300 text-sm">Pre Nursery (2 - 3 years)</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <span className="text-gray-300 text-sm">Nursery (3 - 4 years)</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <span className="text-gray-300 text-sm">Junior KG (4 - 5 years)</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <span className="text-gray-300 text-sm">Senior KG (5 - 6 years)</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <span className="text-gray-300 text-sm">Class 1 (6 - 7 years)</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <span className="text-gray-300 text-sm">Class 2 (7 - 8 years)</span>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <motion.div whileHover={{ x: 5 }} className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium break-all">ankuramplayschool22@gmail.com</p>
                </div>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">+91 9205852680</p>
                </div>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Near Power House, Rajgarh Road</p>
                  <p className="text-white text-sm font-medium">Pilani, Rajasthan</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 Ankuram Pre School. All rights reserved. |
            <Link href="#" className="hover:text-yellow-300 transition-colors ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="#" className="hover:text-yellow-300 transition-colors ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
