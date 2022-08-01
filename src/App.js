import AppNavbar from './components/AppNavbar';
import Banner from './components/Banner'
import Skills from './components/Skills'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import React from 'react';

import './App.css';

function App() {
  return (
    <Router>
    <AppNavbar/>
          
            <Container>
              <Routes>
            <Route path="/" element={<Banner/>}/>
            <Route path="/aboutme" element={<AboutMe/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contactme" element={<ContactMe/>}/>
            <Route path="*" element={<Banner/>}/>


              </Routes>
          </Container>
        </Router>

  );
}

export default App;
