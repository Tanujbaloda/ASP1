"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Gallery() {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    { src: "/images/student-activity.png", alt: "Student working on puzzle activities at Ankuram Pre School" },
    { src: "/images/student-learning.png", alt: "Student learning with colorful letters and numbers" },
    { src: "/images/c1.png", alt: "Student learning with colorful wooden materials" },
    { src: "/images/c2.png", alt: "Independence Day celebration with student in traditional attire" },
    { src: "/images/c3.png", alt: "Diwali celebration with students in traditional Indian dresses" },
    { src: "/images/c4.png", alt: "Christmas celebration with students in Santa hats" },
    { src: "/images/c5.png", alt: "Classroom learning session with students in uniforms" },
    { src: "/images/c6.png", alt: "Graduation day celebration at Ankuram Pre School" },
    { src: "/images/c7.png", alt: "Holi celebration with children playing with colors" },
    { src: "/images/c8.png", alt: "Festival celebration with children showing painted hands" },
  ]

  return (
    <section id="gallery" className="py-20 bg-white">
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
            Gallery
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a glimpse into the joyful moments and learning experiences at Ankuram Pre School. See our children
            explore, create, and grow in our nurturing environment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-96 md:h-[500px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={images[currentImage].src || "/placeholder.svg"}
                  alt={images[currentImage].alt}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="p-6">
              <p className="text-center text-gray-600 font-medium">{images[currentImage].alt}</p>
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.5 }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentImage
                    ? "bg-gradient-to-r from-purple-400 to-pink-400"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {images.slice(0, 8).map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-lg"
              onClick={() => setCurrentImage(index)}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
