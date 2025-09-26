import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./CircleScroll.css";

const CIRCLE_BG = "#a85c3a";

const CircleScroll = () => {
  const ref = useRef(null);
  // Get scroll progress for this section (0 to 1)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to scale and opacity
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 18]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.2, 0.8, 1],
    [0, 0.18, 1, 1, 0]
  );

  return (
    <div ref={ref} className="circle-scroll-container">
      <motion.div
        className="circle-scroll"
        style={{
          background: CIRCLE_BG,
          scale,
          opacity
        }}
      />
    </div>
  );
};

export default CircleScroll;