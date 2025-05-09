// import React from 'react';
// import { motion } from 'framer-motion';

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
//           {/* Heading with Animation */}
//           <motion.h1
//             className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight capitalize"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Bitcoin Education for the Future
//           </motion.h1>

//           {/* Subheading with Animation */}
//           <motion.h4
//             className="text-[#F5F8FE] text-base sm:text-lg md:text-xl capitalize"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             Empowering individuals through transformative Bitcoin knowledge
//           </motion.h4>

//           {/* Buttons with Animation */}
//           <motion.div
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             <button className="bg-[#F7941F] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-[5px] transition transform hover:scale-105">
//               Apply here
//             </button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



"use client";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BitcoinAnimation from "./BitcoinAnimation";

const Hero = () => {
  const router = useRouter();

  return (
  
    <section className="flex items-center justify-center lg:h-[85vh] md:h-[50vh] h-[80vh] w-full relative overflow-hidden">
  {/* Circles */}
  <main className="w-full h-full flex justify-center items-center">
    {/* Outer Circle */}
    <motion.div
      className="lg:w-[900px] relative md:w-[600px] w-[350px] lg:h-[900px] md:h-[600px] h-[350px] bg-transparent border-2 border-dashed border-orange-100/60 rounded-full flex justify-center items-center outline-dashed outline-2 outline-orange-100/50 lg:outline-offset-[120px] md:outline-offset-[80px] outline-offset-[45px]"
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: 60,
      }}
    >
       <div className="absolute top-20 right-10 opacity-20 animate-spin-slow">
          <BitcoinAnimation size={120} />
        </div>
        <div className="absolute bottom-20 left-10 opacity-20">
          <BitcoinAnimation size={120} />
        </div>
      {/*if I want images to appear on mobile view change:  className="w-24 h-24 rounded-full absolute top-[50%] -right-10 border-2 border-orange-500 block" */}
      <Image
        src="/assets/images/c1.jpeg"
        alt="image"
        className="w-24 h-24 rounded-full absolute top-[50%] -right-10 border-2 border-orange-500 hidden md:block"
        priority
        height={200}
        width={200}
      />
      <Image
        src="/assets/images/sos1.jpeg"
        alt="image"
        className="w-24 h-24 rounded-full absolute top-[50%] -left-10 border-2 border-orange-500 hidden md:block"
        priority
        height={200}
        width={200}
      />

      {/* Middle Circle */}
      <motion.div
        className="lg:w-[650px] relative md:w-[450px] w-[270px] lg:h-[650px] md:h-[450px] h-[270px] bg-orange-100/20 dark:bg-transparent md:border-4 border-2 border-dashed dark:border-2 border-orange-100/80 dark:border-orange-500/20 rounded-full flex justify-center items-center outline-none md:outline-0 outline-dashed outline-2 outline-orange-400/10 outline-offset-[130px]"
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1,
          ease: "linear",
          duration: 30,
        }}
      >
        <Image
          src="/assets/images/c2_2.jpeg"
          alt="image"
          className="w-24 h-24 rounded-full absolute top-[50%] -right-8 border-2 border-orange-300 hidden md:block"
          priority
          height={200}
          width={200}
        />
         {/* <Image
          src="/assets/images/c1_1.jpeg"
          alt="image"
          className="w-16 h-16 rounded-full absolute top-[50%] -right-8 border-2 border-orange-300 hidden md:block"
          priority
          height={200}
          width={200}
        /> */}

        {/* Inner Circle */}
        <div className="lg:w-[450px] md:w-[300px] w-[190px] lg:h-[450px] md:h-[300px] h-[190px] bg-orange-100/30 border-4 dark:bg-bridgeOrange/10 dark:border-2 dark:border-orange-500/20 border-orange-100 rounded-full flex justify-center items-center"></div>
      </motion.div>
    </motion.div>
  </main>

  {/* Overlay Content */}
  <main className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
    <div className="lg:w-[55%] md:w-[60%] w-full flex flex-col md:gap-4 gap-6 items-center justify-center">
      <h1 className="font-semibold leading-tight lg:text-5xl md:text-3xl text-[1.72rem] text-center">
        Empowering Ugandans through transformative Bitcoin Education
      </h1>
      <p className="lg:w-[85%] w-full text-muted-foreground text-center">
        Learn,Build and Network at School of Satoshi
      </p>
      <Link
        href={"/register"}
        target="_blank"
        rel="noreferrer"
        className="rounded-full flex items-center px-12 py-3.5 border-2 border-orange-500 bg-orange-500/10 text-orange-400 text-sm md:text-base capitalize hover:bg-orange-500 hover:text-white transition-all"
      >
        Join the next cohort <MoveRight className="w-5 h-5 ml-2" />
      </Link>
    </div>
  </main>
</section>

  );
};

