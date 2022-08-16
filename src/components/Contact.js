import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";

import "../styles/Contact.css";

const infoSubBox = {
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  marginBottom: "1rem",
  marginRight: "1rem",
};

const textSize = {
  fontSize: "1.25rem",
  letterSpacing: "2px",
  marginBottom: "1rem",
};

const textArea = {
  width: "100%",
  height: "300px",
  resize: "none",
  fontSize: "1.25rem",
  border: "1px solid #000",
  boxSizing: "border-box",
  borderRadius: "5px",
};

const Contact = ({ btnActive, setBtnActive }) => {
  const [userName, setUserName] = useState("");
  const [phoneNb, setPhoneNb] = useState("");
  const [inquiry, setInquiry] = useState("");
  useEffect(() => {
    setBtnActive("contact");
    console.log("리랜더링");
  }, [btnActive]);
  return (
    <Fade>
      <div className="container">
        <form className="Contact-Form">
          <div className="fade">
            <div className="info-text">
              <div style={infoSubBox}>
                <div style={textSize}>성함</div>
                <input
                  className="input-area"
                  type="text"
                  onChange={(e) => setUserName(e.currentTarget.value)}
                ></input>
              </div>
              <div style={infoSubBox}>
                <div style={textSize}>연락처</div>
                <input
                  className="input-area"
                  type="number"
                  onChange={(e) => setPhoneNb(e.currentTarget.value)}
                ></input>
              </div>
            </div>
            <div style={infoSubBox}>
              <div style={textSize}>문의내용</div>
              <textarea
                style={textArea}
                onChange={(e) => setInquiry(e.currentTarget.value)}
              ></textarea>
            </div>
            <div style={infoSubBox}>
              <a
                className="send-button"
                href={
                  "mailto:w_dol97@icloud.com?body=" +
                  `${inquiry}` +
                  " 연락처: " +
                  `${phoneNb}` +
                  "&subject=" +
                  `${userName}` +
                  " 문의"
                }
              >
                메일 보내기
              </a>
            </div>
          </div>
        </form>
      </div>
    </Fade>
  );
};

export default Contact;
