import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Weather from "./components/Weather";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import Home from "./components/Home";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>Farmer's Weather Companion</h1>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/weather">Weather</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/about">Contact Us</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
