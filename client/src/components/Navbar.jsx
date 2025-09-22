import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <motion.div 
                className="brand"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1>Channel9 Bakery</h1>
            </motion.div>
            <ul className="nav-links">
                <motion.li 
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <a href="#home">Home</a>
                </motion.li>
                <motion.li 
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <a href="#about">About</a>
                </motion.li>
                <motion.li 
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <a href="#menu">Menu</a>
                </motion.li>
                <motion.li 
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <a href="#contact">Contact</a>
                </motion.li>
            </ul>
        </nav>
    );
};

export default Navbar;