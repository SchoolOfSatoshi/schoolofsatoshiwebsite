'use client'

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const cohorts = [
  { 
    year: 2024, 
    name: 'Cohort 1', 
    image: '/images/cohort1.jpeg',
    description: 'Our inaugural cohort that pioneered Bitcoin education.',
    totalStudents: 7,
    // successRate: '85%'
  },
  { 
    year: 2024, 
    name: 'Cohort 2', 
    image: '/images/c2_2.jpeg',
    description: 'Expanded curriculum with advanced Bitcoin Education',
    totalStudents: 10,
    // successRate: '92%'
  },
  // { 
  //   year: 2024, 
  //   name: 'Cohort 3', 
//   image: '/images/bitcoin3.jpeg',
  //   description: 'Cutting-edge blockchain and Web3 development programs.',
  //   totalStudents: 60,
  //   successRate: '95%'
  // }
];

const PastCohorts: React.FC = () => {
  const [currentCohort, setCurrentCohort] = useState(0);

  // Auto-advance every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCohort((prev) => (prev + 1) % cohorts.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const nextCohort = () => setCurrentCohort((prev) => (prev + 1) % cohorts.length);
  const prevCohort = () => setCurrentCohort((prev) => (prev - 1 + cohorts.length) % cohorts.length);

  return (

    <section className="w-full py-8 md:py-10 lg:py-10">
        <div className="container ">
          {/* Heading */}
          <div className="text-center ">
            <h2 className="text-4xl font-bold text-gray-900">Past Cohorts</h2>
            <p className="text-gray-600 ">Explore our journey and impact</p>
          </div>

          {/* Carousel Wrapper */}
          <div className="relative flex items-center justify-center mt-8 ">
            <AnimatePresence mode="wait">
              {cohorts.map((cohort, index) =>
                index === currentCohort ? (
                  <motion.div
                    key={cohort.year}
                    initial={{ opacity: 0, rotateY: -90, scale: 0.8 }}
                    animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                    exit={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(event, info) => {
                      if (info.offset.x > 50) prevCohort();
                      if (info.offset.x < -50) nextCohort();
                    }}
                    className="w-full max-w-6xl z-10 "
                    // className=" max-w-full  flex h-[400px] "
                  >
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex h-[300px] w-full">
                      <div className="w-1/2 relative">
                        <Image src={cohort.image} alt={cohort.name} fill className="object-cover" />
                      </div>
                      <div className="w-1/2 p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-xl font-bold text-gray-900">{cohort.name}</span>
                            <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                              {cohort.year}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-3">{cohort.description}</p>
                          <div className="grid grid-cols-2 gap-3 mb-3">
                            <div>
                              <p className="text-xs uppercase text-gray-500">Total Students</p>
                              <p className="font-bold">{cohort.totalStudents}</p>
                            </div>
                            <div>
                              <p className="text-xs uppercase text-gray-500">Success Rate</p>
                              {/* <p className="font-bold text-green-600">{cohort.successRate}</p> */}
                            </div>
                          </div>
                        </div>
                        {/* <Link href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                          View Cohort Details <ArrowUpRight className="ml-2" size={16} />
                        </Link> */}
                      </div>
                    </div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          {/* <div className="flex justify-center space-x-4 mt-8">
            <Button onClick={prevCohort} className="bg-gray-100 hover:bg-gray-200 rounded-full p-2">
              <ChevronLeft />
            </Button>
            <Button onClick={nextCohort} className="bg-gray-100 hover:bg-gray-200 rounded-full p-2">
              <ChevronRight />
            </Button>
          </div> */}

          {/* Progress Dots */}
          <div className="flex justify-center mt-3 space-x-2">
            {cohorts.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentCohort ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <div className="flex justify-center mt-8">
                  <Link href="/cohorts">
                    <Button variant="outline">View All Cohorts</Button>
                  </Link>
                </div>
        </div>
    </section>

  );
};

export default PastCohorts;


































// 'use client'

// import Image from 'next/image';
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

// const cohorts = [
//   { 
//     year: 2022, 
//     name: 'Cohort 1', 
//     image: '/images/bitcoin3.jpeg',
//     description: 'Our inaugural cohort that pioneered blockchain education.',
//     totalStudents: 30,
//     successRate: '85%'
//   },
//   { 
//     year: 2023, 
//     name: 'Cohort 2', 
//     image: '/images/bitcoin3.jpeg',
//     description: 'Expanded curriculum with advanced blockchain technologies.',
//     totalStudents: 45,
//     successRate: '92%'
//   },
//   { 
//     year: 2024, 
//     name: 'Cohort 3', 
//     image: '/images/bitcoin3.jpeg',
//     description: 'Cutting-edge blockchain and Web3 development programs.',
//     totalStudents: 60,
//     successRate: '95%'
//   }
// ];

// const PastCohorts: React.FC = () => {
//   const [currentCohort, setCurrentCohort] = useState(0);

//   // Autoplay effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextCohort();
//     }, 7000); // Change slide every 7 seconds
//     return () => clearInterval(interval);
//   }, [currentCohort]);

//   const nextCohort = () => setCurrentCohort((prev) => (prev + 1) % cohorts.length);
//   const prevCohort = () => setCurrentCohort((prev) => (prev - 1 + cohorts.length) % cohorts.length);

//   return (
//     <section className="py-16 bg-gradient-to-br from-[#FCF6E8] to-[#FFF4E0]">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-900">Past Cohorts</h2>
//           <div className="flex items-center space-x-2 text-gray-700 cursor-pointer hover:text-gray-900">
//             <span className="text-xs uppercase tracking-wider">See All</span>
//             <ArrowUpRight size={16} />
//           </div>
//         </div>

//         <div className="relative flex items-center justify-center">
//           <AnimatePresence>
//             {cohorts.map((cohort, index) =>
//               index === currentCohort ? (
//                 <motion.div
//                   key={cohort.year}
//                   initial={{ opacity: 0, x: 100 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -100 }}
//                   transition={{ duration: 0.5 }}
//                   drag="x"
//                   dragConstraints={{ left: 0, right: 0 }}
//                   onDragEnd={(event, info) => {
//                     if (info.offset.x < -50) nextCohort();
//                     if (info.offset.x > 50) prevCohort();
//                   }}
//                   className="absolute w-full max-w-4xl z-10"
//                 >
//                   <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex">
//                     <div className="w-1/2 relative">
//                       <Image src={cohort.image} alt={cohort.name} fill className="object-cover" />
//                     </div>
//                     <div className="w-1/2 p-8 flex flex-col justify-between">
//                       <div>
//                         <div className="flex justify-between items-center mb-4">
//                           <span className="text-2xl font-bold text-gray-900">{cohort.name}</span>
//                           <span className="text-sm px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">
//                             {cohort.year}
//                           </span>
//                         </div>
//                         <p className="text-gray-600 mb-4">{cohort.description}</p>
//                         <div className="grid grid-cols-2 gap-4 mb-4">
//                           <div>
//                             <p className="text-xs uppercase text-gray-500">Total Students</p>
//                             <p className="font-bold">{cohort.totalStudents}</p>
//                           </div>
//                           <div>
//                             <p className="text-xs uppercase text-gray-500">Success Rate</p>
//                             <p className="font-bold text-green-600">{cohort.successRate}</p>
//                           </div>
//                         </div>
//                       </div>
//                       <button className="flex items-center text-blue-600 hover:text-blue-800">
//                         View Cohort Details <ArrowUpRight className="ml-2" size={18} />
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               ) : null
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Navigation */}
//         <div className="flex justify-center space-x-4 mt-64">
//           <button onClick={prevCohort} className="bg-gray-100 hover:bg-gray-200 rounded-full p-2">
//             <ChevronLeft />
//           </button>
//           <button onClick={nextCohort} className="bg-gray-100 hover:bg-gray-200 rounded-full p-2">
//             <ChevronRight />
//           </button>
//         </div>

//         {/* Progress Dots */}
//         <div className="flex justify-center mt-4 space-x-2">
//           {cohorts.map((_, index) => (
//             <div
//               key={index}
//               className={`w-2 h-2 rounded-full ${index === currentCohort ? 'bg-blue-600' : 'bg-gray-300'}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PastCohorts;

























// 'use client'

// import Image from 'next/image';
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

// const cohorts = [
//   { 
//     year: 2022, 
//     name: 'Cohort 1', 
//     image: '/images/bitcoin3.jpeg',
//     description: 'Our inaugural cohort that pioneered blockchain education.',
//     totalStudents: 30,
//     successRate: '85%'
//   },
//   { 
//     year: 2023, 
//     name: 'Cohort 2', 
//     image: '/assets/images/bitcoin3.jpeg',
//     description: 'Expanded curriculum with advanced blockchain technologies.',
//     totalStudents: 45,
//     successRate: '92%'
//   },
//   { 
//     year: 2024, 
//     name: 'Cohort 3', 
//     image: '/assets/images/bitcoin3.jpeg',
//     description: 'Cutting-edge blockchain and Web3 development programs.',
//     totalStudents: 60,
//     successRate: '95%'
//   }
// ];

// const PastCohorts: React.FC = () => {
//   const [currentCohort, setCurrentCohort] = useState(0);

//   const nextCohort = () => setCurrentCohort((prev) => (prev + 1) % cohorts.length);
//   const prevCohort = () => setCurrentCohort((prev) => (prev - 1 + cohorts.length) % cohorts.length);

//   return (
//     <section className="py-16 bg-gradient-to-br from-[#FCF6E8] to-[#FFF4E0]">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-900">Past Cohorts</h2>
//           <div className="flex items-center space-x-2 text-gray-700 cursor-pointer hover:text-gray-900">
//             <span className="text-xs uppercase tracking-wider">See All</span>
//             <ArrowUpRight size={16} />
//           </div>
//         </div>

//         <div className="relative flex items-center justify-center">
//           {cohorts.map((cohort, index) => (
//             <motion.div
//               key={cohort.year}
//               initial={{ opacity: 0, scale: 0.8, x: index === currentCohort ? 0 : 100 }}
//               animate={{ 
//                 opacity: index === currentCohort ? 1 : 0, 
//                 scale: index === currentCohort ? 1 : 0.8,
//                 x: index === currentCohort ? 0 : 100 
//               }}
//               transition={{ duration: 0.5 }}
//               className={`absolute w-full max-w-4xl ${index !== currentCohort ? 'z-0' : 'z-10'}`}
//             >
//               <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex">
//                 <div className="w-1/2 relative">
//                   <Image
//                     src={cohort.image}
//                     alt={cohort.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="w-1/2 p-8 flex flex-col justify-between">
//                   <div>
//                     <div className="flex justify-between items-center mb-4">
//                       <span className="text-2xl font-bold text-gray-900">{cohort.name}</span>
//                       <span className="text-sm px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">
//                         {cohort.year}
//                       </span>
//                     </div>
//                     <p className="text-gray-600 mb-4">{cohort.description}</p>
//                     <div className="grid grid-cols-2 gap-4 mb-4">
//                       <div>
//                         <p className="text-xs uppercase text-gray-500">Total Students</p>
//                         <p className="font-bold">{cohort.totalStudents}</p>
//                       </div>
//                       <div>
//                         <p className="text-xs uppercase text-gray-500">Success Rate</p>
//                         <p className="font-bold text-green-600">{cohort.successRate}</p>
//                       </div>
//                     </div>
//                   </div>
//                   <button className="flex items-center text-blue-600 hover:text-blue-800">
//                     View Cohort Details <ArrowUpRight className="ml-2" size={18} />
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Navigation */}
//         <div className="flex justify-center space-x-4 mt-64">
//           <button 
//             onClick={prevCohort}
//             className="bg-gray-100 hover:bg-gray-200 rounded-full p-2"
//           >
//             <ChevronLeft />
//           </button>
//           <button 
//             onClick={nextCohort}
//             className="bg-gray-100 hover:bg-gray-200 rounded-full p-2"
//           >
//             <ChevronRight />
//           </button>
//         </div>

//         {/* Progress Dots */}
//         <div className="flex justify-center mt-4 space-x-2">
//           {cohorts.map((_, index) => (
//             <div 
//               key={index}
//               className={`
//                 w-2 h-2 rounded-full 
//                 ${index === currentCohort ? 'bg-blue-600' : 'bg-gray-300'}
//               `}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PastCohorts;










// import Image from 'next/image';
// import React from 'react';

// const cohorts = [
//   { year: 2022, name: 'Cohort 1', image: '/images/bitcoin3.jpeg' },
//   { year: 2023, name: 'Cohort 2', image: '/images/bitcoin3.jpeg' },
//   { year: 2024, name: 'Cohort 3', image: '/images/bitcoin3.jpeg' }
// ];

// const PastCohorts: React.FC = () => {
//   return (
//     <section className="py-16 bg-[#FCF6E8]">
//       <div className="container mx-auto text-center">
//         <div className="flex justify-between items-center mb-12">
//           <h2 className="text-4xl font-semibold text-black text-center">Past Cohorts</h2>
//           <div className="flex items-center space-x-2 text-black">
//             <span className="text-xs uppercase">See All</span>
//             <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
//             </svg>
//           </div>
//         </div>
//         <div className="flex justify-center space-x-6">
//           {cohorts.map((cohort) => (
//             <div key={cohort.year} className="bg-white p-4 rounded-lg shadow-md">
//               {/* <div className="h-64 w-72 mb-4">
//                 <Image 
//                   src={cohort.image} 
//                   alt={cohort.name} 
//                   className="w-full h-full object-cover rounded-lg"
//                   width = {100}
//                   height={100}
//                 />
//               </div> */}
//               <div className="relative h-64 w-72 mb-4">
//               <Image 
//                 src={cohort.image} 
//                 alt={cohort.name} 
//                 className="object-cover rounded-lg"
//                 fill
//               />
//             </div>

//               <div className="text-left">
//                 <h3 className="text-xl font-semibold uppercase">{cohort.name}</h3>
//                 <p className="text-gray-600 uppercase">{cohort.year}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PastCohorts;