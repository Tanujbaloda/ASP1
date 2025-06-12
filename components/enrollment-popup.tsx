"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"

export function EnrollmentPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="border-none shadow-xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardHeader className="relative pb-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                <CardTitle className="text-2xl text-center text-gray-800">Enroll Your Child Today!</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-center text-gray-600">
                  Limited seats available for the upcoming session. Fill this form to reserve a spot for your child.
                </p>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Parent's Name</label>
                    <Input placeholder="Your full name" className="border-gray-300 focus:border-purple-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Phone Number</label>
                    <Input placeholder="Your phone number" className="border-gray-300 focus:border-purple-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Child's Name</label>
                    <Input placeholder="Child's name" className="border-gray-300 focus:border-purple-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Program</label>
                    <select className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                      <option value="">Select a program</option>
                      <option value="pre-nursery">Pre Nursery (2-3 years)</option>
                      <option value="nursery">Nursery (3-4 years)</option>
                      <option value="junior-kg">Junior KG (4-5 years)</option>
                      <option value="senior-kg">Senior KG (5-6 years)</option>
                      <option value="class-1">Class 1 (6-7 years)</option>
                      <option value="class-2">Class 2 (7-8 years)</option>
                    </select>
                  </div>
                </div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3">
                    Request Enrollment
                  </Button>
                </motion.div>
                <p className="text-xs text-gray-500 text-center">
                  We'll contact you within 24 hours to confirm your child's enrollment.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
