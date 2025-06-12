"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Baby, Users, GraduationCap, Palette, Music, BookOpen, School } from "lucide-react"
import { motion } from "framer-motion"

export function Programs() {
  const programs = [
    {
      icon: Baby,
      title: "Pre Nursery",
      age: "2 to 3 years",
      description:
        "Gentle introduction to structured learning with focus on sensory exploration and basic social skills.",
      features: ["Sensory Play", "Music & Movement", "Art Exploration", "Social Skills"],
      color: "from-pink-400 to-rose-400",
    },
    {
      icon: Users,
      title: "Nursery",
      age: "3 to 4 years",
      description:
        "Building independence and communication skills through play-based learning and creative activities.",
      features: ["Language Development", "Creative Arts", "Physical Activities", "Independence Skills"],
      color: "from-purple-400 to-blue-400",
    },
    {
      icon: GraduationCap,
      title: "Junior KG",
      age: "4 to 5 years",
      description: "Comprehensive school readiness program preparing children for kindergarten success.",
      features: ["Early Literacy", "Math Concepts", "Science Discovery", "School Readiness"],
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: School,
      title: "Senior KG",
      age: "5 to 6 years",
      description: "Advanced kindergarten program focusing on academic and social development.",
      features: ["Reading Skills", "Writing Practice", "Number Concepts", "Critical Thinking"],
      color: "from-green-400 to-teal-400",
    },
    {
      icon: School,
      title: "Class 1",
      age: "6 to 7 years",
      description: "First grade curriculum with focus on core academic subjects and creative expression.",
      features: ["Reading Comprehension", "Basic Mathematics", "Environmental Studies", "Art & Craft"],
      color: "from-yellow-400 to-orange-400",
    },
    {
      icon: School,
      title: "Class 2",
      age: "7 to 8 years",
      description: "Second grade curriculum building on previous knowledge with more advanced concepts.",
      features: ["Advanced Reading", "Mathematics", "Science & Social Studies", "Physical Education"],
      color: "from-orange-400 to-red-400",
    },
  ]

  const activities = [
    { icon: Palette, title: "Art & Craft", description: "Creative expression through various art mediums" },
    { icon: Music, title: "Music & Dance", description: "Rhythm, melody, and movement activities" },
    { icon: BookOpen, title: "Story Time", description: "Building language skills through engaging stories" },
  ]

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
    <section id="programs" className="py-20 bg-white">
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
            Our Programs
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Age-appropriate programs designed to meet the developmental needs of every child, fostering growth in a fun
            and engaging environment.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {programs.map((program, index) => (
            <motion.div key={index} variants={item}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
                <CardHeader className="text-center pb-4">
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className={`bg-gradient-to-r ${program.color} rounded-full p-4 w-fit mx-auto mb-4`}
                  >
                    <program.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl text-gray-800">{program.title}</CardTitle>
                  <p className="text-sm font-medium text-gray-500">{program.age}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <div className={`w-2 h-2 rounded-full mr-2 bg-gradient-to-r ${program.color}`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button className={`w-full mt-4 bg-gradient-to-r ${program.color} hover:opacity-90`}>
                      Learn More
                    </Button>
                  </motion.div>
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
          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-lg"
        >
          <motion.h3
            whileHover={{ scale: 1.05, color: "#8B5CF6" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-2xl font-bold text-gray-800 text-center mb-8 cursor-pointer"
          >
            Special Activities
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <motion.div key={index} whileHover={{ y: -5 }} className="text-center space-y-4">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-full p-4 w-fit mx-auto"
                >
                  <activity.icon className="h-6 w-6 text-purple-600" />
                </motion.div>
                <h4 className="font-semibold text-gray-800">{activity.title}</h4>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
