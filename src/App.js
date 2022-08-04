import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Plan from "./components/Plan";
import SplashScreen from "./components/SplashScreen";

import "./styles/App.css";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/" element={<Layout />}>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/plan" element={<Plan />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
