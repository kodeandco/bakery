import React from 'react';
import { motion } from 'framer-motion';
import './TimelineChart.css';

const milestones = [
    { year: '2010', event: 'Channel9 Bakery Established' },
    { year: '2012', event: 'First Award for Best Pastry' },
    { year: '2015', event: 'Opened Second Location' },
    { year: '2018', event: 'Launched Online Ordering' },
    { year: '2020', event: 'Expanded Menu with Vegan Options' },
    { year: '2023', event: 'Celebrating 13 Years of Deliciousness!' },
];

                const colors = [
  "#fbeee6", // light brown
  "#ffe5b4", // pastel yellow
  "#ffd6d6", // soft red
  "#fbeee6", // repeat
  "#ffe5b4",
  "#ffd6d6"
];


const itemVariants = {
    hidden: { opacity: 0, x: -60, y: 60, scale: 0.95 },
    visible: { opacity: 1, x: 0, y: 0, scale: 1 }
};

const TimelineChart = () => {
    return (
        <div className="timeline-chart">
            <div className="timeline">
                <motion.div
                    className="timeline-line"
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                />

{milestones.map((milestone, index) => (
  <motion.div
    key={index}
    className="timeline-item"
    style={{ backgroundColor: colors[index % colors.length] }}
    variants={itemVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    transition={{
      duration: 0.7,
      delay: index * 0.2,
      type: "spring",
      bounce: 0.3
    }}
    whileHover={{ scale: 1.05, boxShadow: "0 4px 24px rgba(168,92,58,0.15)" }}
  >
    {/* Geometric/Circular Animation */}
    <motion.div
      className="timeline-geo-circle"
      initial={{ scale: 0, rotate: 0, opacity: 0 }}
      whileInView={{ scale: 1, rotate: 360, opacity: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
    />
    <div className="timeline-dot" />
    <div className="timeline-content">
      <motion.div
        className="timeline-year"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.25 }}
      >
        {milestone.year}
      </motion.div>
      <motion.div
        className="timeline-event"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.3 }}
      >
        {milestone.event}
      </motion.div>
    </div>
    <div className="timeline-glow" />
  </motion.div>
))}
            </div>
            <div className="timeline-empty-space" />
        </div>
    );
};

export default TimelineChart;