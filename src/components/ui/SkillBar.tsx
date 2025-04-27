import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../types';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  const percentage = (skill.level / 5) * 100;
  
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-dark-800 dark:text-dark-200 font-medium font-poppins">
          {skill.name}
        </span>
        <span className="text-sm text-dark-500 dark:text-dark-400">
          {skill.level}/5
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5">
        <motion.div 
          className="h-2.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        />
      </div>
    </div>
  );
};

export default SkillBar;