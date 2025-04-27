import React from 'react';
import { motion } from 'framer-motion';
import { TimelineItem as TimelineItemType } from '../../types';

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex flex-col md:flex-row md:items-center mb-8 md:mb-0 ${isEven ? '' : 'md:flex-row-reverse'}`}>
      <motion.div 
        className={`md:w-1/2 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} mb-4 md:mb-0`}
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium mb-2">
          {item.year}
        </span>
        <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2 font-poppins">
          {item.title}
        </h3>
        <p className="text-dark-600 dark:text-dark-300 leading-body">
          {item.description}
        </p>
      </motion.div>
      
      <motion.div 
        className="hidden md:flex justify-center items-center"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.2 }}
      >
        <div className="w-6 h-6 rounded-full bg-primary-500 dark:bg-primary-400 z-10"></div>
      </motion.div>
      
      <div className="md:w-1/2"></div>
    </div>
  );
};

export default TimelineItem;