import React, {
  useState,
  useLayoutEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/Layout.css";
import { Fade } from "react-reveal";

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
  position: sticky;
  top: 0;
  left: 0;
  z-index: 101;
  width: 100%;
  height: 10vh;
  transition: 0.5s ease-in-out;
  background-color: #fff;
  opacity: 1;
  &.hide {
    /* transform: translateY(-5rem); */
    opacity: 0;
  }
`;

const Layout = () => {
  const [btnActive, setBtnActive] = useState("");
  const [isMenuShow, setIsMenuShow] = useState(false);

  const onToggleActive = useCallback(
    () => (e) => {
      setBtnActive(e.target.name);
    },
    []
  );

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
    <Fade>
      <div className={isMenuShow ? "LayoutBlock-mobile" : "LayoutBlock"}>
        <HeaderWrap className={isMenuShow ? null : hide && "hide"}>
          <header className="App-Header">
            <div className="Logo-Area">
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                to="/portfolio"
                onClick={() => setIsMenuShow(false)}
              >
                HC2M
              </Link>
            </div>
            <div className="App-Menu">
              <Link
                className={
                  "Menu-Button" + (btnActive === "portfolio" ? " active" : "")
                }
                name="portfolio"
                onClick={onToggleActive}
                to="/portfolio"
              >
                PORTFOLIO
              </Link>
              <Link
                className={
                  "Menu-Button" + (btnActive === "about" ? " active" : "")
                }
                name="about"
                onClick={onToggleActive}
                to="/about"
              >
                ABOUT
              </Link>
              <Link
                className={
                  "Menu-Button" + (btnActive === "contact" ? " active" : "")
                }
                name="contact"
                onClick={onToggleActive}
                to="/contact"
              >
                CONTACT
              </Link>
              <Link
                className={
                  "Menu-Button" + (btnActive === "plan" ? " active" : "")
                }
                name="plan"
                onClick={onToggleActive}
                to="/plan"
              >
                PLAN
              </Link>
            </div>
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
        <div
          className={isMenuShow ? "default-contant-show" : "default-contant"}
        >
          <main>
            <Outlet />
          </main>
          <footer className="App-Footer">
            Copyrights HC2M, All rights reserved.
          </footer>
        </div>
      </div>
    </Fade>
  );
};

export default Layout;
