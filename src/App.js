import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Algorithms, Cryptography, Computability } from "./pages";
import { Navbar, Footer } from "./components";
import "./index.css";

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}`}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/theory-vis/about" element={<About />} /> */}
        <Route exact path="/algorithms" element={<Algorithms />} />
        <Route exact path="/computability" element={<Computability />} />
        <Route exact path="/cryptography" element={<Cryptography />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
