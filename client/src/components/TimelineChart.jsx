import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
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
    const [visibleItems, setVisibleItems] = useState([]);
    const timelineRef = useRef(null);
    const isInView = useInView(timelineRef, { amount: 0.2 });

    useEffect(() => {
        if (isInView) {
            // Reset visible items when component comes into view
            setVisibleItems([]);
            
            const timer = setTimeout(() => {
                milestones.forEach((_, index) => {
                    setTimeout(() => {
                        setVisibleItems(prev => [...prev, index]);
                    }, index * 300);
                });
            }, 500);

            return () => clearTimeout(timer);
        } else {
            // Reset when out of view
            setVisibleItems([]);
        }
    }, [isInView]);

    const generateSquigglyPath = () => {
        const height = milestones.length * 150;
        let path = `M 50 20`;
        
        for (let i = 0; i < height; i += 20) {
            const x = 50 + Math.sin(i * 0.02) * 15;
            path += ` L ${x} ${i + 20}`;
        }
        
        return path;
    };

    return (
      <div className='timeline-container'>
        <div ref={timelineRef} className="timeline-wrapper">
            <div className="timeline-content">
                <svg 
                    width="100" 
                    height={milestones.length * 150 + 100}
                    className="timeline-svg"
                >
                    <path
                        d={generateSquigglyPath()}
                        stroke="#FFD700"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray="1000"
                        strokeDashoffset={isInView ? "0" : "1000"}
                        className="timeline-path"
                    />
                    
                    {milestones.map((_, index) => {
                        const y = index * 150 + 40;
                        const x = 50 + Math.sin(y * 0.02) * 15;
                        
                        return (
                            <circle
                                key={index}
                                cx={x}
                                cy={y}
                                r="8"
                                fill="#FFD700"
                                stroke="#FFA500"
                                strokeWidth="2"
                                className={`timeline-circle ${visibleItems.includes(index) ? 'visible' : ''}`}
                                style={{
                                    transformOrigin: `${x}px ${y}px`
                                }}
                            />
                        );
                    })}
                </svg>

                <div className="timeline-items">
                    {milestones.map((milestone, index) => {
                        const isVisible = visibleItems.includes(index);
                        const isEven = index % 2 === 0;
                        const colorIndex = index % 6;
                        
                        return (
                            <div
                                key={index}
                                className={`timeline-card ${isVisible ? 'visible' : ''} ${isEven ? 'even' : 'odd'} color-${colorIndex}`}
                            >
                                <div className={`timeline-card-decoration ${isVisible ? 'visible' : ''}`} 
                                     style={{ transitionDelay: `${index * 0.1}s` }} />
                                
                                <div className={`timeline-year ${isVisible ? 'visible' : ''}`}
                                     style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}>
                                    {milestone.year}
                                </div>
                                
                                <div className={`timeline-event ${isVisible ? 'visible' : ''}`}
                                     style={{ transitionDelay: `${index * 0.1 + 0.4}s` }}>
                                    {milestone.event}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
      </div>
    );
};

export default TimelineChart;