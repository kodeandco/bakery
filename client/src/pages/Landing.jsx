/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

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

  const clipRadius = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.7, 1], 
    ["150%", "5%", "5%", "150%"]
  );

  const handleScrollProgress = (progress) => {
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
    <main className="landing-main" style={{ 
      background: bgColor, 
      transition: "background 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)" 
    }}>
      {/* Video Background */}
      <div className="video-background-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="video-background"
        >
          <source src="/landing.mp4" type="video/mp4" />
        
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Video Overlay for readability */}
      <div className="video-overlay" />

      {/* Hero Section with Left Text and Right Image */}
      <motion.section
        className="landing-hero"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
      >
        {/* Left side - Text content */}
        <div className="hero-text-content">
          <h1 className="landing-title">
            Pure, inventive flavors—baked sustainably.
          </h1>
          <p className="landing-subtitle">
            Classic favorites and new discoveries, baked a different way.
          </p>
        </div>

        {/* Right side - Image - animates on page load only */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
          className="hero-image-content"
        >
          <img 
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600" 
            alt="Bakery showcase"
            className="hero-image"
          />
        </motion.div>
      </motion.section>

      {/* Additional sections can go here */}
      <section className="landing-story-section">
        <h2 className="section-heading">Our Story</h2>
        <p className="story-text">
          Discover the artisan approach to baking that combines traditional techniques 
          with sustainable practices and innovative flavors.
        </p>
      </section>
    </main>
  );
};

export default Landing;