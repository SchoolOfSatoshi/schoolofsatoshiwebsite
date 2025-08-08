

// // "use client";
// // import { motion } from "framer-motion";
// // import { MoveRight } from "lucide-react";
// // import { buttonVariants } from "./ui/button";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { useRouter } from "next/navigation";
// // import BitcoinAnimation from "./BitcoinAnimation";

// // const Hero = () => {
// //   const router = useRouter();

// //   return (
  
// //     <section className="flex items-center justify-center lg:h-[85vh] md:h-[50vh] h-[80vh] w-full relative overflow-hidden">
// //   {/* Circles */}
//   // <main className="w-full h-full flex justify-center items-center">
//   //   {/* Outer Circle */}
//   //   <motion.div
//   //     className="lg:w-[900px] relative md:w-[600px] w-[350px] lg:h-[900px] md:h-[600px] h-[350px] bg-transparent border-2 border-dashed border-orange-100/60 rounded-full flex justify-center items-center outline-dashed outline-2 outline-orange-100/50 lg:outline-offset-[120px] md:outline-offset-[80px] outline-offset-[45px]"
//   //     animate={{ rotate: 360 }}
//   //     transition={{
//   //       repeat: Infinity,
//   //       repeatType: "loop",
//   //       ease: "linear",
//   //       duration: 60,
//   //     }}
//   //   >
//   //      <div className="absolute top-20 right-10 opacity-20 animate-spin-slow">
//   //         <BitcoinAnimation size={120} />
//   //       </div>
//   //       <div className="absolute bottom-20 left-10 opacity-20">
//   //         <BitcoinAnimation size={120} />
//   //       </div>
//   //     {/*if I want images to appear on mobile view change:  className="w-24 h-24 rounded-full absolute top-[50%] -right-10 border-2 border-orange-500 block" */}
//   //     <Image
//   //       src="/images/c1.jpeg"
//   //       alt="image"
//   //       className="w-24 h-24 rounded-full absolute top-[50%] -right-10 border-2 border-orange-500 hidden md:block"
//   //       priority
//   //       height={200}
//   //       width={200}
//   //     />
//   //     <Image
//   //       src="/images/sos1.jpeg"
//   //       alt="image"
//   //       className="w-24 h-24 rounded-full absolute top-[50%] -left-10 border-2 border-orange-500 hidden md:block"
//   //       priority
//   //       height={200}
//   //       width={200}
//   //     />

//   //     {/* Middle Circle */}
//   //     <motion.div
//   //       className="lg:w-[650px] relative md:w-[450px] w-[270px] lg:h-[650px] md:h-[450px] h-[270px] bg-orange-100/20 dark:bg-transparent md:border-4 border-2 border-dashed dark:border-2 border-orange-100/80 dark:border-orange-500/20 rounded-full flex justify-center items-center outline-none md:outline-0 outline-dashed outline-2 outline-orange-400/10 outline-offset-[130px]"
//   //       animate={{ rotate: -360 }}
//   //       transition={{
//   //         repeat: Infinity,
//   //         repeatType: "reverse",
//   //         repeatDelay: 1,
//   //         ease: "linear",
//   //         duration: 30,
//   //       }}
//   //     >
//   //       <Image
//   //         src="/images/c2_2.jpeg"
//   //         alt="image"
//   //         className="w-24 h-24 rounded-full absolute top-[50%] -right-8 border-2 border-orange-300 hidden md:block"
//   //         priority
//   //         height={200}
//   //         width={200}
//   //       />
//   //        {/* <Image
//   //         src="/images/c1_1.jpeg"
//   //         alt="image"
//   //         className="w-16 h-16 rounded-full absolute top-[50%] -right-8 border-2 border-orange-300 hidden md:block"
//   //         priority
//   //         height={200}
//   //         width={200}
//   //       /> */}

