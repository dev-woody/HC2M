import React, { useEffect } from "react";
import { Fade } from "react-reveal";

import { portfolioItem } from "./Contents";

const Portfolio = ({ setImgZoom, setImgSrc, setBtnActive }) => {
  const onImgShow = (src) => {
    setImgZoom(true);
    setImgSrc(src);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    setBtnActive("portfolio");
  }, [setBtnActive]);
  return (
    <div className="container">
      <ul className="project_list">
        {portfolioItem.map((item) => {
          return (
            <Fade key={item.title}>
              <li>
                <div className="project_text ">
                  <h1>{item.title}</h1>
                  <h2>{item.subTitle}</h2>
                </div>
                <div className="project_img ">
                  <img
                    src={item.src}
                    alt="이미지 파일"
                    onClick={(e) => onImgShow(item.src)}
                  />
                </div>
              </li>
            </Fade>
          );
        })}
      </ul>
    </div>
  );
};

export default Portfolio;
