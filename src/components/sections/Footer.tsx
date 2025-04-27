import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-primary-400 font-poppins">Ranjan Kumar</h2>
            <p className="text-dark-400 mt-1">Computer Science Student & Developer</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#about" className="text-dark-300 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-dark-300 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-dark-300 hover:text-white transition-colors">Contact</a>
            </div>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-primary-600 hover:bg-primary-700 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-dark-700 mt-6 pt-6 text-center md:text-left text-dark-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Ranjan Kumar. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;