//   //       {/* Inner Circle */}
//   //       <div className="lg:w-[450px] md:w-[300px] w-[190px] lg:h-[450px] md:h-[300px] h-[190px] bg-orange-100/30 border-4 dark:bg-bridgeOrange/10 dark:border-2 dark:border-orange-500/20 border-orange-100 rounded-full flex justify-center items-center"></div>
//   //     </motion.div>
//   //   </motion.div>
//   // </main>

// //   {/* Overlay Content */}
// //   <main className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
// //     <div className="lg:w-[55%] md:w-[60%] w-full flex flex-col md:gap-4 gap-6 items-center justify-center">
// //       <h1 className="font-semibold leading-tight lg:text-5xl md:text-3xl text-[1.72rem] text-center">
// //         Empowering Ugandans through transformative Bitcoin Education
// //       </h1>
// //       <p className="lg:w-[85%] w-full text-muted-foreground text-center">
// //         Learn,Build and Network at School of Satoshi
// //       </p>
// //       <Link
// //         href={"/register"}
// //         target="_blank"
// //         rel="noreferrer"
// //         className="rounded-full flex items-center px-12 py-3.5 border-2 border-orange-500 bg-orange-500/10 text-orange-400 text-sm md:text-base capitalize hover:bg-orange-500 hover:text-white transition-all"
// //       >
// //         Join the next cohort <MoveRight className="w-5 h-5 ml-2" />
// //       </Link>
// //     </div>
// //   </main>
// // </section>

// //   );
// // };

// // export default Hero;

// import { motion } from "framer-motion";
// import { MoveRight } from "lucide-react";
// import { Button } from "./ui/button";
// import BitcoinAnimation from "./BitcoinAnimation";
// import c1Image from "@/assets/images/c1.jpeg";
// import sos1Image from "@/assets/images/sos1.jpeg";
// import c2Image from "@/assets/images/c2_2.jpeg";
// import Image from "next/image";
// import Link from "next/link";


// const Hero = () => {
//   const handleJoinCohort = () => {
//     // Navigate to registration - you can replace this with your routing logic
//     window.open("/register", "_blank");
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero font-display">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background"></div>
      
//         {/* Animated circles container */}
//         <div className="w-full h-full flex justify-center items-center">
//           {/* Outer Circle */}
//           <motion.div
//             className="lg:w-[900px] relative md:w-[600px] w-[350px] lg:h-[900px] md:h-[600px] h-[350px] bg-transparent border-2 border-dashed border-orange-100/60 rounded-full flex justify-center items-center outline-dashed outline-2 outline-orange-100/50 lg:outline-offset-[120px] md:outline-offset-[80px] outline-offset-[45px]"
//             animate={{ rotate: 360 }}
//             transition={{
//               repeat: Infinity,
//               repeatType: "loop",
//               ease: "linear",
//               duration: 60,
//             }}
//           >
//             <div className="absolute top-20 right-10 opacity-20 animate-spin-slow">
//                 <BitcoinAnimation size={120} />
//             </div>
//             <div className="absolute bottom-20 left-10 opacity-20">
//                 <BitcoinAnimation size={120} />
//             </div>
//               {/*if I want images to appear on mobile view change:  className="w-24 h-24 rounded-full absolute top-[50%] -right-10 border-2 border-orange-500 block" */}
//               <Image
//                 src="/assets/images/c1.jpeg"
//                 alt="image"
//                 className="w-24 h-24 rounded-full absolute top-[50%] -right-10 border-2 border-orange-500 hidden md:block"
//                 priority
//                 height={200}
//                 width={200}
//               />
//               <Image
//                 src="/assets/images/sos1.jpeg"
//                 alt="image"
//                 className="w-24 h-24 rounded-full absolute top-[50%] -left-10 border-2 border-orange-500 hidden md:block"
//                 priority
//                 height={200}
//                 width={200}
//               />

