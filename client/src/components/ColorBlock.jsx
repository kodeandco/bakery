import React from "react";
import { motion } from "framer-motion";
import "./ColorBlock.css";

const ColorBlock = ({ color = "#ffe5b4", children }) => (
  <motion.div
    className="color-block"
    style={{ background: color }}
    initial={{ y: 60, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.8, type: "spring" }}
  >
    {children}
  </motion.div>
);

export default ColorBlock;