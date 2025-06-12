"use client"

import { Users, Award, Heart, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 hero-background"
        style={{
          backgroundImage: "url('/images/student-learning.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="absolute inset-0 bg-white/20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 max-w-4xl mx-auto">
            <motion.h2
              whileHover={{ scale: 1.05, color: "#8B5CF6" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 cursor-pointer"
            >
              About Us
            </motion.h2>
            <p className="text-lg text-gray-800 font-medium leading-relaxed">
              Ankuram Pre School has been a trusted partner in early childhood education, providing a nurturing
              environment where children develop essential skills for lifelong learning.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h3
              whileHover={{ scale: 1.05, color: "#8B5CF6" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-2xl font-bold text-gray-900 drop-shadow-md cursor-pointer"
            >
              Our Values
            </motion.h3>
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5, scale: 1.02 }}
                className="flex items-start space-x-3 p-3 rounded-lg bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all"
              >
                <div className="bg-purple-100 rounded-full p-2 mt-1">
                  <Award className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Safe & Secure Environment</h4>
                  <p className="text-gray-700 text-sm">
                    CCTV monitoring and secure premises ensure complete safety for all children
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ x: 5, scale: 1.02 }}
                className="flex items-start space-x-3 p-3 rounded-lg bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all"
              >
                <div className="bg-pink-100 rounded-full p-2 mt-1">
                  <Users className="h-4 w-4 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Holistic Development</h4>
                  <p className="text-gray-700 text-sm">
                    Focus on emotional, social, and cognitive growth through diverse activities
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ x: 5, scale: 1.02 }}
                className="flex items-start space-x-3 p-3 rounded-lg bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all"
              >
                <div className="bg-blue-100 rounded-full p-2 mt-1">
                  <Users className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Experienced Teachers</h4>
                  <p className="text-gray-700 text-sm">
                    Qualified educators with years of experience in early childhood education
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ x: 5, scale: 1.02 }}
                className="flex items-start space-x-3 p-3 rounded-lg bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all"
              >
                <div className="bg-green-100 rounded-full p-2 mt-1">
                  <Heart className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Friendly Environment</h4>
                  <p className="text-gray-700 text-sm">
                    Warm and welcoming atmosphere where children feel comfortable and happy
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ x: 5, scale: 1.02 }}
                className="flex items-start space-x-3 p-3 rounded-lg bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all"
              >
                <div className="bg-yellow-100 rounded-full p-2 mt-1">
                  <BookOpen className="h-4 w-4 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Innovative Curriculum</h4>
                  <p className="text-gray-700 text-sm">
                    Modern teaching methods that make learning engaging and effective
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
              <img
                src="/images/c1.png"
                alt="Student learning with colorful materials at Ankuram Pre School"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
