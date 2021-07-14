import React from 'react';
import './App.css';
// import Navbar from "./components/Navbar/index"
// import Sidebar from "./components/Sidebar/index"
// import HeroSection from "./components/Sections/HeroSection"
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages';

function App() {

  return <>

    <Router>
      <Home />

    </Router>
  </>
}

export default App;

// npm install react-router-dom
// npm install react-icons
// npm install react-scroll
// npm install styled-components