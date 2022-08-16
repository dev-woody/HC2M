import React from "react";

import { portfolioItem } from "./Contents";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

const Portfolio = ({ setImgZoom, setImgSrc }) => {
  const onImgShow = (src) => {
    setImgZoom(true);
    setImgSrc(src);
    document.body.style.overflow = "hidden";
  };
  return (
    <Fade>
      <div className="container">
        <ul className="project_list">
          {portfolioItem.map((item) => {
            return (
              <li key={item.title}>
                <div className="project_text fadein">
                  <h1>{item.title}</h1>
                  <h2>{item.subTitle}</h2>
                </div>
                <div className="project_img fadein">
                  <Link to="">
                    <img
                      src={item.src}
                      alt="이미지 파일"
                      onClick={(e) => onImgShow(item.src)}
                    />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Fade>
  );
};

export default Portfolio;
