import React from 'react';

import Header from '../../components/Header';
import Presentation from '../../components/Presentation';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import AnimatedBackground from '../../components/AnimatedBackground';

const Home = () => {

  return (
    <div id="home">
      <AnimatedBackground />
      <Header />
      <Presentation id="home" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}

export default Home;
