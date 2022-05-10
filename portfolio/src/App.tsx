import React from 'react';
import logo from './logo.svg';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className='app-wrapper'>
      <div className='app'>
        <Navbar />
        <Home />
        <Footer />
        
      </div>
      
    </div>
  );
}

export default App;
