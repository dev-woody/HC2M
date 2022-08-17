import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";

const Plan = ({ setBtnActive }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setBtnActive("plan");
  }, [setBtnActive]);

  useEffect(() => {
    setLoading(false);
  });
  return (
    <>
      {loading ? null : (
        <Fade>
          <div
            className="container"
            style={{ minHeight: "calc(100vh - 100px)" }}
          >
            <iframe
              title="googleMap"
              className=""
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6349.242629700315!2d127.114659!3d37.280406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e86ddd50d192bb7!2z6riw7Z2l6rWs7LKt!5e0!3m2!1sko!2skr!4v1660647566308!5m2!1sko!2skr"
              styles={{ border: 0 }}
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
                  Mail :{" "}
                  <a href="mailto:HC2M_CHU@naver.com">HC2M_CHU@naver.com</a>
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
      )}
    </>
  );
};

export default Plan;
