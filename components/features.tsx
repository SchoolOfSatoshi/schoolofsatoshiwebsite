

import React from 'react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Features = () => {
    const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
    const { ref: featuresRef, inView: featuresInView } = useInView({ triggerOnce: true });
    const { ref: programsRef, inView: programsInView } = useInView({ triggerOnce: true });
    const { ref: cohortsRef, inView: cohortsInView } = useInView({ triggerOnce: true });
    const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true });
  return (
    <section className="w-full py-12 md:py-10 lg:py-20">
    <div className="container px-4 md:px-6">
      <motion.div
        ref={featuresRef}
        initial={{ opacity: 0, y: 50 }}
        animate={featuresInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center space-y-4 text-center"
      >
        <div className="space-y-2 px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why School of Satoshi
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          We are committed to providing comprehensive financial education, with a strong emphasis on Bitcoin and its potential to drive economic empowerment. Our aim is to equip Ugandans with the knowledge and practical skills needed to navigate the financial landscape, break free from traditional barriers, and harness the power of Bitcoin as a tool for financial inclusion and independence.  
          {/* By fostering financial literacy and digital asset awareness, we aim to create a community where individuals can confidently participate in the  global economy, unlocking new opportunities for growth and self-sufficiency. */}
          </p>
        </div>

      </motion.div>

    </div>
  </section>
  )
}

export default Features
