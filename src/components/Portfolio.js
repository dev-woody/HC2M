import React, { useEffect } from "react";

import { portfolioItem } from "./Contents";

const Portfolio = ({ setImgZoom, setImgSrc, btnActive, setBtnActive }) => {
  const onImgShow = (src) => {
    setImgZoom(true);
    setImgSrc(src);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    setBtnActive("portfolio");
    console.log("리랜더링");
  }, [btnActive]);
  return (
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
                <img
                  src={item.src}
                  alt="이미지 파일"
                  onClick={(e) => onImgShow(item.src)}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Portfolio;
