/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import TimelineChart from "../components/TimelineChart";
import CheckboxList from "../components/CheckboxList";
import "./Landing.css";
import ArtisansGoodsShowcase from "../components/ArtisansGoodsShowcase";
import CircleScroll from "../components/CircleScroll";
import ColorBlock from "../components/ColorBlock";

const sustainabilityPoints = [
  "Locally-sourced, organic ingredients",
  "Zero artificial additives",
  "Energy-efficient ovens",
  "Compostable packaging",
  "Supporting local farmers",
];

const Landing = () => {
  const [nextBg, setNextBg] = useState("#fff8f3");

  return (
    <main style={{ background: nextBg, transition: "background 0.5s" }}>
      {/* Tagline */}
      <motion.section
        className="landing-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="landing-title">
          Pure, inventive flavors—baked sustainably.
        </h1>
        <p className="landing-subtitle">
          Classic favorites and new discoveries, baked a different way.
        </p>
      </motion.section>

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
        transition={{ duration: 0.8 }}
      >
        <TimelineChart />
      </motion.section>

      <CircleScroll onExpandEnd={(color) => setNextBg(color)} />
      <ColorBlock color={nextBg}>
 {/* Quality & Technique */}
      <motion.section
        className="landing-quality"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
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
        transition={{ duration: 0.7 }}
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
              transition={{ duration: 0.4, delay: i * 0.1 }}
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
        transition={{ duration: 0.8 }}
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