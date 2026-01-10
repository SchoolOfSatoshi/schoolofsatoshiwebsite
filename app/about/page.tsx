


"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Miniaboutus from "@/components/mini-aboutus"
import TeamLead from "@/components/teamLead"

const images = [
  "/assets/images/c2_3.jpeg",
  "/assets/images/sos1.jpeg",
  "/assets/images/sos2.jpeg",
  "/assets/images/c1_1.jpeg",
]

export default function AboutPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds
    return () => clearInterval(interval) // Cleanup interval on unmount
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-10 md:py-16 bg-gradient-to-b from-amber-50 to-white dark:from-background dark:to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_500px] items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
                  About School of Satoshi
                </h1>
                <div className="text-lg md:text-xl text-muted-foreground">
                  <Miniaboutus />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center order-first lg:order-last">
              {/* Image Carousel */}
              <div className="relative h-64 sm:h-80 md:h-96 w-full max-w-md lg:max-w-none overflow-hidden rounded-2xl shadow-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[currentIndex] || "/placeholder.svg"}
                      alt={`School of Satoshi Campus ${currentIndex + 1}`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentIndex
                          ? 'bg-white shadow-lg scale-110'
                          : 'bg-white/60 hover:bg-white/80'
                        }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-10 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8 text-center sm:text-left">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-center mb-8">
              Our Story
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                School of Satoshi was established in June 2024 by Bitcoin enthusiasts Angella Wafwoyo and Angella
                Mulikatete, under the mentorship of Bitcoin Kampala, in response to the growing need for accessible and
                comprehensive Bitcoin education in Uganda.
              </p>
              <p>
                We envision a world where Bitcoin education is accessible to everyone, regardless of their background or
                prior knowledge. We believe that by empowering individuals with Bitcoin knowledge based on their native
                languages, we can contribute to a more inclusive and innovative financial future.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-primary mb-2">2024</div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </div>
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Students Educated</div>
              </div>
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-primary mb-2">Uganda</div>
                <div className="text-sm text-muted-foreground">Based in Kampala</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="w-full py-10 md:py-16 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Our Founders
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              Meet the passionate founders behind School of Satoshi.
            </p>
          </div>

          <div className="w-full">
            <TeamLead />
          </div>
        </div>
      </section>
    </div>
  )
}