// src/App.js
import React from 'react';
import Navbar from './components/NavBar';
import Heroes from './components/Heroes';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="pt-16"> {/* Adds padding to avoid content being hidden behind the navbar */}
          <Heroes />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </Router>
  );
}

export default App;
