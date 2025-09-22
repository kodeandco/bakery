/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import TimelineChart from "../components/TimelineChart";
import CheckboxList from "../components/CheckboxList";
import "./Landing.css";

const treats = [
  "Signature Sourdough",
  "Artisan Croissants",
  "Seasonal Fruit Tart",
  "Heritage Rye Bread",
  "Vegan Chocolate Cake",
  "Lemon Thyme Biscotti",
];

const sustainabilityPoints = [
  "Locally-sourced, organic ingredients",
  "Zero artificial additives",
  "Energy-efficient ovens",
  "Compostable packaging",
  "Supporting local farmers",
];

const Landing = () => (
  <main className="landing-main">
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
            key={treat}
            className="artisan-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <img
              src={`https://source.unsplash.com/400x300/?bakery,${treat.replace(
                " ",
                "-"
              )}`}
              alt={treat}
              className="artisan-img"
            />
            <div className="artisan-label">{treat}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>

    {/* Sustainability Commitment */}
    <motion.section
      className="landing-sustainability"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-heading">
        Reviving traditional baking for a sustainable future.
      </h2>
      {/* <CheckboxList items={sustainabilityPoints} /> */}
    </motion.section>

    {/* Timeline Chart */}
    <motion.section
      className="landing-timeline"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <TimelineChart />
    </motion.section>

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
        Creating delicious baked goods without artificial additives or harmful processes.
      </p>
    </motion.section>

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
        Real flavors. Classic favorites and new discoveries, baked a different way.
      </blockquote>
    </motion.section>
  </main>
);

export default Landing;