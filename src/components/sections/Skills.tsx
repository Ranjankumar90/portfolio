import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Wrench, Brain } from 'lucide-react';
import { skillCategories } from '../../data/skills';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return <Code2 className="w-6 h-6 text-primary-500" />;
      case 'Tools & Frameworks':
        return <Wrench className="w-6 h-6 text-primary-500" />;
      case 'Soft Skills':
        return <Brain className="w-6 h-6 text-primary-500" />;
      default:
        return null;
    }
  };

  return (
    <Container id="skills" className="bg-gray-50 dark:bg-dark-800">
      <SectionTitle 
        title="My Skills" 
        subtitle="Technologies and abilities I've acquired throughout my journey"
      />
      
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div 
            key={categoryIndex}
            className="bg-white dark:bg-dark-900 rounded-lg shadow-medium p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              {getIcon(category.title)}
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white font-poppins">
                {category.title}
              </h3>
            </div>
            
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="p-3 bg-gray-50 dark:bg-dark-800 rounded-lg flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                >
                  <span className="text-dark-800 dark:text-dark-200 font-medium font-poppins">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default Skills;