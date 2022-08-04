import React from "react";
import { Fade } from "react-reveal";

import { portfolioItem } from "./Contents";

import "../styles/Portfolio.css";

const Portfolio = () => {
  console.log("이미지가 리랜더링 됐습니다");
  return (
    <Fade>
      {portfolioItem ? (
        <div className="PortfolioBlock">
          <div className="main-section">
            {portfolioItem.map((item) => {
              return (
                <Fade>
                  <div key={item.title}>
                    <div className="item">
                      <div className="text-area">{item.title}</div>
                      {/* <div className="img-box">{item.img}</div> */}
                      <div className="img-box">
                        <img
                          src={item.src}
                          className="img-area"
                          alt="이미지 파일"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </Fade>
  );
};

export default Portfolio;
