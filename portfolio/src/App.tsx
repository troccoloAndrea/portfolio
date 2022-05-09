import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';

function App() {
  return (
    <div className='app-wrapper'>
      <div className='app'>
        <Navbar />
        <h1>ciao</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
