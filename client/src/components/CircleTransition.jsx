import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CircleTransition = ({
  circleColor = "var(--accent)",
  bgColor = "var(--accent)",
  defaultBg = "var(--olive)",
  triggerId = "color-section",
  transitionDuration = 0.7
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Circle scale and opacity tied to scroll
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 20]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 0.8, 0.8, 0]);

  // Background color transition
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      document.body.style.transition = `background ${transitionDuration}s`;
      if (v > 0.9) {
        document.body.style.background = bgColor;
      } else {
        document.body.style.background = defaultBg;
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, bgColor, defaultBg, transitionDuration]);

  return (
    <section
      id={triggerId}
      ref={ref}
      className="relative flex items-center justify-center h-[100vh] w-full"
      style={{ zIndex: 10 }}
    >
      <motion.div
        style={{
          background: circleColor,
          scale,
          opacity,
          left: "50%",
          top: "50%",
          translateX: "-50%",
          translateY: "-50%",
          position: "fixed",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 20,
        }}
      />
      <div className="relative z-30 text-white text-3xl font-bold">
        {/* Example content */}
        Scroll to see the color transition!
      </div>
    </section>
  );
};

export default CircleTransition;

