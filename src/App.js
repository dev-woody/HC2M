import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Plan from "./components/Plan";

import "./styles/App.css";
const App = () => {
  const [imgZoom, setImgZoom] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [btnActive, setBtnActive] = useState("portfolio");
  const onImgHidden = () => {
    setImgZoom(false);
    document.body.style.overflow = "unset";
  };
  return (
    <>
      <div className="App">
        <div className="intro_hero">
          <h1></h1>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <Layout btnActive={btnActive} setBtnActive={setBtnActive} />
            }
          >
            <Route
              path="/portfolio"
              element={
                <Portfolio
                  setImgZoom={setImgZoom}
                  setImgSrc={setImgSrc}
                  btnActive={btnActive}
                  setBtnActive={setBtnActive}
                />
              }
            />
            <Route
              path="/"
              element={
                <Portfolio
                  setImgZoom={setImgZoom}
                  setImgSrc={setImgSrc}
                  btnActive={btnActive}
                  setBtnActive={setBtnActive}
                />
              }
            />
            <Route
              path="/about"
              element={
                <About btnActive={btnActive} setBtnActive={setBtnActive} />
              }
            />
            <Route
              path="/contact"
              element={
                <Contact btnActive={btnActive} setBtnActive={setBtnActive} />
              }
            />
            <Route
              path="/plan"
              element={
                <Plan btnActive={btnActive} setBtnActive={setBtnActive} />
              }
            />
          </Route>
        </Routes>
        <div
          className={"imgZoom-box" + (imgZoom ? " imgActive" : "")}
          onClick={onImgHidden}
        >
          <img src={imgSrc} className="ZoomImg" alt="이미지" />
        </div>
      </div>
    </>
  );
};

export default App;
