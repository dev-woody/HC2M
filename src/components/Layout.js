import React, { useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import "../styles/Layout.css";

const throttle = function (callback, waitTime) {
  let timerId = null;
  return (e) => {
    if (timerId) return;
    timerId = setTimeout(() => {
      callback.call(this, e);
      timerId = null;
    }, waitTime);
  };
};

const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  transition: 0.5s ease-in-out;
  opacity: 1;
  &.hide {
    opacity: 0;
  }
`;

const Layout = () => {
  const [btnActive, setBtnActive] = useState("portfolio");
  const [isMenuShow, setIsMenuShow] = useState(false);

  const onToggleActive = (e) => {
    setBtnActive(e.target.name);
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
            <li className={btnActive === "portfolio" ? " on" : ""}>
              <Link name="portfolio" onClick={onToggleActive} to="/portfolio">
                PORTFOLIO
              </Link>
            </li>
            <li className={btnActive === "about" ? " on" : ""}>
              <Link name="about" onClick={onToggleActive} to="/about">
                ABOUT
              </Link>
            </li>
            <li className={btnActive === "contact" ? " on" : ""}>
              <Link name="contact" onClick={onToggleActive} to="/contact">
                CONTACT
              </Link>
            </li>
            <li className={btnActive === "plan" ? " on" : ""}>
              <Link name="plan" onClick={onToggleActive} to="/plan">
                PLAN
              </Link>
            </li>
          </ul>
        </nav>
        <div id="sp-menu"></div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="" id="footer">
        <p className="copyright">Copyrights HC2M, All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
