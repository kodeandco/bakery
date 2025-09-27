import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./CircleScroll.css";

const CIRCLE_BG = "#a85c3a";

const CircleScroll = ({ onScrollProgress, triggerElement }) => {
  // Use the trigger element or document body for scroll detection
  const { scrollYProgress } = useScroll({
    target: triggerElement,
    offset: ["start center", "end center"]
  });

  // Map scroll progress to scale and opacity for full screen circle animation
  const scale = useTransform(scrollYProgress, [0, 0.6, 1], [0.1, 8, 0]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.5, 0.9, 1],
    [0, 0.3, 1, 1, 0]
  );

  // Report scroll progress to parent component for background color changes
  useEffect(() => {
    if (onScrollProgress) {
      const unsubscribe = scrollYProgress.on("change", (v) => {
        onScrollProgress(v);
      });
      return () => unsubscribe();
    }
  }, [scrollYProgress, onScrollProgress]);

  return (
    <motion.div
      className="circle-scroll"
      style={{
        background: CIRCLE_BG,
        scale,
        opacity,
        x: "-50%",
        y: "-50%"
      }}
    />
  );
};

export default CircleScroll;