import React from 'react'
import { motion } from 'framer-motion'
import './JoyCommunity.css'

function JoyCommunity() {
  return (
    <div>
      
         {/* Joy & Community */}
      <motion.section
        className="landing-joy"
        initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <h2 className="section-heading">
          More delicious treats. More room for joy and community in every bite.
        </h2>
        <div className="joy-repetition">
          {[...Array(6)].map((_, i) => (
            <motion.span
              key={i}
              className="joy-word"
              initial={{ opacity: 0, y: 50, scale: 0.5, rotate: -15 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.08,
                ease: [0.34, 1.56, 0.64, 1]
              }}
            >
              more
            </motion.span>
          ))}
        </div>
      </motion.section>
      
    </div>
  )
}

export default JoyCommunity
