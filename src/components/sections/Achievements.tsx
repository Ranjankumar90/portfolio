import React from 'react';
import { motion } from 'framer-motion';
import { Award, Medal, Trophy } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const Achievements: React.FC = () => {
  return (
    <Container id="achievements" className="bg-white dark:bg-dark-900">
      <SectionTitle 
        title="Achievement" 
        subtitle="Recognition from my journey in technology"
      />
      
      <motion.div 
        className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl overflow-hidden shadow-hard text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="p-8 md:p-12 relative">
          <div className="absolute top-0 right-0 opacity-10">
            <Trophy size={200} />
          </div>
          
          <div className="relative z-10">
            <div className="mb-6 flex items-center">
              <Medal size={32} className="mr-4" />
              <h3 className="text-2xl md:text-3xl font-bold font-poppins leading-heading">
                GeeksforGeeks Global Rank
              </h3>
            </div>
            
            <p className="text-lg md:text-xl mb-6 max-w-3xl leading-body">
              Secured Global Rank <span className="font-bold">2549</span> out of <span className="font-bold">50,000+</span> participants in the DSA Self-Paced Course by GeeksforGeeks.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <motion.div 
                className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <Award className="mr-3 text-white" />
                <div>
                  <p className="text-sm font-medium">Category</p>
                  <p className="font-semibold">Data Structures & Algorithms</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Trophy className="mr-3 text-white" />
                <div>
                  <p className="text-sm font-medium">Achievement</p>
                  <p className="font-semibold">Top 5% Globally</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Medal className="mr-3 text-white" />
                <div>
                  <p className="text-sm font-medium">Course</p>
                  <p className="font-semibold">16-Week DSA Program</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default Achievements;