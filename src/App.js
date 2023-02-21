import React from 'react'
import { Home, About, Algorithms, Crypto } from './pages';
import { Navbar, Footer } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/algorithms" element={<Algorithms />} />
        <Route path="/cryptography" element={<Crypto />} />
      </Routes>
      <Footer />
    </Router>
  );
}
 
export default App;