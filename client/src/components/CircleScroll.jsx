import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CircleScroll = ({ onScrollProgress, triggerElement, children }) => {
  const { scrollYProgress } = useScroll({
    target: triggerElement,
    offset: ["start center", "end center"]
  });

  // Transform scroll to clip-path circle radius
  // Start large (150% to cover full screen), shrink to small circle, then expand back
  const clipRadius = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    ["150%", "0%", "150%"]
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
      style={{
        clipPath: clipRadius.get() ? `circle(${clipRadius.get()} at 50% 50%)` : "none",
        position: "relative",
        width: "100%",
      }}
    >
      <motion.div
        style={{
          clipPath: useTransform(clipRadius, (r) => `circle(${r} at 50% 50%)`),
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default CircleScroll;