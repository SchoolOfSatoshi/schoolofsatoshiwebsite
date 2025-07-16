


// "use client"

// import Image from "next/image"
// import { useEffect, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Miniaboutus from "@/components/mini-aboutus"
// import TeamLead from "@/components/teamLead"

// const images = [
//   "/assets/images/c2_3.jpeg",
//   "/assets/images/sos1.jpeg",
//   "/assets/images/sos2.jpeg",
//   "/assets/images/c1_1.jpeg",
// ]

// export default function AboutPage() {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
//     }, 5000) // Change image every 5 seconds
//     return () => clearInterval(interval) // Cleanup interval on unmount
//   }, [])

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Hero Section */}
//       <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-b from-amber-50 to-white">
//         <div className="container px-4 md:px-6">
//           <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
//             <div className="flex flex-col justify-center space-y-6">
//               <div className="space-y-4">
//                 <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
//                   About School of Satoshi
//                 </h1>
//                 <Miniaboutus />
//               </div>
//             </div>
//             <div className="flex items-center justify-center">
//               {/* Image Carousel */}
//               <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-xl">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={currentIndex}
//                     initial={{ opacity: 0, x: 100 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -100 }}
//                     transition={{ duration: 0.5 }}
//                     className="absolute inset-0"
//                   >
//                     <Image
//                       src={images[currentIndex] || "/placeholder.svg"}
//                       alt={`School of Satoshi Campus ${currentIndex + 1}`}
//                       fill
//                       className="rounded-lg object-cover"
//                     />
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Story */}
//       <section className="w-full py-16 md:py-20 lg:py-24">
//         <div className="container px-4 md:px-6">
//           <div className="max-w-3xl mx-auto">
//             <div className="space-y-6">
//               <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-8">
//                 Our Story
//               </h2>
//               <p className="font-sans text-gray-700 md:text-xl leading-relaxed">
//                 School of Satoshi was established in June 2024 by Bitcoin enthusiasts Angella Wafwoyo and Angella
//                 Mulikatete, under the mentorship of Bitcoin Kampala, in response to the growing need for accessible and
//                 comprehensive Bitcoin education in Uganda.
//               </p>
//               <p className="font-sans text-gray-700 md:text-xl leading-relaxed">
//                 We envision a world where Bitcoin education is accessible to everyone, regardless of their background or
//                 prior knowledge. We believe that by empowering individuals with Bitcoin knowledge based on their native
//                 languages, we can contribute to a more inclusive and innovative financial future.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Team Members */}
//       <section className="w-full py-16 md:py-20 lg:py-24 bg-gray-50">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//             <div className="space-y-2">
//               <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Founders</h2>
//               <p className="max-w-[900px] mx-auto font-sans text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                 Meet the passionate founders behind School of Satoshi.
//               </p>
//             </div>
//           </div>
//           <TeamLead />
//         </div>
//       </section>
//     </div>
//   )
// }




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
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid gap-8 sm:gap-10 lg:gap-12 xl:gap-16 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_500px] 2xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight leading-tight">
                  About School of Satoshi
                </h1>
                <div className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl">
                  <Miniaboutus />
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center order-first lg:order-last">
              {/* Image Carousel */}
              <div className="relative h-64 xs:h-80 sm:h-96 md:h-[400px] lg:h-[380px] xl:h-[500px] 2xl:h-[600px] w-full max-w-md sm:max-w-lg lg:max-w-none overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg sm:shadow-xl lg:shadow-2xl">
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
                      className="rounded-lg sm:rounded-xl lg:rounded-2xl object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-white shadow-lg' 
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
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-center mb-6 sm:mb-8 lg:mb-12">
                Our Story
              </h2>
              
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <p className="font-sans text-gray-700 text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl leading-relaxed sm:leading-relaxed lg:leading-relaxed">
                  School of Satoshi was established in June 2024 by Bitcoin enthusiasts Angella Wafwoyo and Angella
                  Mulikatete, under the mentorship of Bitcoin Kampala, in response to the growing need for accessible and
                  comprehensive Bitcoin education in Uganda.
                </p>
                
                <p className="font-sans text-gray-700 text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl leading-relaxed sm:leading-relaxed lg:leading-relaxed">
                  We envision a world where Bitcoin education is accessible to everyone, regardless of their background or
                  prior knowledge. We believe that by empowering individuals with Bitcoin knowledge based on their native
                  languages, we can contribute to a more inclusive and innovative financial future.
                </p>
              </div>
              
              {/* Stats or Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16">
                <div className="text-center p-4 sm:p-6 lg:p-8 bg-amber-50 rounded-lg sm:rounded-xl">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-600 mb-2">2024</div>
                  <div className="text-sm sm:text-base lg:text-lg text-gray-600">Founded</div>
                </div>
                <div className="text-center p-4 sm:p-6 lg:p-8 bg-amber-50 rounded-lg sm:rounded-xl">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-600 mb-2">100+</div>
                  <div className="text-sm sm:text-base lg:text-lg text-gray-600">Students Educated</div>
                </div>
                <div className="text-center p-4 sm:p-6 lg:p-8 bg-amber-50 rounded-lg sm:rounded-xl sm:col-span-2 lg:col-span-1">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-600 mb-2">Uganda</div>
                  <div className="text-sm sm:text-base lg:text-lg text-gray-600">Based in Kampala</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                Our Founders
              </h2>
              <p className="max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto font-sans text-gray-600 text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl leading-relaxed">
                Meet the passionate founders behind School of Satoshi.
              </p>
            </div>
          </div>
          
          <div className="w-full">
            <TeamLead />
          </div>
        </div>
      </section>
    </div>
  )
}