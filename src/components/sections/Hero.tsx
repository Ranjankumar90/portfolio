import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import { ChevronDown, Github, Linkedin, Mail, FileDown, MapPin } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-dark-900 dark:to-dark-800">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 120,
          particles: {
            color: {
              value: "#6366f1",
            },
            links: {
              color: "#6366f1",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />
      
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="relative">
            <motion.div 
              className="w-64 h-64 md:w-72 md:h-72 rounded-full mx-auto overflow-hidden border-4 border-white dark:border-dark-800 shadow-xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img 
                src="/profile.jpg"
                alt="Ranjan Kumar" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
            >
              <div className="flex items-center gap-1 bg-white dark:bg-dark-800 px-4 py-2 rounded-full shadow-md">
                <MapPin size={16} className="text-primary-500" />
                <span className="text-sm font-medium text-dark-600 dark:text-dark-300">Patna, Bihar</span>
              </div>
            </motion.div>
          </div>
          
          <div className="space-y-4 pt-6">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-dark-900 dark:text-white mb-4 font-poppins leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Ranjan Kumar</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-dark-600 dark:text-dark-300 max-w-2xl mx-auto font-poppins"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Computer Science Student & Developer
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/Ranjankumar90"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-dark-900 dark:bg-dark-700 text-white hover:bg-dark-800 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/ranjankumar95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#0077B5] text-white hover:bg-opacity-90 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="mailto:ranjankrmth143@gmail.com"
                  className="p-3 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <Mail size={24} />
                </motion.a>
              </div>
              
              <div className="flex gap-4">
                <Button href="/resume.pdf" variant="primary" className="gap-2">
                  <FileDown size={20} />
                  Download CV
                </Button>
                <Button href="#projects" variant="outline">
                  View Projects
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-dark-600 dark:text-dark-300"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          y: { duration: 0.5, delay: 1.5 },
          opacity: { duration: 0.5, delay: 1.5 },
        }}
        whileHover={{ y: 5 }}
      >
        <ChevronDown size={30} className="animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;