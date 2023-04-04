import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Algorithms,
  Cryptography,
  Complexity,
  Computability,
} from "./pages";
import { Navbar, Footer } from "./components";
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/algorithms" element={<Algorithms />} />
        <Route exact path="/computability" element={<Computability />} />
        <Route exact path="/complexity" element={<Complexity />} />
        <Route exact path="/cryptography" element={<Cryptography />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
