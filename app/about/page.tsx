"use client"


import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bitcoin, BookOpen, GraduationCap, Users, Zap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion";
import Miniaboutus from "@/components/mini-aboutus";
import TeamLead from "@/components/teamLead";

const images = [
  "/assets/images/c2_3.jpeg",
  "/assets/images/sos1.jpeg",
  "/assets/images/sos2.jpeg",
  "/assets/images/c1_1.jpeg",
];

export default function AboutPage() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-12 lg:py-12 bg-gradient-to-b from-amber-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
             
               <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                About School of Satoshi
              </h1>
              <Miniaboutus/>
              {/*
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Our mission is to empower individuals with the knowledge and skills needed to participate in the
                Bitcoin economy.
              </p> */}
            </div>
          </div>
          <div className="flex items-center justify-center">
            {/* Image Carousel */}
            <div className="relative h-[400px] w-[600px] overflow-hidden rounded-lg">
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
                    src={images[currentIndex]}
                    alt={`School of Satoshi Campus ${currentIndex + 1}`}
                    fill
                    className="rounded-lg object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-12 lg:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Story</h2>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                School of Satoshi was founded in 2024 by a group of Bitcoin enthusiasts and educators who recognized the
                need for comprehensive, accessible Bitcoin education in Uganda.
              </p>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                What started as a small workshop series has grown into a full-fledged educational institution dedicated
                to Bitcoin excellence. Our programs have evolved to meet the growing demand for Bitcoin knowledge across
                all skill levels.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Vision</h2>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                We envision a world where Bitcoin education is accessible to everyone, regardless of their background or
                prior knowledge. We believe that by empowering individuals with Bitcoin knowledge based on there native Languages, we can contribute to
                a more inclusive and innovative financial future.
              </p>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Our goal is to become the leading Bitcoin education provider globally, known for our rigorous
                curriculum, expert instructors, and successful alumni network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-8 md:py-12 lg:py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Core Values</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The principles that guide everything we do at School of Satoshi.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Bitcoin className="h-8 w-8 text-orange-500" />
                <div className="grid gap-1">
                  <CardTitle>Bitcoin First</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We believe in the transformative power of Bitcoin and its potential to create a more equitable
                  financial system.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <BookOpen className="h-8 w-8 text-orange-500" />
                <div className="grid gap-1">
                  <CardTitle>Educational Excellence</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We are committed to providing the highest quality Bitcoin education through rigorous curriculum and
                  expert instruction.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Users className="h-8 w-8 text-orange-500" />
                <div className="grid gap-1">
                  <CardTitle>Community</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We foster a supportive community of learners, educators, and Bitcoin enthusiasts who share knowledge
                  and resources.
                </p>
              </CardContent>
            </Card>
            {/* <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Zap className="h-8 w-8 text-orange-500" />
                <div className="grid gap-1">
                  <CardTitle>Innovation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We encourage creative thinking and innovative approaches to Bitcoin development and adoption.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <GraduationCap className="h-8 w-8 text-orange-500" />
                <div className="grid gap-1">
                  <CardTitle>Lifelong Learning</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We believe in continuous education and staying updated with the latest developments in Bitcoin
                  technology.
                </p>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="w-full py-12 md:py-12 lg:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Meet the passionate educators and Bitcoin experts behind School of Satoshi.
              </p>
            </div>
          </div>
          <TeamLead/>
        </div>
      </section>
    </div>
  )
}

