import React from 'react';
import { ThemeProvider } from './context/ThemeContext';

// Components
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';
import Achievements from './components/sections/Achievements';
import Education from './components/sections/Education';
import NGO from './components/sections/NGO';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="font-poppins antialiased min-h-screen bg-white dark:bg-dark-900 text-dark-900 dark:text-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Achievements />
          <Education />
          <NGO />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;