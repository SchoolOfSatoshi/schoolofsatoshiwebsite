
"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Bitcoin, Target, Eye, Heart, Users, BookOpen, Lightbulb, Globe } from "lucide-react"
import TeamLead from "@/components/teamLead"

const images = [
  "/assets/images/c2_3.jpeg",
  "/assets/images/sos1.jpeg",
  "/assets/images/sos2.jpeg",
  "/assets/images/c1_1.jpeg",
]

const milestones = [
  { year: "June 2024", title: "Foundation", description: "School of Satoshi established by Angella Wafwoyo and Angella Mulikatete" },
  { year: "July 2024", title: "First Cohort", description: "Launched our inaugural Bitcoin education program" },
  { year: "Sept 2024", title: "100+ Students", description: "Reached milestone of educating over 100 students" },
  { year: "2025", title: "Expansion", description: "Growing our reach across Uganda and beyond" },
]

const values = [
  { icon: Heart, title: "Accessibility", description: "Making Bitcoin education available to everyone" },
  { icon: Users, title: "Community", description: "Building a strong, supportive learning network" },
  { icon: BookOpen, title: "Education", description: "Providing comprehensive, quality content" },
  { icon: Lightbulb, title: "Innovation", description: "Embracing new teaching methods and technologies" },
  { icon: Globe, title: "Inclusivity", description: "Teaching in native languages for better understanding" },
  { icon: Bitcoin, title: "Bitcoin First", description: "Focused on Bitcoin fundamentals and principles" },
]

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}</span>
}

export default function AboutPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/20">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            style={{ y }}
            className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          />
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
            className="absolute bottom-20 left-10 w-80 h-80 bg-orange-300/10 rounded-full blur-3xl"
          />
          <Bitcoin className="absolute top-1/4 left-[10%] w-16 h-16 text-primary/10 animate-float" />
          <Bitcoin className="absolute bottom-1/3 right-[15%] w-12 h-12 text-primary/10 animate-float" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col justify-center space-y-6"
            >
              <motion.div variants={fadeInUp} className="space-y-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "4rem" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-1 bg-gradient-to-r from-primary to-orange-400 rounded-full"
                />
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  About{" "}
                  <span className="text-gradient">School of Satoshi</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Empowering the next generation of Bitcoiners through accessible, comprehensive education in Uganda.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center order-first lg:order-last"
            >
              <div className="relative h-80 sm:h-96 md:h-[500px] w-full max-w-md lg:max-w-none overflow-hidden rounded-3xl shadow-2xl border-4 border-white/20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[currentIndex]}
                      alt={`School of Satoshi ${currentIndex + 1}`}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-white w-8 shadow-lg'
                          : 'bg-white/60 w-2 hover:bg-white/80'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="w-full py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-8 rounded-2xl border-2 border-primary/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
              <Target className="w-12 h-12 text-primary mb-4 relative z-10" />
              <h3 className="text-2xl font-bold mb-4 relative z-10">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                To provide accessible, comprehensive Bitcoin education in native languages, empowering individuals across Uganda to understand and participate in the future of finance.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-8 rounded-2xl border-2 border-primary/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400/10 rounded-full blur-2xl group-hover:bg-orange-400/20 transition-all duration-500" />
              <Eye className="w-12 h-12 text-primary mb-4 relative z-10" />
              <h3 className="text-2xl font-bold mb-4 relative z-10">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                A world where Bitcoin education is accessible to everyone, regardless of background, contributing to a more inclusive and innovative financial future for all.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="w-full py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-400 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-orange-400 to-primary hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                    <div className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="text-primary font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10 hidden md:block">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at School of Satoshi
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="glass-card p-6 rounded-xl text-center group cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-br from-primary via-orange-500 to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Bitcoin className="absolute top-10 left-10 w-32 h-32 animate-float" />
          <Bitcoin className="absolute bottom-10 right-10 w-40 h-40 animate-float" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-white/90 text-lg">Making a difference in Bitcoin education</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  <AnimatedCounter end={100} />+
                </div>
                <div className="text-white/90 text-lg">Students Educated</div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  <AnimatedCounter end={5} />+
                </div>
                <div className="text-white/90 text-lg">Cohorts Completed</div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">2024</div>
                <div className="text-white/90 text-lg">Year Founded</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="w-full py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Meet Our Founders
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              The passionate visionaries behind School of Satoshi, dedicated to making Bitcoin education accessible to all.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <TeamLead />
          </motion.div>
        </div>
      </section>
    </div>
  )
}