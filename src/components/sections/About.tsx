import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, FileCode, GraduationCap, Users } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const About: React.FC = () => {
  const keyPoints = [
    {
      icon: <FileCode className="w-6 h-6 text-primary-500" />,
      title: "Software Development",
      description: "Experienced in building web applications and software solutions with modern technologies."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-primary-500" />,
      title: "B.Tech in CS",
      description: "Currently pursuing Computer Science and Engineering at Lovely Professional University with 6.72 CGPA."
    },
    {
      icon: <Laptop className="w-6 h-6 text-primary-500" />,
      title: "Technical Skills",
      description: "Proficient in C++, Java, Python, and various cybersecurity tools including Kali Linux and Wireshark."
    },
    {
      icon: <Users className="w-6 h-6 text-primary-500" />,
      title: "Team Collaboration",
      description: "Strong team player with experience in project management and adaptability to new challenges."
    }
  ];

  return (
    <Container id="about" className="bg-white dark:bg-dark-900">
      <SectionTitle 
        title="About Me" 
        subtitle="Get to know me and my background"
      />
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Coding Environment" 
            className="rounded-lg shadow-medium w-full h-[400px] object-cover"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-dark-900 dark:text-white font-poppins leading-heading">
            Computer Science Student & Developer
          </h3>
          
          <p className="text-dark-700 dark:text-dark-300 mb-6 leading-body">
            I'm a passionate B.Tech Computer Science student at Lovely Professional University with a keen interest in software development and cybersecurity. My journey in technology began with programming in C++ and has since expanded to include various languages and security tools.
          </p>
          
          <p className="text-dark-700 dark:text-dark-300 mb-6 leading-body">
            I enjoy solving complex problems and building innovative solutions. Beyond academics, I've completed various certifications, including CompTIA Linux+ training and Ethical Hacking Essentials by EC-Council, demonstrating my commitment to continuous learning and growth in technology.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {keyPoints.map((point, index) => (
              <motion.div 
                key={index}
                className="flex items-start p-4 bg-gray-50 dark:bg-dark-800 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 mr-3 mt-1">
                  {point.icon}
                </div>
                <div>
                  <h4 className="font-medium text-dark-900 dark:text-white mb-1 font-poppins">
                    {point.title}
                  </h4>
                  <p className="text-sm text-dark-600 dark:text-dark-400 leading-body">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default About;