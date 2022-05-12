import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ContextWrapper from './ContextWrapper';



function App() {
  return (
    <ContextWrapper>
      <Router>
      <div className='app-wrapper'>
        <div className='app'>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio/:id" element={<Portfolio/>} />
            </Routes>  

          <Footer />
        </div>
        
      </div>
      </Router>
    </ContextWrapper>
  );
}

export default App;
