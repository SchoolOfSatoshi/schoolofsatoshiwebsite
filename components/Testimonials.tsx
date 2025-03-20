/* eslint-disable react/no-unescaped-entities */


'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, QuoteIcon } from 'lucide-react';
import { Button } from './ui/button';

const testimonialsData = [
  {
    quote: '"Joining School of Satoshi was a life-changing decision. I now understand Bitcoin beyond the hype. Thank you!"',
    name: 'Angella Mulikatete',
    cohort: 'Cohort 2 Graduate, 2024',
    avatar: '/assets/images/Angie6.jpeg'
  },
  {
    quote: '"The blockchain curriculum transformed my career trajectory. Incredible learning experience!"',
    name: 'Angellina',
    cohort: 'Cohort 1 Graduate, 2023',
    avatar: '/assets/images/Angie6.jpeg'
  },
  {
    quote: '"Joining School of Satoshi was a life-changing decision. I now understand Bitcoin beyond the hype. Thank you!"',
    name: 'Angella ',
    cohort: 'Cohort 3 Graduate, 2024',
    avatar: '/assets/images/Angie6.jpeg'
  },
];

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play: move to next testimonial every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 7000);
    return () => clearInterval(interval);
  }, [currentTestimonial]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const testimonial = testimonialsData[currentTestimonial];

  // Motion variants for cleaner code
  const variants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction * 100
    }),
    center: {
      opacity: 1,
      x: 0
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: -direction * 100
    })
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#FCFEF9] to-[#F0F4F8] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Intro Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="h-0.5 w-12 bg-gray-300"></div>
              <span className="text-gray-600 text-sm uppercase tracking-wider">
                Community Impact
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Stories from <br />Our Graduates
            </h2>
            <p className="text-gray-600 max-w-md">
              Over 300 learners have transformed their careers through School of Satoshi's innovative blockchain education programs.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={prevTestimonial} 
                className="border border-gray-300 hover:bg-gray-100 transition-colors rounded-full w-12 h-12 flex items-center justify-center group"
              >
                <ChevronLeft className="text-gray-600 group-hover:text-black" />
              </button>
              <button
                onClick={nextTestimonial} 
                className="bg-black text-white hover:bg-gray-800 transition-colors rounded-full w-12 h-12 flex items-center justify-center group"
              >
                <ChevronRight className="text-white group-hover:text-gray-300" />
              </button>
            </div>
          </div>

          {/* Dynamic Testimonial Carousel */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div 
                key={currentTestimonial}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(event, info) => {
                  if (info.offset.x < -100) {
                    nextTestimonial();
                  } else if (info.offset.x > 100) {
                    prevTestimonial();
                  }
                }}
                className="bg-white rounded-2xl shadow-lg p-8 relative max-w-lg mx-auto"
              >
                <QuoteIcon className="absolute top-4 left-4 text-gray-200 w-16 h-16" />
                <blockquote className="text-xl font-medium text-gray-800 mb-6 relative z-10">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center space-x-4">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    width={64}
                    height={64}
                    className="rounded-full border-4 border-gray-100 shadow-md"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.cohort}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-100/50 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Testimonials;









// 'use client'

// import Image from 'next/image';
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, QuoteIcon } from 'lucide-react';

// const testimonialsData = [
//   {
//     quote: '"Joining School of Satoshi was a life-changing decision. I now understand Bitcoin beyond the hype. Thank you!"',
//     name: 'Angella Mulikatete',
//     cohort: 'Cohort 2 Graduate, 2024',
//     avatar: '/assets/images/Angie6.jpeg'
//   },
//   {
//     quote: '"The blockchain curriculum transformed my career trajectory. Incredible learning experience!"',
//     name: 'John Kamau',
//     cohort: 'Cohort 1 Graduate, 2023',
//     avatar: '/assets/images/Angie6.jpeg'
//   }
// ];

// const Testimonials: React.FC = () => {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const [direction, setDirection] = useState(0);

//   const nextTestimonial = () => {
//     setDirection(1);
//     setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
//   };

//   const prevTestimonial = () => {
//     setDirection(-1);
//     setCurrentTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
//   };

//   const selectTestimonial = (index: number) => {
//     // Determine direction for a smoother transition.
//     setDirection(index > currentTestimonial ? 1 : -1);
//     setCurrentTestimonial(index);
//   };

//   const testimonial = testimonialsData[currentTestimonial];

