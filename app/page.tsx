"use client"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Bitcoin, BookOpen, GraduationCap, Users,  ShieldMinus ,Eye , Goal} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Miniaboutus from "@/components/mini-aboutus";
import Testimonials from "@/components/Testimonials";
import PastCohorts from "@/components/PastCohorts";
import Hero from "@/components/Hero";
import Features from "@/components/features";
import YouTubeVideoSection from "@/components/videoComponent";
//import YouTubeVideoSection from "@/components/bitcoin-kiboozi";

export default function Home() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: featuresRef, inView: featuresInView } = useInView({ triggerOnce: true });
  const { ref: programsRef, inView: programsInView } = useInView({ triggerOnce: true });
  const { ref: cohortsRef, inView: cohortsInView } = useInView({ triggerOnce: true });
  

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}

      <Hero/>
      <section className="w-full py-8 md:py-12 lg:py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container px-4 md:px-6">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]"
          >
            <div className="flex flex-col justify-center space-y-2">
              <div className="space-y-1">
              <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none text-orange-500 ">What drives Us</h1>
              <Miniaboutus/>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row py-3">
                <Link href="/about">
                  <Button className="bg-orange-500 hover:bg-orange-600">Learn More</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/images/Angie_Angie.jpeg"
                  alt="Bitcoin Education"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      {/* <Features/> */}
      <section className="w-full py-8 md:py-10 lg:py-16">
        <div className="container px-4 md:px-6">
          <motion.div
            ref={featuresRef}
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="space-y-2 px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why School of Satoshi
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We are committed to providing comprehensive financial education, with a strong emphasis on Bitcoin and its potential to drive economic empowerment. Our aim is to equip Ugandans with the knowledge and practical skills needed to navigate the financial landscape, break free from traditional barriers, and harness the power of Bitcoin as a tool for financial inclusion and independence.  
              </p>
            </div>

          </motion.div>
        </div>
      </section>

      <section className="w-full py-8 md:py-10 lg:py-12">
        <div className="container px-4 md:px-6">
          <div className="px-4 md:px-6 text-center ">      
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Services
            </h2>
          </div>
    
          <motion.div
            className="mx-auto grid max-w-5xl items-stretch gap-4 py-8 md:grid-cols-3 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={featuresInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card className="flex flex-col flex-grow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Bitcoin className="h-8 w-8 text-orange-500" />
                  <div className="grid gap-1">
                    <CardTitle>Bitcoin Fundamentals</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Learn the core concepts of Bitcoin, blockchain technology, and cryptocurrency.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card className="flex flex-col flex-grow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <GraduationCap className="h-8 w-8 text-orange-500" />
                  <div className="grid gap-1">
                    <CardTitle>Community Build</CardTitle>
                  </div>
                </CardHeader>
               <CardContent className="flex-grow">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Learn from industry professionals with years of experience in Bitcoin EcoSystem.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card className="flex flex-col flex-grow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <BookOpen className="h-8 w-8 text-orange-500" />
                  <div className="grid gap-1">
                    <CardTitle>Sensitization and Meetups</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Networking, Practical projects and real-world applications to reinforce your knowledge.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>


      <PastCohorts/>
      <Testimonials/>
      <YouTubeVideoSection/>

      
    </div>
  );
}























//OLD CODE



// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Bitcoin, BookOpen, GraduationCap, Users } from "lucide-react"

