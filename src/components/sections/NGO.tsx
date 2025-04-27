import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Lightbulb, Globe } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const NGO: React.FC = () => {
  const activities = [
    {
      icon: <Lightbulb className="w-5 h-5 text-primary-500" />,
      title: "Digital Literacy",
      description: "Conducted workshops to teach basic computer skills to underprivileged children."
    },
    {
      icon: <Users className="w-5 h-5 text-primary-500" />,
      title: "Mentorship",
      description: "Mentored high school students interested in pursuing careers in technology."
    },
    {
      icon: <Globe className="w-5 h-5 text-primary-500" />,
      title: "Web Development",
      description: "Developed websites for local non-profit organizations to enhance their online presence."
    }
  ];

  return (
    <Container id="ngo" className="bg-white dark:bg-dark-900">
      <SectionTitle 
        title="Community Involvement" 
        subtitle="Giving back through technology education and support"
      />
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <div className="bg-gray-50 dark:bg-dark-800 rounded-lg p-6 border-l-4 border-primary-500">
            <div className="flex items-center mb-4">
              <Heart className="w-6 h-6 text-primary-500 mr-3" />
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white font-poppins">
                Tech for All Initiative
              </h3>
            </div>
            
            <p className="text-dark-700 dark:text-dark-300 mb-6 leading-body">
              As a volunteer with the Tech for All initiative, I've been working to bridge the digital divide by providing technology education and resources to underserved communities. Our mission is to ensure that everyone has access to the knowledge and tools needed to thrive in today's digital world.
            </p>
            
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div className="mt-1 mr-3">
                    {activity.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-dark-900 dark:text-white mb-1 font-poppins">
                      {activity.title}
                    </h4>
                    <p className="text-sm text-dark-600 dark:text-dark-400 leading-body">
                      {activity.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="order-1 md:order-2"
        >
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-medium">
            <img 
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Community tech workshop" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 text-white">
                <div className="text-xl font-semibold mb-2 font-poppins">Making an Impact</div>
                <p className="text-sm text-gray-200 leading-body">
                  Volunteering at a local community center to teach technology skills.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default NGO;