//   return (
//     <section className="py-16 bg-gradient-to-br from-[#FCFEF9] to-[#F0F4F8] relative overflow-hidden">
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           {/* Intro Section */}
//           <div className="space-y-6">
//             <div className="flex items-center space-x-4">
//               <div className="h-0.5 w-12 bg-gray-300"></div>
//               <span className="text-gray-600 text-sm uppercase tracking-wider">
//                 Community Impact
//               </span>
//             </div>
//             <h2 className="text-4xl font-bold text-gray-900 leading-tight">
//               Stories from <br />Our Graduates
//             </h2>
//             <p className="text-gray-600 max-w-md">
//               Over 300 learners have transformed their careers through School of Satoshi's innovative blockchain education programs.
//             </p>
//             <div className="flex space-x-4">
//               <button
//                 onClick={prevTestimonial} 
//                 className="border border-gray-300 hover:bg-gray-100 transition-colors rounded-full w-12 h-12 flex items-center justify-center group"
//               >
//                 <ChevronLeft className="text-gray-600 group-hover:text-black" />
//               </button>
//               <button
//                 onClick={nextTestimonial} 
//                 className="bg-black text-white hover:bg-gray-800 transition-colors rounded-full w-12 h-12 flex items-center justify-center group"
//               >
//                 <ChevronRight className="text-white group-hover:text-gray-300" />
//               </button>
//             </div>
//           </div>

//           {/* Testimonial Card */}
//           <AnimatePresence mode="wait">
//             <motion.div 
//               key={currentTestimonial}
//               initial={{ opacity: 0, x: direction * 100 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -direction * 100 }}
//               transition={{ duration: 0.5 }}
//               className="bg-white rounded-2xl shadow-lg p-8 relative"
//             >
//               <QuoteIcon className="absolute top-4 left-4 text-gray-200 w-16 h-16" />
//               <blockquote className="text-xl font-medium text-gray-800 mb-6 relative z-10">
//                 {testimonial.quote}
//               </blockquote>
//               <div className="flex items-center space-x-4">
//                 <Image 
//                   src={testimonial.avatar} 
//                   alt={testimonial.name} 
//                   width={64}
//                   height={64}
//                   className="rounded-full border-4 border-gray-100 shadow-md"
//                 />
//                 <div>
//                   <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
//                   <p className="text-gray-600 text-sm">{testimonial.cohort}</p>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Carousel Thumbnails */}
//         <div className="mt-12 flex justify-center space-x-4">
//           {testimonialsData.map((item, index) => (
//             <button 
//               key={index} 
//               onClick={() => selectTestimonial(index)}
//               className={`relative w-16 h-16 rounded-full overflow-hidden border-4 transition-transform duration-300 ${
//                 index === currentTestimonial 
//                   ? 'border-black scale-110' 
//                   : 'border-transparent hover:scale-105'
//               }`}
//             >
//               <Image 
//                 src={item.avatar} 
//                 alt={item.name} 
//                 width={64}
//                 height={64}
//                 className="object-cover"
//               />
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Decorative Background Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-100/50 rounded-full blur-3xl"></div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;




// 'use client'
// import Image from 'next/image';
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, QuoteIcon } from 'lucide-react';

// const testimonialsData = [
//   {
//     quote: '"Joining School of Satoshi was a life-changing decision. I now understand Bitcoin beyond the hype. Thank you!"',
//     name: 'Angella Mulikatete',
//     cohort: 'Cohort 2 Graduate, 2024',
//     avatar: '/assets/images/Angie6.jpeg'
//   },
//   {
//     quote: '"The blockchain curriculum transformed my career trajectory. Incredible learning experience!"',
//     name: 'John Kamau',
//     cohort: 'Cohort 1 Graduate, 2023',
//     avatar: '/assets/images/Angie6.jpeg'
//   }
// ];

// const Testimonials: React.FC = () => {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const [direction, setDirection] = useState(0);

//   const nextTestimonial = () => {
//     setDirection(1);
//     setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
//   };

//   const prevTestimonial = () => {
//     setDirection(-1);
//     setCurrentTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
//   };

//   const testimonial = testimonialsData[currentTestimonial];

//   return (
//     <section className="py-16 bg-gradient-to-br from-[#FCFEF9] to-[#F0F4F8] relative overflow-hidden">
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           {/* Intro Section */}
//           <div className="space-y-6">
//             <div className="flex items-center space-x-4">
//               <div className="h-0.5 w-12 bg-gray-300"></div>
//               <span className="text-gray-600 text-sm uppercase tracking-wider">
//                 Community Impact
//               </span>
//             </div>
//             <h2 className="text-4xl font-bold text-gray-900 leading-tight">
//               Stories from <br />Our Graduates
//             </h2>
//             <p className="text-gray-600 max-w-md">
//               Over 300 learners have transformed their careers through School of Satoshi's innovative blockchain education programs.
//             </p>
//             <div className="flex space-x-4">
//               <button
//                 onClick={prevTestimonial} 
//                 className="border border-gray-300 hover:bg-gray-100 transition-colors rounded-full w-12 h-12 flex items-center justify-center group"
//               >
//                 <ChevronLeft className="text-gray-600 group-hover:text-black" />
//               </button>
//               <button
//                 onClick={nextTestimonial} 
//                 className="bg-black text-white hover:bg-gray-800 transition-colors rounded-full w-12 h-12 flex items-center justify-center group"
//               >
//                 <ChevronRight className="text-white group-hover:text-gray-300" />
//               </button>
//             </div>
//           </div>

