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

const TimelineChart = () => {
    return (
        <div className="timeline">
            {milestones.map((milestone, index) => (
                <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                    <div className="timeline-year">{milestone.year}</div>
                    <div className="timeline-event">{milestone.event}</div>
                </motion.div>
            ))}
        </div>
    );
};

export default TimelineChart;