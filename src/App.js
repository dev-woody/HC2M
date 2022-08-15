import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HC2M_logo_png from "./HC2M_logo.png";

import Layout from "./components/Layout";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Plan from "./components/Plan";

import "./styles/App.css";
const App = () => {
  const [loading, setLoading] = useState(true);
  const [imgZoom, setImgZoom] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [setLoading]);

  const onImgHidden = () => {
    setImgZoom(false);
    document.body.style.overflow = "unset";
  };
  return (
    <div className="App">
      <div className={"App-logo" + (loading ? " logoShow" : "")}>
        <img className="Logo-box" src={HC2M_logo_png} />
      </div>
      <Routes>
        {/* <Route path="/" element={<SplashScreen />} /> */}
        <Route path="/" element={<Layout />}>
          <Route
            path="/portfolio"
            element={
              <Portfolio
                setImgZoom={setImgZoom}
                setImgSrc={setImgSrc}
                loading={loading}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/plan" element={<Plan />} />
        </Route>
      </Routes>
      <div
        className={"imgZoom-box" + (imgZoom ? " imgActive" : "")}
        onClick={onImgHidden}
      >
        <img src={imgSrc} className="ZoomImg" alt="이미지" />
      </div>
    </div>
  );
};

export default App;
