import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github as GitHub, Send } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const Contact: React.FC = () => {
  return (
    <Container id="contact" className="bg-gray-50 dark:bg-dark-800">
      <SectionTitle 
        title="Get In Touch" 
        subtitle="Have a question or want to work together? Send me a message!"
      />
      
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-dark-900 dark:text-white font-poppins leading-heading">
            Let's Connect
          </h3>
          
          <p className="text-dark-700 dark:text-dark-300 mb-8 leading-body">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through the form or via my contact information.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <p className="text-sm text-dark-500 dark:text-dark-400">Email</p>
                <p className="text-dark-900 dark:text-white font-medium">ranjankrmth143@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <p className="text-sm text-dark-500 dark:text-dark-400">Phone</p>
                <p className="text-dark-900 dark:text-white font-medium">+91-9504076357</p>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <motion.a 
              href="https://linkedin.com/in/ranjankumar95" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#0077B5] flex items-center justify-center text-white hover:bg-opacity-90 transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
            </motion.a>
            
            <motion.a 
              href="https://github.com/Ranjankumar90" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#333] flex items-center justify-center text-white hover:bg-opacity-90 transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <GitHub size={20} />
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form className="bg-white dark:bg-dark-900 rounded-lg shadow-medium p-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-dark-700 dark:text-dark-300 mb-2 font-medium">
                Name
              </label>
              <input 
                type="text" 
                id="name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-dark-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-800 dark:text-white"
                placeholder="Your name"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-dark-700 dark:text-dark-300 mb-2 font-medium">
                Email
              </label>
              <input 
                type="email" 
                id="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-dark-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-800 dark:text-white"
                placeholder="Your email"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block text-dark-700 dark:text-dark-300 mb-2 font-medium">
                Subject
              </label>
              <input 
                type="text" 
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 dark:border-dark-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-800 dark:text-white"
                placeholder="Subject"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-dark-700 dark:text-dark-300 mb-2 font-medium">
                Message
              </label>
              <textarea 
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-dark-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-800 dark:text-white resize-none"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <Button type="submit" className="w-full justify-center">
              Send Message
              <Send size={16} className="ml-2" />
            </Button>
          </form>
        </motion.div>
      </div>
    </Container>
  );
};

export default Contact;