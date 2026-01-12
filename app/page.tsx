"use client"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bitcoin, BookOpen, GraduationCap, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Miniaboutus from "@/components/mini-aboutus";
import PastCohorts from "@/components/PastCohorts";
import Hero from "@/components/Hero";
import YouTubeVideoSection from "@/components/videoComponent";
import ServiceFlipCard from "@/components/ServiceFlipCard";

export default function Home() {
  // Variants for animations
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* About Section */}
      <section className="w-full py-16 md:py-20 bg-secondary/30">
        <div className="container px-4">

          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-heading font-bold tracking-tight text-primary sm:text-4xl">What Drives Us</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* Left Column: Mission/Vision Content */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="text-muted-foreground">
                <Miniaboutus />
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="flex items-center justify-center h-full">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 glass-card w-full max-w-md aspect-[3/4]"
              >
                <Image
                  src="/assets/images/Angie_angy.jpeg"
                  alt="Bitcoin Education Team"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-2 bg-secondary/20">
        <div className="container px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl text-primary">
              Our Services
            </h2>
          </motion.div>



          <motion.div
            className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                icon: Bitcoin,
                title: "Bitcoin Fundamentals",
                desc: "Learn the core concepts of Bitcoin, blockchain technology."
              },
              {
                icon: GraduationCap,
                title: "Community Build",
                desc: "Learn from industry professionals with years of experience in Bitcoin EcoSystem."
              },
              {
                icon: BookOpen,
                title: "Sensitization and Meetups",
                desc: "Networking, Practical projects and real-world applications to reinforce your knowledge."
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="h-full"
              >
                <ServiceFlipCard icon={service.icon} title={service.title} desc={service.desc} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <PastCohorts />

      {/* <YouTubeVideoSection /> */}

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-background overflow-hidden relative">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 md:px-12 md:py-24 shadow-2xl"
          >
            {/* Background Video */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
              >
                <source src="/assets/videos/sos_video.mp4" type="video/mp4" />
              </video>
              {/* Overlay to ensure text readability */}
              <div className="absolute top-0 left-0 w-full h-full bg-primary/80 mix-blend-multiply"></div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <Bitcoin className="absolute -right-10 top-1/2 -translate-y-1/2 w-[500px] h-[500px] text-white/5 opacity-10 -rotate-12 hidden lg:block" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <h2 className="text-3xl font-heading font-bold tracking-tight text-white sm:text-4xl md:text-5xl drop-shadow-sm">
                  Ready to Join the Bitcoin Revolution?
                </h2>
                <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
                  Applications are now open for our upcoming cohorts. Take the first step towards mastering the future of finance and technology.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
                <Link href="https://forms.gle/oVWK1JJdeEWstvTY8" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 text-lg font-bold px-10 h-14 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all hover:-translate-y-1"
                  >
                    Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 bg-white/5 text-white hover:bg-white/10 text-lg font-semibold px-10 h-14 rounded-full backdrop-blur-sm transition-all hover:-translate-y-1"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
