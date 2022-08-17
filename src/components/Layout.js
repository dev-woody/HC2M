import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import $ from "jquery";

const Layout = ({ btnActive, setBtnActive }) => {
  const onToggleActive = (e) => {
    setBtnActive(e.target.name);
    var windowWidth = $(window).width();
    if (windowWidth < 769) {
      $("#sp-menu").removeClass("open");
      $("#global-nav").css("display", "none");
      document.body.style.overflow = "unset";
    }
  };

  const onClickIcon = () => {
    $("#sp-menu").toggleClass("open");
    if ($("#sp-menu").hasClass("open")) {
      $("#global-nav").css("display", "table");
      document.body.style.overflow = "hidden";
    } else {
      $("#global-nav").css("display", "none");
      document.body.style.overflow = "unset";
    }
  };
  return (
    <div className="index_container">
      <header className="" id="header">
        <h1>
          <Link
            name="portfolio"
            to="/portfolio"
            onClick={onToggleActive}
          ></Link>
        </h1>
        <nav className="" id="global-nav">
          <ul>
            <li id="menu-btn" className={btnActive === "portfolio" ? "on" : ""}>
              <Link name="portfolio" onClick={onToggleActive} to="/portfolio">
                {btnActive === "portfolio" ? (
                  <span>PORTFOLIO</span>
                ) : (
                  "PORTFOLIO"
                )}
              </Link>
            </li>
            <li id="menu-btn" className={btnActive === "about" ? "on" : ""}>
              <Link name="about" onClick={onToggleActive} to="/about">
                {btnActive === "about" ? <span>ABOUT</span> : "ABOUT"}
              </Link>
            </li>
            <li id="menu-btn" className={btnActive === "contact" ? "on" : ""}>
              <Link name="contact" onClick={onToggleActive} to="/contact">
                {btnActive === "contact" ? <span>CONTACT</span> : "CONTACT"}
              </Link>
            </li>
            <li id="menu-btn" className={btnActive === "plan" ? "on" : ""}>
              <Link name="plan" onClick={onToggleActive} to="/plan">
                {btnActive === "plan" ? <span>PLAN</span> : "PLAN"}
              </Link>
            </li>
          </ul>
        </nav>
        <div id="sp-menu" onClick={onClickIcon}></div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="" id="footer">
        <p className="copyright">
          <small>Copyrights HC2M, All rights reserved.</small>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
