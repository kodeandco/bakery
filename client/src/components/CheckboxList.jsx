import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './CheckboxList.css';

const CheckboxList = ({ options }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCheckboxChange = (option) => {
        setSelectedOptions((prev) =>
            prev.includes(option)
                ? prev.filter((item) => item !== option)
                : [...prev, option]
        );
    };

    return (
        <div className="checkbox-list">
            {options.map((option) => (
                <motion.label
                    key={option}
                    className="checkbox-item"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <input
                        type="checkbox"
                        checked={selectedOptions.includes(option)}
                        onChange={() => handleCheckboxChange(option)}
                    />
                    {option}
                </motion.label>
            ))}
        </div>
    );
};

export default CheckboxList;