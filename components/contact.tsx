"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Users } from "lucide-react"
import { motion } from "framer-motion"

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Near Power House", "Rajgarh Road", "Pilani, Rajasthan"],
      color: "from-purple-500 to-blue-500",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9205852680"],
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["ankuramplayschool22@gmail.com"],
      color: "from-yellow-500 to-orange-500",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            whileHover={{ scale: 1.05, color: "#8B5CF6" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 cursor-pointer"
          >
            Get in Touch
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to give your child the best start? Contact us today to ask questions or begin the enrollment process.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div key={index} variants={item}>
                    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full">
                      <div className={`h-1 bg-gradient-to-r ${info.color}`}></div>
                      <CardHeader className="pb-3">
                        <div className="flex items-center space-x-3">
                          <motion.div
                            whileHover={{ rotate: 10 }}
                            className={`bg-gradient-to-r ${info.color} rounded-full p-2`}
                          >
                            <info.icon className="h-5 w-5 text-white" />
                          </motion.div>
                          <CardTitle className="text-lg">{info.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-800 text-sm leading-relaxed font-medium break-all">
                            {detail}
                          </p>
                        ))}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Why Visit Us?</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <motion.li whileHover={{ x: 5 }} className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Tour our safe and stimulating facilities
                </motion.li>
                <motion.li whileHover={{ x: 5 }} className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Meet our experienced teaching staff
                </motion.li>
                <motion.li whileHover={{ x: 5 }} className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  See our curriculum and programs in action
                </motion.li>
                <motion.li whileHover={{ x: 5 }} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Discuss your child's specific needs
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-800">Thank You for Visiting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-full p-6 w-fit mx-auto"
                >
                  <Users className="h-12 w-12 text-purple-600" />
                </motion.div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">We're Delighted You're Here!</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Thank you for taking the time to explore Ankuram Pre School. We understand that choosing the right
                    educational foundation for your child is one of the most important decisions you'll make as a
                    parent.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Our dedicated team is committed to providing exceptional early childhood education in a nurturing,
                    safe, and inspiring environment. We would be honored to be part of your child's educational journey.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700 font-medium">
                    "Every child deserves the best start in life. We're here to make that happen."
                  </p>
                  <p className="text-xs text-gray-500 mt-2">- The Ankuram Pre School Team</p>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <button
                    onClick={() => scrollToSection("#contact")}
                    className="inline-block w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 px-6 rounded-lg font-medium transition-all"
                  >
                    Get in Touch
                  </button>
                </motion.div>

                <p className="text-xs text-gray-500">
                  We look forward to welcoming you and your child to our Ankuram family!
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
