import React from 'react';
import { IButtonProps } from '../types';
import { motion } from 'framer-motion';

const Button: React.FC<IButtonProps> = ({ className, onClick, children }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={`px-4 py-2 rounded-md ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
