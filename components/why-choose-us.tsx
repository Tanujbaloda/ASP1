"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Heart, Users, Award, Cpu, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "Safe Environment",
      description: "CCTV monitoring, secure premises, and trained staff ensure your child's safety at all times.",
      color: "from-purple-500 to-blue-500",
    },
    {
      icon: Heart,
      title: "Loving Care",
      description: "Our nurturing teachers provide individual attention and emotional support to every child.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Low teacher-to-student ratios ensure personalized attention and better learning outcomes.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      title: "Qualified Teachers",
      description: "All our educators are certified in early childhood education with years of experience.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Cpu,
      title: "AI Driven School",
      description: "Modern educational tools powered by AI to enhance learning experiences and track progress.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Sparkles,
      title: "Creative Curriculum",
      description: "Our curriculum balances academics with creative activities for holistic development.",
      color: "from-orange-500 to-red-500",
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
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
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
            Why Choose Ankuram Pre School?
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're committed to providing the best early childhood education experience. Here's what makes us special and
            trusted by families in our community.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${feature.color}`}></div>
                <CardContent className="p-6 text-center space-y-4">
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className={`bg-gradient-to-r ${feature.color} rounded-full p-4 w-fit mx-auto group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-white rounded-3xl p-8 text-center shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Join Our Family?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Give your child the best start in their educational journey. Contact us today and see why parents trust
            Ankuram Pre School for their children's early learning.
          </p>
          <div className="flex justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => scrollToSection("#contact")}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-medium transition-all"
              >
                Contact Us
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
