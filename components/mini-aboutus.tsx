"use client"

import { ShieldMinus, Eye, Lightbulb } from "lucide-react"
import { motion, Variants } from "framer-motion"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 10
    }
  },
}

const Miniaboutus = () => {
  return (
    <motion.div
      className="flex flex-col space-y-6 mt-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Mission */}
      <motion.div
        className="flex items-start space-x-4 p-6 glass-card rounded-xl group cursor-default"
        variants={itemVariants}
        whileHover={{ scale: 1.02, x: 10, backgroundColor: "rgba(255,255,255,0.6)" }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
          <ShieldMinus className="h-6 w-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-heading font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">Mission</h3>
          <p className="text-sm md:text-base font-sans text-muted-foreground leading-relaxed">
            To equip Ugandans with Practical Bitcoin education that fosters financial sovereignity, self custody and
            informed participation in the digital economy
          </p>
        </div>
      </motion.div>

      {/* Vision */}
      <motion.div
        className="flex items-start space-x-4 p-6 glass-card rounded-xl group cursor-default"
        variants={itemVariants}
        whileHover={{ scale: 1.02, x: 10, backgroundColor: "rgba(255,255,255,0.6)" }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
          <Eye className="h-6 w-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-heading font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">Vision</h3>
          <p className="text-sm md:text-base font-sans text-muted-foreground leading-relaxed">
            Empowering Ugandans through comprehensive bitcoin education delivered in their natively spoken languages
          </p>
        </div>
      </motion.div>

      {/* Why School of Satoshi */}
      <motion.div
        className="flex items-start space-x-4 p-6 glass-card rounded-xl group cursor-default"
        variants={itemVariants}
        whileHover={{ scale: 1.02, x: 10, backgroundColor: "rgba(255,255,255,0.6)" }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
          <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-heading font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">Why School of Satoshi</h3>
          <p className="text-sm md:text-base font-sans text-muted-foreground leading-relaxed">
            We are committed to providing comprehensive financial education, with a strong emphasis on Bitcoin and its
            potential to drive economic empowerment. Our aim is to equip Ugandans with the knowledge and practical
            skills needed to navigate the financial landscape, break free from traditional barriers, and harness the
            power of Bitcoin as a tool for financial inclusion and independence.
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Miniaboutus
