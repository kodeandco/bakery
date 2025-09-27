/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import CircleScroll from "../components/CircleScroll";
import "./Landing.css";
import { motion } from "framer-motion";
import ArtisansGoodsShowcase from "../components/ArtisansGoodsShowcase";
import TimelineChart from "../components/TimelineChart";
import ColorBlock from "../components/ColorBlock";
// import CheckboxList from "../components/CheckboxList";

const OLIVE = "var(--bakery-pastel-olive)";
const BROWN = "var(--bakery-brown)";

const Landing = () => {
  const [bgColor, setBgColor] = useState(OLIVE);
  const triggerRef = useRef(null);

  const handleScrollProgress = (progress) => {
    // Smoother background transition timing
    if (progress > 0.05 && progress < 0.95) {
      setBgColor(BROWN);
    } else {
      setBgColor(OLIVE);
    }
  };

  return (
    <main style={{ 
      background: bgColor, 
      minHeight: "100vh", 
      transition: "background 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)" 
    }}>
      {/* Circle Scroll Animation - overlays everything */}
      <CircleScroll onScrollProgress={handleScrollProgress} triggerElement={triggerRef} />

      {/* Tagline */}
      <motion.section
        className="landing-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h1 className="landing-title">
          Pure, inventive flavors—baked sustainably.
        </h1>
        <p className="landing-subtitle">
          Classic favorites and new discoveries, baked a different way.
        </p>
      </motion.section>

      {/* This div acts as the trigger for the circle animation */}
      <div ref={triggerRef} style={{ height: "120vh" }} />

      <ArtisansGoodsShowcase />

      {/* Sustainability Commitment */}
      {/* <motion.section
      className="landing-sustainability"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    > */}

      {/* <CheckboxList items={sustainabilityPoints} /> */}
      {/* </motion.section> */}

      {/* Timeline Chart */}
      <motion.section
        className="landing-timeline"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <TimelineChart />
      </motion.section>

      <ColorBlock color={bgColor}>
        {/* Quality & Technique */}
        <motion.section
          className="landing-quality"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="section-heading">
            Quality, locally-sourced ingredients. Modern baking techniques.
          </h2>
          <p>
            Creating delicious baked goods without artificial additives or harmful
            processes.
          </p>
        </motion.section>
      </ColorBlock>

      {/* Joy & Community */}
      <motion.section
        className="landing-joy"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h2 className="section-heading">
          More delicious treats. More room for joy and community in every bite.
        </h2>
        <div className="joy-repetition">
          {[...Array(6)].map((_, i) => (
            <motion.span
              key={i}
              className="joy-word"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1,
                ease: "easeOut"
              }}
            >
              more
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Real Flavors Statement */}
      <motion.section
        className="landing-flavors"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <blockquote className="flavors-quote">
          Real flavors. Classic favorites and new discoveries, baked a different
          way.
        </blockquote>
      </motion.section>
    </main>
  );
};

export default Landing;