import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <WhatsAppFloat />
    </div>
  );
}

export default App;

