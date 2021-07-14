import React, {useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar/index"
import Sidebar from "./components/Sidebar/index"
import HeroSection from "./components/Sections/HeroSection"
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return <>
    
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection/>
     
      </Router>
  </>
}

export default App;

// npm install react-router-dom
// npm install react-icons
// npm install react-scroll
// npm install styled-components