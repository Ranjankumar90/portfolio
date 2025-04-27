import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <motion.div 
      className="mb-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary-600 dark:text-primary-400 font-poppins leading-heading">
        {title}
      </h2>
      {subtitle && (
        <p className="text-dark-600 dark:text-dark-300 max-w-2xl mx-auto font-poppins leading-body">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
    </motion.div>
  );
};

export default SectionTitle;