/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import './ArtisansGoodsShowcase.css'
import treats from '../data/artisan_bestsellars'

export default function ArtisansGoodsShowcase() {
  return (
    <div>
      {/* Artisan Goods Showcase */}
      <motion.section
        className="landing-artisan"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Exclusive Artisan Baked Goods
        </motion.h2>
        <div className="artisan-grid">
          {treats.map((treat, i) => (
            <motion.div
              key={treat.name}
              className="artisan-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img
                src={treat.img}
                alt={treat.name}
                className="artisan-img"
              />
              <div className="artisan-label">{treat.name}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}