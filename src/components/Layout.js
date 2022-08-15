import React, { useState, useLayoutEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/Layout.css";
import HC2M_logo_png from "../HC2M_logo.png";

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

  const onToggle = useCallback(
    () => (e) => {
      setIsMenuShow(!isMenuShow);
    },
    []
  );

  const [hide, setHide] = useState(false);
  const [pageY, setPageY] = useState(0);
  const documentRef = useRef(document);

  const handleScroll = () => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const hide = pageYOffset !== 0 && deltaY >= 0;
    setHide(hide);
    setPageY(pageYOffset);
  };

  const throttleScroll = throttle(handleScroll, 50);

  useLayoutEffect(() => {
    documentRef.current.addEventListener("scroll", throttleScroll);
    return () =>
      documentRef.current.removeEventListener("scroll", throttleScroll);
  }, [pageY]);

  return (
    <div className={isMenuShow ? "LayoutBlock-mobile" : "LayoutBlock"}>
      <HeaderWrap className={isMenuShow ? null : hide && "hide"}>
        <header className="App-Header">
          <h1 className="Logo-Area">
            <Link
              className="Logo-Area_Btn"
              to="/portfolio"
              onClick={() => setIsMenuShow(false)}
            >
              <img className="Logo-Area-img" src={HC2M_logo_png} />
            </Link>
          </h1>
          <nav className="nav-box">
            <ul>
              <li className={btnActive === "portfolio" ? " active" : ""}>
                <Link name="portfolio" onClick={onToggleActive} to="/portfolio">
                  PORTFOLIO
                </Link>
              </li>
              <li className={btnActive === "about" ? " active" : ""}>
                <Link name="about" onClick={onToggleActive} to="/about">
                  ABOUT
                </Link>
              </li>
              <li className={btnActive === "contact" ? " active" : ""}>
                <Link name="contact" onClick={onToggleActive} to="/contact">
                  CONTACT
                </Link>
              </li>
              <li className={btnActive === "plan" ? " active" : ""}>
                <Link name="plan" onClick={onToggleActive} to="/plan">
                  PLAN
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header-button" onClick={onToggle}>
            <FontAwesomeIcon icon={isMenuShow ? faXmark : faBars} />
          </div>
        </header>
      </HeaderWrap>
      <div className={isMenuShow ? "Toggle-Menu-Show" : "Toggle-Menu"}>
        <div className="mobile-menu">
          <Link
            className="mobile-Menu-Button"
            name="portfolio"
            onClick={() => setIsMenuShow(false)}
            to="/portfolio"
          >
            PORTFOLIO
          </Link>
          <Link
            className="mobile-Menu-Button"
            name="about"
            onClick={() => setIsMenuShow(false)}
            to="/about"
          >
            ABOUT
          </Link>
          <Link
            className="mobile-Menu-Button"
            name="contact"
            onClick={() => setIsMenuShow(false)}
            to="/contact"
          >
            CONTACT
          </Link>
          <Link
            className="mobile-Menu-Button"
            name="plan"
            onClick={() => setIsMenuShow(false)}
            to="/plan"
          >
            PLAN
          </Link>
        </div>
      </div>
      <div className={isMenuShow ? "default-contant-show" : "default-contant"}>
        <main>
          <Outlet />
        </main>
        <footer className="App-Footer">
          Copyrights HC2M, All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Layout;
