import React from 'react';
import { motion } from 'framer-motion';
import { Award, Download } from 'lucide-react';
import { Certificate } from '../../types';

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  return (
    <motion.div 
      className="relative bg-white dark:bg-dark-800 rounded-lg shadow-medium p-6 h-full"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8 }}
    >
      <div className="absolute top-4 right-4 flex gap-2">
        <Award className="text-primary-500 h-6 w-6" />
        <a 
          href={`/certificates/${certificate.id}.pdf`}
          download
          className="text-primary-500 hover:text-primary-600 transition-colors"
        >
          <Download className="h-6 w-6" />
        </a>
      </div>
      <div className="mb-4 h-32 overflow-hidden rounded-md">
        <img 
          src={certificate.image} 
          alt={certificate.title} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-dark-900 dark:text-white font-poppins">
        {certificate.title}
      </h3>
      <div className="flex justify-between items-center text-sm text-dark-500 dark:text-dark-400">
        <span>{certificate.issuer}</span>
        <span>{certificate.date}</span>
      </div>
    </motion.div>
  );
};

export default CertificateCard;