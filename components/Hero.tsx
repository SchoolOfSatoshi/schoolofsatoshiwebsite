"use client"

import { motion } from "framer-motion"
import { MoveRight } from "lucide-react"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-6rem)] mt-24 w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/images/c2_2.jpeg"
        >
          <source src="/assets/videos/gradVid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for readability - stronger gradient for text contrast */}
        <div className="absolute inset-0 bg-black/20 bg-gradient-to-t from-black/60 via-black/20 to-black/20"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >

          <motion.h1
            className="font-heading font-bold leading-tight text-3xl md:text-5xl lg:text-6xl tracking-tight mb-8 text-white drop-shadow-lg flex flex-col items-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
              {"Empowering Ugandans through".split(" ").map((word, wordIndex) => (
                <div key={wordIndex} className="flex whitespace-nowrap">
                  {Array.from(word).map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                  {/* Add a non-breaking space after the word, but we handle gap-x-3 instead */}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-primary">
              {"Bitcoin Education".split(" ").map((word, wordIndex) => (
                <div key={wordIndex} className="flex whitespace-nowrap">
                  {Array.from(word).map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
              ))}
            </div>
          </motion.h1>

          {/* <motion.p
            className="font-sans text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed text-balance drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Learn, Build and Network at the <span className="text-primary font-semibold">School of Satoshi</span>.
            We are building a financially sovereign ecosystem through hands-on learning.
          </motion.p> */}
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="https://forms.gle/oVWK1JJdeEWstvTY8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="group relative px-6 py-3 rounded-full bg-primary text-white font-semibold text-base hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 flex items-center gap-2 overflow-hidden backdrop-blur-sm">
              <span className="relative z-10">Join the next cohort</span>
              <MoveRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero