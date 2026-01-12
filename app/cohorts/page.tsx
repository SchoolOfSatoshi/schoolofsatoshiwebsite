"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Bitcoin, Rocket, Calendar, MapPin } from "lucide-react"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  hover: {
    y: -10,
    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    transition: { duration: 0.3, ease: "easeInOut" }
  }
}

const cohortsData = {
  "2024": [
    {
      id: "c1",
      title: "Cohort One",
      date: "August - September 2024",
      graduates: 7,
      image: "/assets/images/cohort1.jpeg",
      description: "Our inaugural cohort that pioneered Bitcoin education in Uganda. A small but dedicated group setting the foundation."
    },
    {
      id: "c2",
      title: "Cohort 2",
      date: "November - December 2024",
      graduates: 10,
      image: "/assets/images/c2_2.jpeg",
      description: "Building momentum with expanded curriculum and deeper community engagement across the region."
    }
  ],
  "2025": [
    {
      id: "c3-4",
      title: "Cohort 3 & 4",
      date: "Feb - May 2025",
      graduates: 45,
      image: "/assets/images/cohort_4.jpeg",
      description: "A combined session focusing on deep Bitcoin mechanics, hand-on laboratory work, and technical proficiency."
    },
    {
      id: "c5",
      title: "Cohort 5",
      date: "June - July 2025",
      graduates: 25,
      image: "/assets/images/cohort5.jpeg",
      description: "Exploring advanced layer 2 solutions, application development, and the future of Bitcoin protocols."
    }
  ]
}

export default function CohortsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative w-full py-16 md:py-20 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px]"
          />
        </div>

        <div className="container relative z-10 px-4 md:px-6 py-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center justify-center space-y-8 text-center"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Growing Community</span>
              </div>
              <h1 className="text-4xl font-heading font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">
                Previous <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">Cohorts</span>
              </h1>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl leading-relaxed">
                Celebrating the journey of our graduates. Meet the pioneers who are building the future of Bitcoin education in Uganda.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <div className="flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm border rounded-lg px-4 py-2">
                <Bitcoin className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-semibold">Real Proof of Work</span>
              </div>
              <div className="flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm border rounded-lg px-4 py-2">
                <Rocket className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-semibold">100+ Graduates</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cohorts Tabs with Animations */}
      <section className="w-full py-8 md:py-16">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="2024" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-muted p-1 rounded-xl h-14 w-full max-w-[400px]">
                <TabsTrigger value="2024" className="flex-1 rounded-lg text-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">2024</TabsTrigger>
                <TabsTrigger value="2025" className="flex-1 rounded-lg text-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">2025</TabsTrigger>
              </TabsList>
            </div>

            <AnimatePresence mode="wait">
              <TabsContent value="2024" key="2024" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  <div className="flex items-baseline space-x-4 mb-6">
                    <h2 className="text-3xl font-bold text-foreground">2024 Journey</h2>
                    <div className="h-px flex-1 bg-muted"></div>
                  </div>
                  <div className="grid gap-8 md:grid-cols-2">
                    {cohortsData["2024"].map((cohort) => (
                      <motion.div
                        key={cohort.id}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                      >
                        <Card className="glass-card border-none bg-secondary/10 overflow-hidden h-full flex flex-col">
                          <CardHeader className="p-0">
                            <div className="relative h-64 w-full overflow-hidden group">
                              <Image
                                src={cohort.image}
                                alt={cohort.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </CardHeader>
                          <CardContent className="p-6 space-y-4 flex-1">
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-2xl font-bold">{cohort.title}</CardTitle>
                              <div className="flex items-center space-x-1 bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase">
                                <Users className="h-3 w-3" />
                                <span>{cohort.graduates} Graduates</span>
                              </div>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="mr-2 h-4 w-4 text-primary" />
                              {cohort.date}
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                              {cohort.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="2025" key="2025" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  <div className="flex items-baseline space-x-4 mb-6">
                    <h2 className="text-3xl font-bold text-foreground">2025 Roadmap</h2>
                    <div className="h-px flex-1 bg-muted"></div>
                  </div>
                  <div className="grid gap-8 md:grid-cols-2">
                    {cohortsData["2025"].map((cohort) => (
                      <motion.div
                        key={cohort.id}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                      >
                        <Card className="glass-card border-none bg-secondary/10 overflow-hidden h-full flex flex-col">
                          <CardHeader className="p-0">
                            <div className="relative h-64 w-full overflow-hidden group">
                              <Image
                                src={cohort.image}
                                alt={cohort.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </CardHeader>
                          <CardContent className="p-6 space-y-4 flex-1">
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-2xl font-bold">{cohort.title}</CardTitle>
                              <div className="flex items-center space-x-1 bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase">
                                <Users className="h-3 w-3" />
                                <span>{cohort.graduates} Graduates</span>
                              </div>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="mr-2 h-4 w-4 text-primary" />
                              {cohort.date}
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                              {cohort.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </div>
      </section>

      {/* Modern Alumni Network Section */}
      <section className="relative w-full py-12 md:py-20 overflow-hidden bg-secondary/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-orange-100/30 via-transparent to-transparent opacity-50" />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col items-center justify-center space-y-8 text-center"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">Join Our Alumni Network</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Stay connected with fellow graduates, unlock mentorship opportunities, and continue your Bitcoin journey together in our growing circular economy.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row pt-4">
              <Link href="/alumni">
                <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-orange-600 text-white shadow-lg transition-all hover:scale-105 active:scale-95">
                  Alumni Portal
                </Button>
              </Link>
              <Link href="/events">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-primary text-primary hover:bg-primary/10 shadow-lg transition-all hover:scale-105 active:scale-95">
                  Upcoming Events
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


