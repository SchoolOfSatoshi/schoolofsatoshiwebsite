'use client'

import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styles from './PastCohorts.module.css';

const cohorts = [
  {
    year: 2024,
    name: 'Cohort 1',
    image: '/assets/images/cohort1.jpeg',
    description: 'Our inaugural cohort that pioneered Bitcoin education in Uganda. We started with just 7 students and a dream to democratize financial knowledge.',
    duration: '4 Weeks',
    topics: ['Bitcoin Basics', 'Self Custody'],
    students: 7
  },
  {
    year: 2024,
    name: 'Cohort 2',
    image: '/assets/images/c2_2.jpeg',
    description: 'Expanded our curriculum to include more advanced topics. This cohort saw increased participation and deeper community engagement.',
    duration: '6 Weeks',
    topics: ['Lightning Network', 'Economics'],
    students: 10
  },
  {
    year: 2024,
    name: 'Cohort 3 & 4',
    image: '/assets/images/cohort_4.jpeg', // Using another available image
    description: 'Our most recent group, pushing the boundaries of what is possible with community-led Bitcoin education.',
    duration: '8 Weeks',
    topics: ['Development', 'Nostr'],
    students: 15
  },
  {
    year: 2024,
    name: 'Cohort 5',
    image: '/assets/images/cohort5.jpeg', // Using another available image
    description: 'Our most recent group, pushing the boundaries of what is possible with community-led Bitcoin education.',
    duration: '8 Weeks',
    topics: ['Development', 'Nostr'],
    students: 15
  },
  {
    year: 2024,
    name: 'Cohort 6',
    image: '/assets/images/cohort1.jpeg',
    description: 'Upcoming cohort planning and community expansion phases.',
    duration: 'Coming Soon',
    topics: ['Advanced Scripting', 'Mining'],
    students: 0
  }
];

const PastCohorts: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cohorts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 md:py-20 bg-secondary/10">
      <div className="container px-4">

        <div className="container px-4">

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text Content */}
            <div className="text-left space-y-6">
              <h2 className="text-3xl font-heading font-bold tracking-tight text-primary sm:text-4xl">Past Cohorts</h2>
              <div className="w-24 h-1 bg-primary rounded-full"></div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Explore the journey of our students and the growing impact of School of Satoshi. From our inaugural class to our latest graduates, see how we are empowering the next generation of Bitcoin educators and builders.
              </p>
              <div className="pt-4">
                <Link href="/cohorts" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  View All Cohorts <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Custom Card Movie Carousel */}
            <div className={styles.card_movie_wrapper}>
              <div className={styles.card_movie_carousel}>
                {cohorts.map((cohort, index) => (
                  <div
                    key={index}
                    className={`${styles.card_movie} ${index === activeIndex ? styles.active : ''}`}
                    style={{ backgroundImage: `url(${cohort.image})` }}
                  >
                    <div className={styles.card_movie_content}>
                      <div className={styles.card_movie_title}>{cohort.name}</div>

                      {/* <div className={styles.card_movie_description}>
                        <p>{cohort.description}</p>
                      </div> */}

                      <Link href="/cohorts" className="inline-flex items-center text-white hover:text-primary transition-colors font-semibold uppercase tracking-wider text-sm mt-4">
                        View Details <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>

                    {/* Optional: Student Count Badge acting as 'Rating' */}
                    <div className={styles.card_rating} title="Total Students">
                      {cohort.students}
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Overlay */}
              <div className={styles.card_movie_navigation}>
                <ul className={styles.card_movie_navigation_list}>
                  {cohorts.map((_, index) => (
                    <li
                      key={index}
                      className={`${styles.nav_dot} ${index === activeIndex ? styles.active : ''}`}
                      onClick={() => setActiveIndex(index)}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>

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
//     image: '/assets/images/bitcoin3.jpeg',
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
//     image: '/assets/images/bitcoin3.jpeg',
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
//   { year: 2022, name: 'Cohort 1', image: '/assets/images/bitcoin3.jpeg' },
//   { year: 2023, name: 'Cohort 2', image: '/assets/images/bitcoin3.jpeg' },
//   { year: 2024, name: 'Cohort 3', image: '/assets/images/bitcoin3.jpeg' }
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