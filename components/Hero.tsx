import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center rounded-2xl h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] text-orange-500"
      style={{
        backgroundImage: `url('/assets/images/c1.jpeg')`,
      }}
    >
      <div className="container mx-auto px-4 sm:px-8 py-12 flex flex-col items-center justify-center text-center h-full">
        <div className="max-w-2xl space-y-4 sm:space-y-6 md:space-y-8">
          {/* Heading with Animation */}
          <motion.h1
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight capitalize"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Bitcoin Education for the Future
          </motion.h1>

          {/* Subheading with Animation */}
          <motion.h4
            className="text-[#F5F8FE] text-base sm:text-lg md:text-xl capitalize"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Empowering individuals through transformative Bitcoin knowledge
          </motion.h4>

          {/* Buttons with Animation */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="bg-[#F7941F] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-[5px] transition transform hover:scale-105">
              Apply here
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;




// import React from 'react';

// const Hero = () => {
//   return (
//     <section
//       className="relative bg-cover bg-center rounded-2xl h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] text-orange-500"
//       style={{
//         backgroundImage: `url('/assets/images/c1.jpeg')`,
//       }}
//     >
//       <div className="container mx-auto px-4 sm:px-8 py-12 flex flex-col items-center justify-center text-center h-full">
//         <div className="max-w-2xl space-y-4 sm:space-y-6 md:space-y-8">
//           {/* Heading */}
//           <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight capitalize animate-fadeIn">
//             Bitcoin Education for the Future
//           </h1>

//           {/* Subheading */}
//           <h4 className="text-[#F5F8FE] text-base sm:text-lg md:text-xl capitalize animate-fadeIn animation-delay-200">
//             Empowering individuals through transformative Bitcoin knowledge
//           </h4>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn animation-delay-400">
//             <button className="bg-[#F7941F] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-[5px] transition transform hover:scale-105">
//               Apply here
//             </button>
//             {/* Uncomment if you want a second button */}
//             {/* <button className="border border-white text-white px-6 py-2 sm:px-8 sm:py-3 rounded-[5px] transition transform hover:scale-105">
//               Get Started
//             </button> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;













