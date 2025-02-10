// 'use client'


// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// const AboutUs: React.FC = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
  
//   const fullDescription = "At the School of Satoshi, we're more than just an educational organization. We are a movement of changemakers empowering individuals with the knowledge and tools to harness the transformative power of Bitcoin";
  
//   // Truncate text to first 100 characters
//   const truncatedDescription = fullDescription.slice(0, 100) + '...';

//   return (
//     <motion.section 
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="px-4 py-16 bg-white"
//     >
//       <div className="container mx-auto flex flex-col md:flex-row items-center">
//         <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
//           <span className="text-gray-600 uppercase text-base block mb-4">About Us</span>
//           <h2 className="text-3xl font-bold text-dark mb-6">
//             We Are a Community Redefining Financial Literacy
//           </h2>
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-gray-600 mb-6"
//           >
//             {isExpanded ? fullDescription : truncatedDescription}
//           </motion.p>
//           {fullDescription.length > 100 && (
//             <motion.button 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setIsExpanded(!isExpanded)}
//               className="bg-orange-500 text-white px-6 py-3 rounded-full uppercase text-xs transition-all duration-300 hover:bg-gray-800 hover:border-gray-700"
//             >
//               {isExpanded ? 'See Less' : 'See More'}
//             </motion.button>
//           )}
      
//         </div>
//         <motion.div 
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="md:w-1/2"
//         >
//           {/* <div className="bg-gray-200 h-80 rounded-lg shadow-md">
//             <Image 
//                 src= '/assets/images/bitcoin2.png'
//                 alt="about us"
//                 className="w-full h-full object-cover rounded-lg"
//                 width = {100}
//                 height={100}
//             />
//           </div> */}

//           <div className="bg-gray-200 h-96 rounded-lg relative">
//             <Image
//               src="/assets/images/bitcoin2.png"
//               alt="bitcoin"
//               fill
//               className="object-cover rounded-lg"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default AboutUs;






'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
//import Link from 'next/link';

const AboutUs: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const fullDescription =
    "At the School of Satoshi, we're more than just an educational organization. We are a movement of changemakers empowering individuals with the knowledge and tools to harness the transformative power of Bitcoin. Our innovative curriculum, industry-leading instructors, and vibrant community set us apart as pioneers in the world of blockchain education.";
  
  // Truncate text to the first 100 characters
  const truncatedDescription = fullDescription.slice(0, 100) + '...';

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="px-4 py-16 bg-white"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
          <span className="text-gray-600 uppercase text-base block mb-4">About Us</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            We Are a Community Redefining Financial Literacy
          </h2>
          {/* Animated Text Toggle */}
          <AnimatePresence mode="wait">
            <motion.p
              key={isExpanded ? 'full' : 'truncated'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-gray-600 mb-6"
            >
              {isExpanded ? fullDescription : truncatedDescription}
            </motion.p>
          </AnimatePresence>
          {fullDescription.length > 100 && (
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-orange-500 text-white px-6 py-3 rounded-full uppercase text-xs transition-all duration-300 hover:bg-gray-800"
            >
              {isExpanded ? 'See Less' : 'Read More'}
            </motion.button>
          )}
        </div>
        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50, rotateY: -15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeInOut' }}
          className="md:w-1/2"
        >
          <div className="bg-gray-200 h-96 rounded-lg relative overflow-hidden shadow-lg">
            <Image
              src="/assets/images/bitcoin3.png"
              alt="about us"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;


