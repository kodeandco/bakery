/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import './TextCard.css'
import ColorBlock from './ColorBlock'
import { useState } from 'react'

const OLIVE = "var(--bakery-pastel-olive)";

const cardsData = [
  {
    id: 1,
    heading: "Quality, locally-sourced ingredients. Modern baking techniques.",
    description: "Creating delicious baked goods without artificial additives or harmful processes.",
    color: "card-yellow"
  },
  {
    id: 2,
    heading: "Sustainably baked with love and care.",
    description: "Every batch is made with sustainable practices, reducing our environmental footprint while delivering exceptional taste.",
    color: "card-green"
  },
  {
    id: 3,
    heading: "Handcrafted perfection in every bite.",
    description: "Our artisans pour passion into every creation, ensuring that each pastry tells a story of dedication and flavor.",
    color: "card-cream"
  }
];

function TextCard() {
  const [bgColor, setBgColor] = useState(OLIVE);
  
  return (
    <ColorBlock color={bgColor}>
      <div className="textcard-container">
        {cardsData.map((card, index) => (
          <motion.div
            key={card.id}
            className={`landing-quality ${card.color}`}
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ 
              duration: 0.7, 
              delay: index * 0.15,
              ease: [0.34, 1.56, 0.64, 1] 
            }}
          >
            <h2 className="section-heading">
              {card.heading}
            </h2>
            <p>
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </ColorBlock>
  )
}

export default TextCard