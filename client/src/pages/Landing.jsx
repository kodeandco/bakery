/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import "./Landing.css";
import { motion } from "framer-motion";
import ArtisansGoodsShowcase from "../components/ArtisansGoodsShowcase";
import TimelineChart from "../components/TimelineChart";
import ColorBlock from "../components/ColorBlock";
import TextCard from "../components/TextCard";

const OLIVE = "var(--bakery-pastel-olive)";
const BROWN = "var(--bakery-brown)";

const Landing = () => {
  const [bgColor, setBgColor] = useState(OLIVE);
  const triggerRef = useRef(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: triggerRef,
    offset: ["start center", "end center"]
  });

  // Transform scroll to clip-path circle radius
  // Slower contraction: longer middle phase
  const clipRadius = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.7, 1], 
    ["150%", "5%", "5%", "150%"]
  );

  const handleScrollProgress = (progress) => {
    // Background transition timing
    if (progress > 0.05 && progress < 0.95) {
      setBgColor(BROWN);
    } else {
      setBgColor(OLIVE);
    }
  };

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      handleScrollProgress(v);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <main style={{ 
      background: bgColor, 
      transition: "background 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)" 
    }}>
      {/* Hero Section with Left Text and Right Image */}
      <motion.section
        className="landing-hero"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          margin: "0 auto",
          padding: "0 2rem",
          minHeight: "80vh"
        }}
      >
        {/* Left side - Text content */}
        <div style={{
          flex: "0 0 auto",
          maxWidth: "50%",
          textAlign: "left"
        }}>
          <h1 className="landing-title" style={{
            margin: "0 0 1rem 0",
            textAlign: "left"
          }}>
            Pure, inventive flavors—baked sustainably.
          </h1>
          <p className="landing-subtitle" style={{
            margin: "0",
            textAlign: "left"
          }}>
            Classic favorites and new discoveries, baked a different way.
          </p>
        </div>

        {/* Right side - Image - animates on page load only */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
          style={{
            flex: "0 0 auto",
            maxWidth: "45%"
          }}
        >
          <img
            src="/assets/image.png"
            alt="Artisanal baked goods"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "60vh",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </motion.div>
      </motion.section>

      {/* Scroll trigger area with circle mask effect */}
      <div ref={triggerRef} style={{ height: "120vh", position: "relative" }}>
        <motion.div
          ref={containerRef}
          style={{
            clipPath: useTransform(clipRadius, (r) => `circle(${r} at 50% 50%)`),
            position: "sticky",
            top: 0,
            height: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            background: bgColor,
            transition: "background 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
          }}
        >
          <ArtisansGoodsShowcase />
        </motion.div>
      </div>

      {/* Timeline Chart */}
      <section className="landing-timeline">
        <TimelineChart />
      </section>

      <TextCard/>

    

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

      {/* Real Flavors Statement */}
      <motion.section
        className="landing-flavors"
        initial={{ opacity: 0, x: -100, rotate: 3 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
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