//               {/* Middle Circle */}
//               <motion.div
//                 className="lg:w-[650px] relative md:w-[450px] w-[270px] lg:h-[650px] md:h-[450px] h-[270px] bg-orange-100/20 dark:bg-transparent md:border-4 border-2 border-dashed dark:border-2 border-orange-100/80 dark:border-orange-500/20 rounded-full flex justify-center items-center outline-none md:outline-0 outline-dashed outline-2 outline-orange-400/10 outline-offset-[130px]"
//                 animate={{ rotate: -360 }}
//                 transition={{
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                   repeatDelay: 1,
//                   ease: "linear",
//                   duration: 30,
//                 }}
//               >
//                 <Image
//                   src="/assets/images/c2_2.jpeg"
//                   alt="image"
//                   className="w-24 h-24 rounded-full absolute top-[50%] -right-8 border-2 border-orange-300 hidden md:block"
//                   priority
//                   height={200}
//                   width={200}
//                 />
//                 {/* <Image
//                   src="/assets/images/c1_1.jpeg"
//                   alt="image"
//                   className="w-16 h-16 rounded-full absolute top-[50%] -right-8 border-2 border-orange-300 hidden md:block"
//                   priority
//                   height={200}
//                   width={200}
//                 /> */}

//                 {/* Inner Circle */}
//                 <div className="lg:w-[450px] md:w-[300px] w-[190px] lg:h-[450px] md:h-[300px] h-[190px] bg-orange-100/30 border-4 dark:bg-bridgeOrange/10 dark:border-2 dark:border-orange-500/20 border-orange-100 rounded-full flex justify-center items-center"></div>
//               </motion.div>
//           </motion.div>
//         </div>

//         {/* Content Overlay */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
//           <motion.div 
//             // className="lg:w-[55%] md:w-[60%] w-full flex flex-col md:gap-4 gap-6 items-center justify-center"
//             className="max-w-4xl mx-auto px-6 md:px-8 text-center flex flex-col justify-center"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             {/* Main Heading */}
//             <motion.h1 
//               className="font-semibold leading-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
//                         bg-gradient-to-r from-foreground via-foreground to-bitcoin-orange 
//                         bg-clip-text mb-6 lg:mb-8"
//               // className="font-semibold leading-tight lg:text-6xl md:text-5xl text-[1.72rem] xl:text-7xl bg-gradient-to-r from-foreground via-foreground to-bitcoin-orange bg-clip-text mb-6 lg:mb-8 text-center"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               Empowering Ugandans through transformative Bitcoin Education
//               {/* <span className="text-bitcoin-orange font-extrabold">
//                 transformative Bitcoin Education
//               </span> */}
//             </motion.h1>

//             {/* Subtitle */}
//             <motion.p 
//               className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 lg:mb-12 
//                         max-w-2xl mx-auto leading-relaxed"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               Learn, Build and Network at{" "}
//               <span className="text-bitcoin-orange font-semibold">School of Satoshi</span>
//             </motion.p>
//           </motion.div>
//                       {/* Call to Action Button */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               // className="lg:w-[55%] md:w-[60%] w-full flex flex-col md:gap-4 gap-6 items-center justify-center"
              
//             >
//               <Link
//                 href={"/register"}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="rounded-full w-full flex  px-8 py-3 text-base md:text-lg font-bold  border-2 border-orange-500 bg-orange-500/10 text-orange-400 text-sm md:text-base capitalize hover:bg-orange-500 hover:text-white transition-all"
//               >
//                 Join the next cohort
//                 <MoveRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//               </Link>
//             </motion.div>
//         </div>

//       {/* Decorative gradient blobs */}
//       <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-bitcoin-orange/10 rounded-full blur-3xl opacity-50 animate-pulse-glow"></div>
//       <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-bitcoin-orange/5 rounded-full blur-3xl opacity-30 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
//     </section>
//   );
// };

// export default Hero;



"use client"

