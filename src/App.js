import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import $ from "jquery";

import Layout from "./components/Layout";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Plan from "./components/Plan";
import { portfolioItem } from "./components/Contents";

import "./styles/App.css";
const App = () => {
  const [imgZoom, setImgZoom] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [btnActive, setBtnActive] = useState("portfolio");
  const onImgHidden = () => {
    setImgZoom(false);
    document.body.style.overflow = "unset";
  };

  const onResize = () => {
    $(window).resize(function () {
      var windowWidth = window.innerWidth;
      if (windowWidth > 768) {
        $("#global-nav").css("display", "table");
        document.body.style.overflow = "hidden";
      } else if (windowWidth < 769) {
        $("#global-nav").css("display", "none");
        document.body.style.overflow = "unset";
      }
    });
  };

  useEffect(() => {
    $(".intro_hero h1")
      .stop()
      .animate({ opacity: 1 }, 1600, "swing", function () {
        $(".intro_hero")
          .stop()
          .animate({ opacity: 0 }, 1000, "swing", function () {
            $(".intro_hero").css("display", "none");
            $(".index_container").stop().animate({ opacity: 1 }, 1000, "swing");
          });
      });
  }, []);

  useEffect(() => {
    onResize();
  }, []);

  var startPos = 0;
  $(window).scroll(function () {
    var currentPos = $(this).scrollTop();
    if (currentPos > startPos) {
      if ($(window).scrollTop() >= 50) {
        $("#header").css({
          animation:
            "fadeout 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards",
        }); //"top": "-" + menuHeight + "px",
      }
    } else {
      $("#header").css({
        animation:
          "fadein 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards",
      }); //.css("top", 0 + "px");
    }
    startPos = currentPos;
  });

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
                  setBtnActive={setBtnActive}
                />
              }
            />
            <Route
              path="/about"
              element={<About setBtnActive={setBtnActive} />}
            />
            <Route
              path="/contact"
              element={<Contact setBtnActive={setBtnActive} />}
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
      {portfolioItem.map((item) => {
        <img
          key={item.title}
          src={item.src}
          alt="이미지"
          width={1}
          height={1}
        ></img>;
      })}
    </>
  );
};

export default App;
