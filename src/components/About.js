import React, { useEffect } from "react";
import { Fade } from "react-reveal";

const About = ({ setBtnActive }) => {
  useEffect(() => {
    setBtnActive("about");
  }, [setBtnActive]);

  return (
    <Fade>
      <div className="container">
        <section className="about_hero hero ">
          <a
            href="https://m.blog.naver.com/PostView.naver?blogId=issue7177&logNo=222563237193&proxyReferer="
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={process.env.PUBLIC_URL + "/images/interview2x.jpg"}
              style={{ width: "100%", height: "auto" }}
              alt="이미지"
            />
          </a>
        </section>
        <section className="about_contents">
          <header className="about_header ">
            <h1>ABOUT US</h1>
          </header>
          <div className="about_text ">
            <p className="en">HC2M 인테리어입니다.</p>
            <p className="ja">공간에서 전하는 위로와 행복</p>
          </div>
        </section>
      </div>
    </Fade>
  );
};

export default About;
