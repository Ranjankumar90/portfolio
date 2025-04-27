import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C++', level: 5 },
      { name: 'Java', level: 4 },
      { name: 'Python', level: 4 },
      { name: 'Bash', level: 3 },
    ],
  },
  {
    title: 'Tools & Frameworks',
    skills: [
      { name: 'MySQL', level: 4 },
      { name: 'Kali Linux', level: 4 },
      { name: 'Nmap', level: 4 },
      { name: 'Wireshark', level: 4 },
      { name: 'Git/GitHub', level: 4 },
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', level: 5 },
      { name: 'Team Player', level: 4 },
      { name: 'Project Management', level: 4 },
      { name: 'Adaptability', level: 4 },
    ],
  },
];