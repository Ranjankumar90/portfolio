import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-medium hover:shadow-hard transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2 font-poppins">
          {project.title}
        </h3>
        <p className="text-dark-600 dark:text-dark-300 mb-4 text-sm leading-body">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline"
          >
            View Project <ExternalLink size={16} className="ml-1" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;