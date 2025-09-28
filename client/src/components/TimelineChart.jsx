import React, { useState, useEffect } from 'react';
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
    "#add6b2", // pastel green
    "#a26464", // soft red
    "#fbeee6", // light brown
    "#add6b2", // pastel green
    "#a26464", // soft red
];

const TimelineChart = () => {
    const [visibleItems, setVisibleItems] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            milestones.forEach((_, index) => {
                setTimeout(() => {
                    setVisibleItems(prev => [...prev, index]);
                }, index * 300);
            });
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    // Generate squiggly path
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
        <div style={{
           
            minHeight: '100vh',
            padding: '40px 20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                maxWidth: '800px',
                margin: '0 auto',
                position: 'relative'
            }}>
                {/* SVG Squiggly Line */}
                <svg 
                    width="100" 
                    height={milestones.length * 150 + 100}
                    style={{ 
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        zIndex: 0
                    }}
                >
                    {/* Yellow Squiggly Path */}
                    <path
                        d={generateSquigglyPath()}
                        stroke="#FFD700"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray="1000"
                        strokeDashoffset="1000"
                        style={{
                            animation: 'drawPath 2s ease-out forwards'
                        }}
                    />
                    
                    {/* Spiral decorations along the path */}
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
                                style={{
                                    opacity: visibleItems.includes(index) ? 1 : 0,
                                    transition: 'opacity 0.5s ease',
                                    transformOrigin: `${x}px ${y}px`,
                                    animation: visibleItems.includes(index) ? 'spiral 1s ease-out' : 'none'
                                }}
                            />
                        );
                    })}
                </svg>

                {/* Timeline Items */}
                <div style={{
                    position: 'relative',
                    width: '400px',
                    paddingLeft: '80px',
                    zIndex: 1
                }}>
                    {milestones.map((milestone, index) => {
                        const isVisible = visibleItems.includes(index);
                        const isEven = index % 2 === 0;
                        
                        return (
                            <div
                                key={index}
                                style={{
                                    position: 'relative',
                                    padding: '20px 25px',
                                    margin: '30px 0',
                                    marginLeft: isEven ? '0' : '40px',
                                    marginRight: isEven ? '40px' : '0',
                                    borderRadius: '20px',
                                    backgroundColor: colors[index % colors.length],
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                    minHeight: '80px',
                                    transform: isVisible ? 'translateX(0) scale(1)' : `translateX(${isEven ? '-50px' : '50px'}) scale(0.8)`,
                                    opacity: isVisible ? 1 : 0,
                                    transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    cursor: 'pointer',
                                    overflow: 'hidden'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'scale(1.05)';
                                    e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.25)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'scale(1)';
                                    e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                                }}
                            >
                                {/* Decorative spiral background */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-10px',
                                    right: '-10px',
                                    width: '60px',
                                    height: '60px',
                                    background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                                    borderRadius: '50%',
                                    opacity: 0.1,
                                    transform: isVisible ? 'rotate(360deg) scale(1)' : 'rotate(0deg) scale(0)',
                                    transition: 'all 1s ease-out',
                                    transitionDelay: `${index * 0.1}s`
                                }} />
                                
                                <div style={{
                                    fontSize: '1.8rem',
                                    fontWeight: 'bold',
                                    color: '#2F4F2F',
                                    marginBottom: '8px',
                                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                    opacity: isVisible ? 1 : 0,
                                    transition: 'all 0.5s ease',
                                    transitionDelay: `${index * 0.1 + 0.2}s`
                                }}>
                                    {milestone.year}
                                </div>
                                
                                <div style={{
                                    fontSize: '1.1rem',
                                    color: '#556B2F',
                                    lineHeight: '1.4',
                                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                    opacity: isVisible ? 1 : 0,
                                    transition: 'all 0.5s ease',
                                    transitionDelay: `${index * 0.1 + 0.4}s`
                                }}>
                                    {milestone.event}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @keyframes drawPath {
                    to {
                        stroke-dashoffset: 0;
                    }
                }
                
                @keyframes spiral {
                    0% {
                        transform: rotate(0deg) scale(0);
                    }
                    50% {
                        transform: rotate(180deg) scale(1.2);
                    }
                    100% {
                        transform: rotate(360deg) scale(1);
                    }
                }
            `}</style>
            </div>
        </div>
    );
};

export default TimelineChart;