import { motion } from "framer-motion"
import { MoveRight } from "lucide-react"
import BitcoinAnimation from "./BitcoinAnimation"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background"></div>

      {/* Animated circles container */}
      <div className="w-full h-full flex justify-center items-center">
        {/* Outer Circle */}
        <motion.div
          className="max-w-full lg:max-w-[900px] relative md:max-w-[600px] max-w-[90vw] lg:max-h-[900px] md:max-h-[600px] max-h-[90vh] bg-transparent border-2 border-dashed border-orange-100/60 rounded-full flex justify-center items-center outline-dashed outline-2 outline-orange-100/50 lg:outline-offset-[120px] md:outline-offset-[80px] outline-offset-[45px]"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
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

          <Image
            src="/images/c1.jpeg"
            alt="image"
            className="w-24 h-24 rounded-full absolute top-[50%] -right-10 border-2 border-orange-500 hidden md:block"
            priority
            height={200}
            width={200}
          />
          <Image
            src="/images/sos1.jpeg"
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
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              repeatDelay: 1,
              ease: "linear",
              duration: 30,
            }}
          >
            <Image
              src="/images/c2_2.jpeg"
              alt="image"
              className="w-24 h-24 rounded-full absolute top-[50%] -right-8 border-2 border-orange-300 hidden md:block"
              priority
              height={200}
              width={200}
            />
            {/* Inner Circle */}
            <div className="lg:w-[450px] md:w-[300px] w-[190px] lg:h-[450px] md:h-[300px] h-[190px] bg-orange-100/30 border-4 dark:bg-bridgeOrange/10 dark:border-2 dark:border-orange-500/20 border-orange-100 rounded-full flex justify-center items-center"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        <motion.div
          className="max-w-4xl mx-auto px-6 md:px-8 text-center flex flex-col justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Heading */}
          <motion.h1
            className="font-heading font-semibold leading-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                      bg-gradient-to-r from-foreground via-foreground to-bitcoin-orange
                      bg-clip-text text-transparent mb-6 lg:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering Ugandans through transformative Bitcoin Education
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="font-sans text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 lg:mb-12
                      max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Learn, Build and Network at <span className="text-bitcoin-orange font-semibold">School of Satoshi</span>
          </motion.p>
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <Link
            href={"/register"}
            target="_blank"
            rel="noreferrer"
            className="rounded-full flex items-center px-8 py-4 text-base md:text-lg font-medium border-2 border-orange-500 bg-orange-500/10 text-orange-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            Join the next cohort
            <MoveRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>

      {/* Decorative gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-bitcoin-orange/10 rounded-full blur-3xl opacity-50 animate-pulse-glow"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-bitcoin-orange/5 rounded-full blur-3xl opacity-30 animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      ></div>
    </section>
  )
}

export default Hero



// "use client"

// import { motion } from "framer-motion"
// import { MoveRight } from "lucide-react"
// import BitcoinAnimation from "./BitcoinAnimation"
// import Image from "next/image"
// import Link from "next/link"

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero">
//       {/* Prevent horizontal overflow */}
//       <div className="absolute inset-0 overflow-x-hidden">
//         {/* Background decorative elements */}
//         <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background"></div>

//         {/* Animated circles container - constrained to viewport */}
//         <div className="w-full h-full flex justify-center items-center px-4">
//           {/* Outer Circle - responsive with max-width */}
//           <motion.div
//             className="relative max-w-full aspect-square
//                       w-[min(90vw,350px)] md:w-[min(90vw,600px)] lg:w-[min(90vw,900px)]
//                       bg-transparent border-2 border-dashed border-orange-100/60 rounded-full 
//                       flex justify-center items-center outline-dashed outline-2 outline-orange-100/50 
//                       lg:outline-offset-[120px] md:outline-offset-[80px] outline-offset-[45px]"
//             animate={{ rotate: 360 }}
//             transition={{
//               repeat: Number.POSITIVE_INFINITY,
//               repeatType: "loop",
//               ease: "linear",
//               duration: 60,
//             }}
//           >
//             {/* Bitcoin animations - positioned safely within bounds */}
//             <div className="absolute top-[10%] right-[10%] opacity-20 animate-spin-slow">
//               <BitcoinAnimation size={80} />
//             </div>
//             <div className="absolute bottom-[10%] left-[10%] opacity-20">
//               <BitcoinAnimation size={80} />
//             </div>

