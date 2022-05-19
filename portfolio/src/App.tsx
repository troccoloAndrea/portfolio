import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import PageNotFound from './pages/PageNotFound';



function App() {
  return (
      <Router>
      <div className='app-wrapper'>
        <div className='app'>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio/:id" element={<Portfolio/>} />
              <Route path="*" element={<PageNotFound/>}/>
            </Routes>  

          <Footer />
        </div>
        
      </div>
      </Router>
  );
}

export default App;
