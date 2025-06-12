"use client"

import { motion } from "framer-motion"
import { Heart, Users, BookOpen, Sparkles } from "lucide-react"

export function OurStory() {
  const highlights = [
    {
      icon: Heart,
      title: "Rooted in Love",
      description: "Every child feels valued and nurtured in our caring environment",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Users,
      title: "Montessori Philosophy",
      description: "Child-centered approach that makes learning natural and enjoyable",
      color: "from-purple-500 to-blue-500",
    },
    {
      icon: BookOpen,
      title: "Pre-Nursery to Class II",
      description: "Comprehensive early education journey for growing minds",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Sparkles,
      title: "Vibrant Learning",
      description: "Classrooms filled with laughter, discovery, and meaningful play",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
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
            Our Story
          </motion.h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12"
          >
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-6 text-gray-800 font-medium">
                At Ankuram, we believe every child is unique and full of potential. Our journey began with a simple
                vision: to create a joyful and secure learning space where young minds feel valued, nurtured, and
                inspired.
              </p>

              <p className="mb-6">
                Our school caters to children from Pre-Nursery to Class II. Rooted in love and guided by the Montessori
                philosophy, we provide an environment where children grow not just academically but emotionally,
                socially, and creatively.
              </p>

              <p className="mb-6">
                Our classrooms are vibrant spaces filled with laughter, discovery, and meaningful play. With
                age-appropriate Montessori materials, hands-on activities, and a child-centered approach, we aim to make
                learning a natural and enjoyable experience.
              </p>

              <p className="text-lg font-medium text-gray-800">
                We take pride in being a second home for children—a place where they feel safe, respected, and happy
                every single day.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className={`bg-gradient-to-r ${highlight.color} rounded-full p-3 w-fit mb-4`}
                >
                  <highlight.icon className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
