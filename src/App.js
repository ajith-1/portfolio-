import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { CssBaseline, Container } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg" style={{ backgroundColor: '#fff', color: '#000' }}>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Container>
    </>
  );
}

export default App;

