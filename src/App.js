import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Algorithms, Cryptography, Computability } from "pages";
import { Navbar, Footer } from "./components";
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/algorithms" element={<Algorithms />} />
        <Route path="/computability" element={<Computability />} />
        <Route path="/cryptography" element={<Cryptography />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
