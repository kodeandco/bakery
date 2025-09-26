/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import CircleScroll from "../components/CircleScroll";
import "./Landing.css";
import ArtisansGoodsShowcase from "../components/ArtisansGoodsShowcase";
import TimelineChart from "../components/TimelineChart";
import ColorBlock from "../components/ColorBlock";
// import CheckboxList from "../components/CheckboxList";

const OLIVE = "var(--bakery-pastel-olive)";
const BROWN = "var(--bakery-brown)";

const Landing = () => {
  const circleRef = useRef(null);
  const [bgColor, setBgColor] = useState(OLIVE);

  // Listen to scroll progress of the circle section
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (v > 0.1 && v < 0.9) {
        setBgColor(BROWN); // Circle expanding
      } else {
        setBgColor(OLIVE); // Circle contracted or finished
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <main style={{ background: bgColor, minHeight: "100vh", transition: "background 0.7s" }}>
      <div ref={circleRef}>
        <CircleScroll />
      </div>

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

      <ColorBlock color={bgColor}>
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