export default Hero;



  // <section className="flex items-center justify-center lg:h-[85vh] md:h-[50vh] h-[80vh]  w-full relative overflow-hidden">
    //   {/* circles */}
    //   <main className="w-full h-full flex justify-center items-center">
    //     {/* first circle  */}
    //     <motion.div
    //       className="lg:w-[900px] relative md:w-[600px] w-[350px] lg:h-[900px] md:h-[600px] h-[350px] bg-transparent md:border-4 border-2 dark:border-2 border-red-100/60 border-dashed dark:border-red-500/20 rounded-full flex justify-center items-center outline-dashed outline-2 md:outline-4 dark:outline-2 outline-red-100/50 dark:outline-red-500/15 lg:outline-offset-[120px] md:outline-offset-[80px] outline-offset-[45px]"
    //       animate={{ rotate: 360 }}
    //       transition={{
    //         repeat: Infinity,
    //         repeatType: "loop",
    //         ease: "linear",
    //         duration: 60,
    //       }}
    //     >
    //       <Image
    //         src="/assets/images/c1.jpeg"
    //         alt="image"
    //         className="w-20 h-20 rounded-full absolute top-[50%] -right-10 border-2 border-bridgeRed hidden md:block"
    //         priority
    //         height={100}
    //         width={100}
    //       />

    //       <Image
    //         src="/assets/images/c2.jpeg"
    //         alt="image"
    //         className="w-20 h-20 rounded-full absolute top-[50%] -left-10 border-2 border-bridgeRed hidden md:block"
    //         priority
    //         height={100}
    //         width={100}
    //       />

    //       <Image
    //         src="/assets/images/c1_1.jpeg"
    //         alt="image"
    //         className="w-20 h-20 rounded-full absolute top-[50%] -left-10 border-2 border-bridgeRed hidden md:block"
    //         priority
    //         height={100}
    //         width={100}
    //       />

    //       {/* second circle  */}
    //       <motion.div
    //         className="lg:w-[650px] relative md:w-[450px] w-[270px] lg:h-[650px] md:h-[450px] h-[270px] bg-red-100/20 dark:bg-transparent md:border-4 border-2 border-dashed dark:border-2 border-red-100/80 dark:border-red-500/20 rounded-full flex justify-center items-center md:outline-none outline-dashed outline-2 outline-red-100 dark:outline-red-500/10 md:outline-offset-0  md:outline-0 outline-offset-[130px]"
    //         animate={{ rotate: -360 }}
    //         transition={{
    //           repeat: Infinity,
    //           repeatType: "reverse",
    //           repeatDelay: 1,
    //           ease: "linear",
    //           duration: 30,
    //         }}
    //       >
    //         <Image
    //           src="/assets/images/c1.jpeg"
    //           alt="image"
    //           className="w-16 h-16 rounded-full absolute top-[50%] -right-8 border-2 border-bridgeRed hidden md:block"
    //           priority
    //           height={100}
    //         width={100}
    //         />

    //         <Image
    //           src="/assets/images/c2.jpeg"
    //           alt="image"
    //           className="w-20 h-20 rounded-full absolute top-[50%] -left-10 border-2 border-bridgeRed hidden md:block"
    //           priority
    //           height={100}
    //           width={100}
    //         />

    //         <Image
    //           src="/assets/images/c1_1.jpeg"
    //           alt="image"
    //           className="w-20 h-20 rounded-full absolute top-[50%] -left-10 border-2 border-bridgeRed hidden md:block"
    //           priority
    //           height={100}
    //           width={100}
    //         />

    //         {/* third circle  */}
    //         <div className="lg:w-[450px] md:w-[300px] w-[190px] lg:h-[450px] md:h-[300px] h-[190px] bg-red-100/30 dark:bg-bridgeRed/10 border-4  dark:border-2 border-red-100 dark:border-red-500/20 rounded-full flex  justify-center items-center"></div>
    //       </motion.div>
    //     </motion.div>
    //   </main>
    //   {/* Overlay */}
    //   <main className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
    //     <div className="lg:w-[55%] md:w-[60%] w-full flex flex-col md:gap-4 gap-6 items-center justify-center">
    //       <h1 className="font-semibold leading-tight lg:text-5xl md:text-3xl text-[1.72rem] text-center">
    //       Empowering individuals through transformative Bitcoin knowledge Learn
    //       </h1>
    //       <p className="lg:w-[85%] w-full text-muted-foreground text-center">
    //         Build and Network at School of Satoshi
    //       </p>
    //       <Link
    //         href={"/register"}
    //         // className={buttonVariants({
    //         //   variant: "outline",
    //         // })}
    //         target="_blank"
    //         rel="noreferrer"
    //         className="rounded-full flex items-center px-12 py-3.5 border-2 ring-2 ring-red-300 dark:ring-red-500 border-red-500 dark:border-red-300 bg-red-500/10 text-bridgeRed text-sm md:text-base capitalize hover:bg-bridgeRed dark:bg-bridgeRed dark:text-red-100 hover:text-red-100"
    //       >
    //         Join the next cohort <MoveRight className="w-5 h-5 ml-2 " />
    //       </Link>
    //       {/* <Link
    //         href="https://docs.google.com/forms/d/e/1FAIpQLScoch9kMWh4ZxkfJyl8IHTrXMGnJWwOjdk3HNpMApkXFEFP3g/viewform"
    //         target="_blank"
    //         rel="noreferrer"
    //         className="rounded-full flex items-center px-12 py-3.5 border-2 ring-2 ring-red-300 dark:ring-red-500 border-red-500 dark:border-red-300 bg-red-500/10 text-bridgeRed text-sm md:text-base capitalize hover:bg-bridgeRed dark:bg-bridgeRed dark:text-red-100 hover:text-red-100">
    //         Join the next cohort <MoveRight className="w-5 h-5 ml-2 " />
    //       </Link> */}
    //     </div>
    //   </main>
    // </section>




















