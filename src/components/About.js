import React, { useEffect } from "react";
import { Fade } from "react-reveal";

import "../styles/About.css";

const About = ({ btnActive, setBtnActive }) => {
  useEffect(() => {
    setBtnActive("about");
    console.log("리랜더링");
  }, [btnActive]);
  return (
    <div className="container">
      <section className="about_hero hero fadein">
        <a
          href="https://m.blog.naver.com/PostView.naver?blogId=issue7177&logNo=222563237193&proxyReferer="
          target="_blank"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/interview2X.jpg"}
            style={{ width: "100%", height: "auto" }}
          />
        </a>
      </section>
      <section className="about_contents">
        <header className="about_header fadein">
          <h1>ABOUT US</h1>
        </header>
        <div className="about_text fadein">
          <p className="en">HC2M 인테리어입니다.</p>
          <p className="ja">공간에서 전하는 위로와 행복</p>
        </div>
      </section>
    </div>
  );
};

export default About;