//             {/* Profile images - positioned within circle bounds */}
//             <Image
//               src="/assets/images/c1.jpeg"
//               alt="image"
//               className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full absolute 
//                         top-[50%] -translate-y-1/2 right-0 translate-x-1/2 
//                         border-2 border-orange-500 hidden md:block"
//               priority
//               height={200}
//               width={200}
//             />
//             <Image
//               src="/assets/images/sos1.jpeg"
//               alt="image"
//               className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full absolute 
//                         top-[50%] -translate-y-1/2 left-0 -translate-x-1/2 
//                         border-2 border-orange-500 hidden md:block"
//               priority
//               height={200}
//               width={200}
//             />

//             {/* Middle Circle - responsive sizing */}
//             <motion.div
//               className="relative aspect-square
//                         w-[75%] max-w-full
//                         bg-orange-100/20 dark:bg-transparent md:border-4 border-2 border-dashed 
//                         dark:border-2 border-orange-100/80 dark:border-orange-500/20 rounded-full 
//                         flex justify-center items-center outline-none md:outline-0 outline-dashed 
//                         outline-2 outline-orange-400/10 outline-offset-[130px]"
//               animate={{ rotate: -360 }}
//               transition={{
//                 repeat: Number.POSITIVE_INFINITY,
//                 repeatType: "reverse",
//                 repeatDelay: 1,
//                 ease: "linear",
//                 duration: 30,
//               }}
//             >
//               <Image
//                 src="/assets/images/c2_2.jpeg"
//                 alt="image"
//                 className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full absolute 
//                           top-[50%] -translate-y-1/2 right-0 translate-x-1/2 
//                           border-2 border-orange-300 hidden md:block"
//                 priority
//                 height={200}
//                 width={200}
//               />
              
//               {/* Inner Circle - responsive sizing */}
//               <div className="aspect-square w-[70%] max-w-full
//                             bg-orange-100/30 border-4 dark:bg-bridgeOrange/10 dark:border-2 
//                             dark:border-orange-500/20 border-orange-100 rounded-full 
//                             flex justify-center items-center">
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Decorative gradient blobs - constrained to viewport */}
//         <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 
//                       bg-bitcoin-orange/10 rounded-full blur-3xl opacity-50 animate-pulse-glow max-w-[25vw]">
//         </div>
//         <div
//           className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 
//                     bg-bitcoin-orange/5 rounded-full blur-3xl opacity-30 animate-pulse-glow max-w-[35vw]"
//           style={{ animationDelay: "1s" }}
//         >
//         </div>
//       </div>

//       {/* Content Overlay */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
//         <motion.div
//           className="max-w-4xl mx-auto text-center flex flex-col justify-center"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           {/* Main Heading */}
//           <motion.h1
//             className="font-heading font-semibold leading-tight text-3xl md:text-4xl lg:text-5xl xl:text-6xl
//                       bg-gradient-to-r from-foreground via-foreground to-bitcoin-orange
//                       bg-clip-text text-transparent mb-6 lg:mb-8 max-w-full"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Empowering Ugandans through transformative Bitcoin Education
//           </motion.h1>

//           {/* Subtitle */}
//           <motion.p
//             className="font-sans text-base md:text-lg lg:text-xl text-muted-foreground mb-8 lg:mb-12
//                       max-w-2xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             Learn, Build and Network at <span className="text-bitcoin-orange font-semibold">School of Satoshi</span>
//           </motion.p>
//         </motion.div>

//         {/* Call to Action Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="flex justify-center"
//         >
//           <Link
//             href={"/register"}
//             target="_blank"
//             rel="noreferrer"
//             className="rounded-full flex items-center px-6 py-3 md:px-8 md:py-4 text-sm md:text-base lg:text-lg 
//                       font-medium border-2 border-orange-500 bg-orange-500/10 text-orange-400 
//                       hover:bg-orange-500 hover:text-white transition-all duration-300 max-w-[90vw]"
//           >
//             Join the next cohort
//             <MoveRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Hero