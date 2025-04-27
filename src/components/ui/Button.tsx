import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button'
}) => {
  const baseStyles = 'inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:shadow-lg hover:shadow-primary-500/25',
    secondary: 'bg-dark-900 text-white hover:bg-dark-800 dark:bg-dark-700 dark:hover:bg-dark-600',
    outline: 'border-2 border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-500 hover:text-white'
  };

  const Component = motion[href ? 'a' : 'button'];
  const props = href ? { href } : { onClick, type };

  return (
    <Component
      {...props}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </Component>
  );
};

export default Button;