import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { education } from '../../data/education';
import { timelineItems } from '../../data/timeline';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import TimelineItem from '../ui/TimelineItem';

const Education: React.FC = () => {
  return (
    <Container id="education" className="bg-gray-50 dark:bg-dark-800">
      <SectionTitle 
        title="Education & Timeline" 
        subtitle="My academic journey and key milestones"
      />
      
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {education.map((edu, index) => (
          <motion.div 
            key={index}
            className="bg-white dark:bg-dark-900 rounded-lg shadow-medium p-6"
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-dark-900 dark:text-white font-poppins">
              {edu.institution}
            </h3>
            <h4 className="text-lg text-primary-600 dark:text-primary-400 mb-4 font-poppins">
              {edu.degree} in {edu.field}
            </h4>
            
            <div className="flex items-center text-dark-600 dark:text-dark-400 mb-2">
              <Calendar size={16} className="mr-2" />
              <span>{edu.startYear} - {edu.endYear}</span>
            </div>
            
            <div className="flex items-center text-dark-600 dark:text-dark-400">
              <MapPin size={16} className="mr-2" />
              <span>{edu.location}</span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <h3 className="text-2xl font-semibold mb-8 text-center text-dark-900 dark:text-white font-poppins leading-heading">
        Journey Timeline
      </h3>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-200 dark:bg-primary-800 transform -translate-x-1/2"></div>
        
        <div className="space-y-8">
          {timelineItems.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Education;