// export default function Home() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Hero Section */}
//       <section className="w-full py-12 md:py-10 lg:py-10 bg-gradient-to-b from-amber-50 to-white">
//         <div className="container px-4 md:px-6">
//           <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
//             <div className="flex flex-col justify-center space-y-4">
//               <div className="space-y-2">
//                 <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">School of Satoshi</h1>
//                 <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
//                   Empowering the next generation of Bitcoin innovators through world-class education and hands-on
//                   learning.
//                 </p>
//               </div>
//               <div className="flex flex-col gap-2 min-[400px]:flex-row">
//                 <Link href="/programs">
//                   <Button className="bg-orange-500 hover:bg-orange-600">Explore Programs</Button>
//                 </Link>
//                 <Link href="/about">
//                   <Button variant="outline">Learn More</Button>
//                 </Link>
//               </div>
//             </div>
//             <div className="flex items-center justify-center">
//               <Image
//                 src="/placeholder.svg?height=400&width=400"
//                 alt="Bitcoin Education"
//                 width={400}
//                 height={400}
//                 className="rounded-lg object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="w-full py-12 md:py-10 lg:py-10">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//                 Why Choose School of Satoshi
//               </h2>
//               <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                 Our comprehensive Bitcoin education programs are designed to take you from beginner to expert.
//               </p>
//             </div>
//           </div>
//           <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
//             <Card>
//               <CardHeader className="flex flex-row items-center gap-4">
//                 <Bitcoin className="h-8 w-8 text-orange-500" />
//                 <div className="grid gap-1">
//                   <CardTitle>Bitcoin Fundamentals</CardTitle>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                   Learn the core concepts of Bitcoin, blockchain technology, and cryptocurrency.
//                 </p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader className="flex flex-row items-center gap-4">
//                 <GraduationCap className="h-8 w-8 text-orange-500" />
//                 <div className="grid gap-1">
//                   <CardTitle>Expert Instructors</CardTitle>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                   Learn from industry professionals with years of experience in Bitcoin and blockchain.
//                 </p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader className="flex flex-row items-center gap-4">
//                 <BookOpen className="h-8 w-8 text-orange-500" />
//                 <div className="grid gap-1">
//                   <CardTitle>Hands-on Learning</CardTitle>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                   Practical projects and real-world applications to reinforce your knowledge.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Programs Preview */}
//       <section className="w-full py-12 md:py-10 lg:py-10 bg-gray-50 dark:bg-gray-900">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Programs</h2>
//               <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                 Comprehensive Bitcoin education for all skill levels.
//               </p>
//             </div>
//           </div>
//           <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Bitcoin Basics</CardTitle>
//                 <CardDescription>For Beginners</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                   A 4-week introduction to Bitcoin fundamentals, perfect for newcomers.
//                 </p>
//               </CardContent>
//               <CardFooter>
//                 <Link href="/programs#basics">
//                   <Button variant="outline">Learn More</Button>
//                 </Link>
//               </CardFooter>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <CardTitle>Developer Bootcamp</CardTitle>
//                 <CardDescription>For Aspiring Developers</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                   An 8-week intensive program focused on Bitcoin and Lightning Network development.
//                 </p>
//               </CardContent>
//               <CardFooter>
//                 <Link href="/programs#developer">
//                   <Button variant="outline">Learn More</Button>
//                 </Link>
//               </CardFooter>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <CardTitle>Advanced Protocol</CardTitle>
//                 <CardDescription>For Experienced Developers</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                   A 12-week deep dive into advanced Bitcoin protocol development and security.
//                 </p>
//               </CardContent>
//               <CardFooter>
//                 <Link href="/programs#advanced">
//                   <Button variant="outline">Learn More</Button>
//                 </Link>
//               </CardFooter>
//             </Card>
//           </div>
//           <div className="flex justify-center mt-8">
//             <Link href="/programs">
//               <Button className="bg-orange-500 hover:bg-orange-600">View All Programs</Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Previous Cohorts Preview */}
//       <section className="w-full py-12 md:py-10 lg:py-10">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Previous Cohorts</h2>
//               <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                 Our alumni are making waves in the Bitcoin ecosystem.
//               </p>
//             </div>
//           </div>
//           <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Cohort #1 - Spring 2023</CardTitle>
//                 <CardDescription>Developer Bootcamp</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex items-center space-x-2">
//                   <Users className="h-5 w-5 text-gray-500" />
//                   <span className="text-sm text-gray-500">24 Graduates</span>
//                 </div>
//                 <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
//                   Our inaugural cohort focused on Lightning Network development and Bitcoin scripting.
//                 </p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <CardTitle>Cohort #2 - Fall 2023</CardTitle>
//                 <CardDescription>Advanced Protocol</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex items-center space-x-2">
//                   <Users className="h-5 w-5 text-gray-500" />
//                   <span className="text-sm text-gray-500">18 Graduates</span>
//                 </div>
//                 <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
//                   This cohort specialized in advanced Bitcoin protocol development and contributed to open-source
//                   projects.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//           <div className="flex justify-center mt-8">
//             <Link href="/cohorts">
//               <Button variant="outline">View All Cohorts</Button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }



