import React from 'react';
import { projects } from '../../data/projects';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import Button from '../ui/Button';

const Projects: React.FC = () => {
  return (
    <Container id="projects" className="bg-white dark:bg-dark-900">
      <SectionTitle 
        title="My Projects" 
        subtitle="Check out some of my recent work"
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button 
          variant="outline"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          View More on GitHub
        </Button>
      </div>
    </Container>
  );
};

export default Projects;