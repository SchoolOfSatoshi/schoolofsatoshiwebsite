'use client'


// /* eslint-disable react/no-unescaped-entities */
// import React from 'react';
// import Image from 'next/image';

// const WhyBitcoin: React.FC = () => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto flex flex-col md:flex-row items-center">
//         <div className="md:w-1/2 mb-8 md:mb-0 md:order-2 md:pl-12">
//           <span className="text-orange-500 uppercase text-lg block mb-4">Why Bitcoin</span>
//           <h2 className="text-3xl font-bold text-orange-500 mb-6">
//             What began as a simple idea has grown into our passion
//           </h2>
//           <p className="text-gray-700 mb-6 text-justify">
//             In a world where financial systems often exclude the many, Bitcoin offers a decentralized, borderless solution for empowerment. At the School of Satoshi, we believe in using this revolutionary technology to educate, uplift, and provide tools for individuals to take control of their financial futures. It's more than a currency—it's a pathway to freedom, independence, and opportunity
//           </p>
//           <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">
//             Read More
//           </button>
//         </div>
//         <div className="md:w-1/2 md:order-1">
//           {/* Placeholder for image or illustration */}
//           {/* <div className="bg-gray-200 h-96 rounded-lg">
//                <Image 
//                   src= '/assets/images/bitcoin1.jpeg' 
//                   alt= "bitcoin"
//                   width={100}
//                   height={100}
//                   className="w-full h-full object-cover rounded-lg"
//                 />
//           </div> */}

//           <div className="bg-gray-200 h-96 rounded-lg relative">
//             <Image 
//               src="/assets/images/bitcoin1.jpeg" 
//               alt="bitcoin"
//               fill
//               className="object-cover rounded-lg"
//             />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyBitcoin;




import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyBitcoin: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  // Animate when the section comes into view
  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Variants for framer-motion animations
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.6 } },
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="container mx-auto flex flex-col md:flex-row items-center"
      >
        {/* Image Section */}
        <motion.div
          variants={imageVariants}
          className="md:w-1/2 mb-8 md:mb-0 md:order-1"
        >
          <div className="bg-gray-200 h-96 rounded-lg relative overflow-hidden">
            <Image
              src="/assets/images/bitcoin1.jpeg"
              alt="bitcoin"
              fill
              className="object-cover rounded-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={textVariants}
          className="md:w-1/2 md:order-2 md:pl-12 px-4"
        >
          <span className="text-orange-500 uppercase text-lg block mb-4">
            Why Bitcoin
          </span>
          <h2 className="text-3xl font-bold text-orange-500 mb-6">
            What began as a simple idea has grown into our passion
          </h2>
          <p className="text-gray-700 mb-6 text-justify">
            {isExpanded
              ? `In a world where financial systems often exclude the many, Bitcoin offers a decentralized, borderless solution for empowerment. At the School of Satoshi, we believe in using this revolutionary technology to educate, uplift, and provide tools for individuals to take control of their financial futures. It's more than a currency—it's a pathway to freedom, independence, and opportunity.`
              : `In a world where financial systems often exclude the many, Bitcoin offers a decentralized, borderless solution for empowerment...`}
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyBitcoin;