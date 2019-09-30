import React from 'react';
import './App.css';
import NavBar from './Components/Functions/Navbar'
import Routes from './Components/Functions/Routes'
import { BrowserRouter as Router } from "react-router-dom";



function App() {
  return (
  <Router>
    <NavBar/>
    <Routes/>
  </Router>


  );
}

export default App;
