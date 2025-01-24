import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IAnimatorProps } from '../types';

const AnimatedSection: React.FC<IAnimatorProps> = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: false, // Allow the animation to trigger every time it's in view
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Reset animation when out of view
            transition={{ duration: 0.9 }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
