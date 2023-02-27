import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Algorithms, Cryptography, Computability } from "pages";
import { Navbar, Footer } from "./components";
import "./index.css";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/algorithms" element={<Algorithms />} />
        <Route path="/computability" element={<Computability />} />
        <Route path="/cryptography" element={<Cryptography />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
