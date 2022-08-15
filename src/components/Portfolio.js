import React from "react";
import { Fade } from "react-reveal";

import { portfolioItem } from "./Contents";

import "../styles/Portfolio.css";

const Portfolio = ({ setImgZoom, setImgSrc, loading }) => {
  const onImgShow = (src) => {
    setImgZoom(true);
    setImgSrc(src);
    document.body.style.overflow = "hidden";
  };
  return (
    <Fade>
      <div className="PortfolioBlock">
        <ul className={"protfolio-list" + (loading ? "" : " loading-finish")}>
          {portfolioItem.map((item) => {
            return (
              <Fade>
                <li key={item.title} className="item">
                  <div className="protfolio-text">
                    <h1 className="text-main-title">{item.title}</h1>
                    <h2 className="text-sub-title">{item.subTitle}</h2>
                  </div>
                  <div className="protfolio-img">
                    <div className="img-box">
                      <img
                        src={item.src}
                        className="img-area"
                        alt="이미지 파일"
                        loading="lazy"
                        onClick={(e) => onImgShow(item.src)}
                      />
                    </div>
                  </div>
                </li>
              </Fade>
            );
          })}
        </ul>
      </div>
    </Fade>
  );
};

export default Portfolio;
