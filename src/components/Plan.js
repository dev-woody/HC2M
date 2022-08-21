import React, { useEffect } from "react";
import { Fade } from "react-reveal";

const Plan = ({ setBtnActive }) => {
  useEffect(() => {
    setBtnActive("plan");
  }, [setBtnActive]);

  return (
    <Fade>
      <div className="container" style={{ minHeight: "calc(100vh - 100px)" }}>
        <a
          href="https://map.naver.com/v5/entry/place/1762427665?c=14139029.5974415,4478842.2189251,13,0,0,0,dh&placePath=%2Fhome%3Fentry=plt"
          target="_blank"
        >
          <div id="map" className="map-box"></div>
        </a>
        <section className="contact_contents ">
          <header className="contact_header">
            <h1>CONTACT</h1>
          </header>
          <div className="contact_text">
            <p className="name_en">HC2M. </p>
            <p className="address_en">
              경기 수원시 팔달구 화서문로46번길 16 지하 1층
            </p>
            <p className="address_ja">신풍동 141</p>
            <p className="tel">
              Tel : <a href="tel:01045314384">010-4531-4384</a>
            </p>
            <p className="mail">
              Mail : <a href="mailto:HC2M_CHU@naver.com">HC2M_CHU@naver.com</a>
            </p>
            <p className="mail">
              Instagram :
              <a href="https://instagram.com/hc2m_chu?igshid=YmMyMTA2M2Y=">
                @hc2m_chu
              </a>
            </p>
          </div>
          <div className="btn_googlemap">
            <a
              href="https://map.naver.com/v5/entry/place/1762427665?c=14139574.0370792,4478250.3619441,12.38,0,0,0,dh&placePath=%2Fhome%3Fentry=plt"
              target="_blank"
              rel="noreferrer"
            >
              NAVER MAP
            </a>
          </div>
        </section>
      </div>
    </Fade>
  );
};

export default Plan;
