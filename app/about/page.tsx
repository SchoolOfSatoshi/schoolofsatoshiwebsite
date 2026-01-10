
"use client"

import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform, Variants } from "framer-motion"
import { Bitcoin, Target, Eye, Heart, Users, BookOpen, Lightbulb, Globe } from "lucide-react"
import TeamLead from "@/components/teamLead"

const images = [
  "/assets/images/cohort_5.jpeg",
  "/assets/images/cohort4_1.jpeg",
  "/assets/images/cohort4.jpeg",
  "/assets/images/c2_3.jpeg",
  "/assets/images/sos1.jpeg",
  "/assets/images/sos2.jpeg",
  "/assets/images/c1_1.jpeg",
]

const milestones = [
  { year: "June 2024", title: "Inception & Grant", description: "Established as an educational arm of Bitcoin Kampala with a 2M sats grant from Bitcoin Beach." },
  { year: "2024 - 2025", title: "Educational Impact", description: "Successfully completed 5 cohorts and 62 online classes using the translated Bitcoin Diploma curriculum." },
  { year: "Achievement", title: "Full Node Status", description: "Officially recognized as a Full Node in the global Mi Primer Bitcoin Network after demonstrating consistent proof of work." },
  { year: "Community", title: "Real-World Adoption", description: "Launched 'Bitcoin Kiboozi' street series and organized merchant showcase tours to drive circular economy growth." },
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

  const timelineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end center"]
  })
  const scaleY = useTransform(timelineProgress, [0, 1], [0, 1])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Enhanced Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-background py-10 md:py-16">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100/20 via-background to-background dark:from-orange-900/20" />

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, -30, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px]"
          />

          {/* Floating Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-[15%]"
          >
            <Bitcoin className="w-16 h-16 text-primary/20 rotate-12" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/3 right-[10%]"
          >
            <Lightbulb className="w-12 h-12 text-orange-500/20 -rotate-12" />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col space-y-6"
            >
              <div className="space-y-4">
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 w-fit"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">Established 2024</span>
                </motion.div>

                <motion.h1 variants={fadeInUp} className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  About <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-yellow-500">
                    School of Satoshi
                  </span>
                </motion.h1>

                <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Empowering the next generation of Bitcoiners through accessible, comprehensive education in Uganda. We're bridging the knowledge gap to create financial sovereignty as a recognized Full Node in the Mi Primer Bitcoin Network.
                </motion.p>
              </div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <div className="flex -space-x-4">
                  {images.slice(0, 6).map((src, index) => (
                    <div key={index} className={`w-12 h-12 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden z-[${5 - index}]`}>
                      <Image
                        src={src}
                        alt="Student"
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          // Fallback to a generic placeholder if image fails
                          e.currentTarget.src = `https://ui-avatars.com/api/?background=random&name=Student+${index}`
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center space-x-2 text-sm font-medium">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                  </div>
                  <span className="text-muted-foreground">Joined by <AnimatedCounter end={100} />+ Students</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Image Section - Stacked/3D Effect */}
            {/* Image Section - Stacked/3D Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-orange-500/30 blur-3xl rounded-full opacity-60 transform translate-x-10 translate-y-10" />

              <div className="relative aspect-[4/5] md:aspect-square w-full max-w-md mx-auto h-[400px]">
                {/* Decorative background visual */}
                <div className="absolute -inset-4 bg-white/5 border border-white/10 rounded-3xl -rotate-6 backdrop-blur-sm z-0" />
                <div className="absolute -inset-4 bg-white/5 border border-white/10 rounded-3xl rotate-3 backdrop-blur-sm z-0" />

                {/* Main Image Container - Card Stack */}
                <div className="absolute inset-0 z-10">
                  {images.map((img, index) => {
                    // Calculate relative position based on currentIndex
                    // 0 = current, 1 = next, len-1 = out, others = stacked
                    const offset = (index - currentIndex + images.length) % images.length

                    let variant = 'stacked'
                    if (offset === 0) variant = 'current'
                    else if (offset === 1) variant = 'next'
                    else if (offset === images.length - 1) variant = 'out'

                    return (
                      <motion.div
                        key={index}
                        variants={{
                          current: {
                            zIndex: 10,
                            opacity: 1,
                            scale: 1,
                            rotate: -1,
                            x: 0,
                            y: 0,
                            transition: { duration: 0.3, ease: "easeInOut" }
                          },
                          next: {
                            zIndex: 5,
                            opacity: 1,
                            scale: 1,
                            rotate: 4,
                            x: 25,
                            y: -25,
                            transition: { duration: 0.4, ease: "easeInOut" }
                          },
                          stacked: {
                            zIndex: 2,
                            opacity: 1,
                            scale: 1,
                            rotate: 4,
                            x: 25,
                            y: 0,
                            transition: { duration: 0.4, ease: "easeInOut" }
                          },
                          out: {
                            zIndex: [20, 10, 1],
                            opacity: 1,
                            y: [0, -200, -50],
                            x: [0, -40, 55],
                            rotate: [-1, -5, 8],
                            scale: [1, 1, 0.95],
                            transition: { duration: 0.6, ease: [0.8, 0.2, 0.1, 0.8] }
                          }
                        }}
                        animate={variant}
                        className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-muted cursor-pointer"
                        onClick={() => {
                          // Only allow clicking the current card to move to next
                          // or allow any card to set new index? 
                          // User prompt implies specific animation sequence.
                          // Let's make clicking the current card trigger the sequence (next)
                          if (variant === 'current') {
                            setCurrentIndex((prev) => (prev + 1) % images.length)
                          }
                        }}
                      >
                        <Image
                          src={img}
                          alt={`School of Satoshi Moment ${index + 1}`}
                          fill
                          className="object-cover"
                          priority={index < 2} // Prioritize creating current and next
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        {/* 
                        {variant === 'current' && (
                          <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                            <p className="text-xs font-bold uppercase tracking-wider mb-1 opacity-90 text-orange-400">Highlights</p>
                            <p className="text-lg font-bold">Empowering Communities</p>
                          </div>
                        )} */}
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      {/* <section className="w-full py-10 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
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
      </section> */}

      {/* Journey Timeline */}
      <section className="w-full py-10 md:py-16 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-8"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-400 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            ref={timelineRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="relative"
          >
            {/* Timeline Line */}
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-orange-400 to-primary hidden md:block"
            />

            <div className="space-y-10">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
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

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-10 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-8"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at School of Satoshi
            </p>
          </motion.div>

          <div className="relative w-full overflow-hidden">
            {/* Gradient Fade Edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />

            {/* Marquee Container */}
            <motion.div
              className="flex gap-6 py-4 px-4 w-max"
              animate={{ x: "-50%" }}
              transition={{
                duration: 40,
                ease: "linear",
                repeat: Infinity
              }}
            >
              {[...values, ...values].map((value, index) => (
                <div
                  key={index}
                  className="min-w-[280px] md:min-w-[320px] glass-card p-8 rounded-2xl text-center flex-shrink-0 border bg-background/50 border-white/10 relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-2xl rotate-3 mb-6 group-hover:rotate-6 transition-transform duration-300 ring-1 ring-white/20">
                      <value.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{value.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="w-full py-10 md:py-16 relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/videos/gradCohort_5.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-primary/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        {/* 
        <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
          <Bitcoin className="absolute top-10 left-10 w-32 h-32 animate-float text-white" />
          <Bitcoin className="absolute bottom-10 right-10 w-40 h-40 animate-float text-white" style={{ animationDelay: "1.5s" }} />
        </div> */}

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-8"
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
                  <AnimatedCounter end={5} />
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
      <section className="w-full py-10 md:py-16 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-8"
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