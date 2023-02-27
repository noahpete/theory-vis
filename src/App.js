import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Algorithms, Cryptography, Computability } from "./pages";
import { Navbar, Footer } from "./components";
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/theory-vis" element={<Home />} />
        {/* <Route path="/theory-vis/about" element={<About />} /> */}
        <Route path="/theory-vis/algorithms" element={<Algorithms />} />
        <Route path="/theory-vis/computability" element={<Computability />} />
        <Route path="/theory-vis/cryptography" element={<Cryptography />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
