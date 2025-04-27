import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { certificates } from '../../data/certificates';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import CertificateCard from '../ui/CertificateCard';

const Certificates: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextCertificate = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevCertificate = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <Container id="certificates" className="bg-gray-50 dark:bg-dark-800">
      <SectionTitle 
        title="Certificates" 
        subtitle="Professional certifications and achievements"
      />
      
      {/* Mobile Carousel */}
      <div className="md:hidden relative">
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <CertificateCard certificate={certificates[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center mt-4 space-x-4">
          <button 
            onClick={prevCertificate}
            className="p-2 rounded-full bg-white dark:bg-dark-900 shadow-soft hover:bg-gray-100 dark:hover:bg-dark-700"
            aria-label="Previous certificate"
          >
            <ChevronLeft size={20} className="text-dark-700 dark:text-dark-300" />
          </button>
          <button 
            onClick={nextCertificate}
            className="p-2 rounded-full bg-white dark:bg-dark-900 shadow-soft hover:bg-gray-100 dark:hover:bg-dark-700"
            aria-label="Next certificate"
          >
            <ChevronRight size={20} className="text-dark-700 dark:text-dark-300" />
          </button>
        </div>
      </div>
      
      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-8">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </Container>
  );
};

export default Certificates;