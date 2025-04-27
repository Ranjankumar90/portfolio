import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '', id }) => {
  return (
    <section 
      id={id}
      className={`py-16 md:py-24 px-4 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Container;