//           {/* Testimonial Card */}
//           <AnimatePresence mode="wait">
//             <motion.div 
//               key={currentTestimonial}
//               initial={{ opacity: 0, x: direction * 100 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -direction * 100 }}
//               transition={{ duration: 0.5 }}
//               className="bg-white rounded-2xl shadow-lg p-8 relative"
//             >
//               <QuoteIcon className="absolute top-4 left-4 text-gray-200 w-16 h-16" />
//               <blockquote className="text-xl font-medium text-gray-800 mb-6 relative z-10">
//                 {testimonial.quote}
//               </blockquote>
//               <div className="flex items-center space-x-4">
//                 <Image 
//                   src={testimonial.avatar} 
//                   alt={testimonial.name} 
//                   width={64}
//                   height={64}
//                   className="rounded-full border-4 border-gray-100 shadow-md"
//                 />
//                 <div>
//                   <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
//                   <p className="text-gray-600 text-sm">{testimonial.cohort}</p>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Decorative Background Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-100/50 rounded-full blur-3xl"></div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;






// 'use client'
// import Image from 'next/image';
// import React, { useState } from 'react';

// const testimonialsData = [
//   {
//     quote: '"Joining School of Satoshi was a life-changing decision. I now understand Bitcoin beyond the hype. Thank you!"',
//     name: 'Angella Mulikatete',
//     cohort: 'Cohort 2 Graduate, 2024',
//     avatar: '/assets/images/Angie6.jpeg'
//   }
// ];

// const Testimonials: React.FC = () => {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
//   };

//   const testimonial = testimonialsData[currentTestimonial];

//   return (
//     <section className="py-16 bg-[#FCFEF9]">
//       <div className="container mx-auto flex flex-col md:flex-row items-center">
//         <div className="md:w-1/3 px-4 mb-8 md:mb-0">
//           <span className="text-gray-600 block mb-4">
//             Over 300 learners through the School of Satoshi's transformative Bitcoin education programs
//           </span>
//           <h2 className="text-3xl font-semibold mb-4">Stories from Our Graduates</h2>
//           <div className="flex space-x-4">
//             <button
//               onClick={prevTestimonial} 
//               className="border border-black rounded-full w-12 h-12 flex items-center justify-center"
//             >
//               ←
//             </button>
//             <button
//               onClick={nextTestimonial} 
//               className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center"
//             >
//               →
//             </button>
//           </div>
//         </div>
//         <div className="md:w-2/3 bg-white p-8 rounded-lg shadow-lg">
//           <span className="text-orange-500 text-lg uppercase mb-4 block">What they say</span>
//           <blockquote className="text-2xl font-medium mb-6">
//             {testimonial.quote}
//           </blockquote>
//           <div className="flex items-center">
//             <Image 
//               src={testimonial.avatar} 
//               alt={testimonial.name} 
//               width={50}
//               height={50}
//               className="w-16 h-16 rounded-full mr-4"
//             />
//             <div>
//               <h4 className="font-bold">{testimonial.name}</h4>
//               <p className="text-gray-600">{testimonial.cohort}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;






// 'use client'
// import Image from 'next/image';
// import React, { useState } from 'react';

// const fetchTestimonial = async () => {
//   const res = await fetch("http://localhost:3000/api/testimonial", {
//     next: {
//       revalidate: 10,
//     },
//   });

//   if (!res.ok) {
//     throw new Error("failed to fetch testimonial");
//   }

//   const data = await res.json();
//   return data;
// };


// export default function Testimonial() {
//     const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
//   };

//   const testimonial = testimonialsData[currentTestimonial];
//   return (
//     <>
//       <section className="testimonials section-padding">
//         <div className="container">
//           <div className="row mb-30">
//             <div className="col-md-12 text-center">
//               <h6 className="wow" data-splitting="">
//                 What Clients Say?
//               </h6>
//               <h1 className="wow" data-splitting="">
//                 Testimonials
//               </h1>
//               <div className="line-hr-section center" />
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-10 offset-md-1">
//               <div className="owl-carousel owl-theme">
//                 <div  className="item">
//                     <span className="quote">
//                       <i className="fa-solid fa-ditto" />
//                     </span>
//                     <p>{testimonial.quote}</p>
//                     <div className="info">
//                       <div className="author-img img-grayscale">
//                         <Image
//                           src={testimonial.avatar}
//                           alt=""
//                           width={100}
//                           height={100}
//                         />
//                       </div>
//                       <div className="cont">
//                         {/* <h6>Emily Brown</h6> */}
//                         <span>{testimonial.name}</span>
//                       </div>
//                     </div>
//                 </div>

//                 <div className="flex space-x-4">
//            <button
//               onClick={prevTestimonial} 
//               className="border border-black rounded-full w-12 h-12 flex items-center justify-center"
//             >
//               ←
//             </button>
//             <button
//               onClick={nextTestimonial} 
//               className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center"
//             >
//               →
//             </button>
//           </div>
              
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
