import React from "react";
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

const Contact = () => {
  return (
    <Fade>
      <div className="ContactBlock">
        <form className="Contact-Form">
          <div className="fade">
            <div className="info-text">
              <div style={infoSubBox}>
                <div style={textSize}>성함</div>
                <input className="input-area"></input>
              </div>
              <div style={infoSubBox}>
                <div style={textSize}>연락처</div>
                <input className="input-area"></input>
              </div>
            </div>
            <div style={infoSubBox}>
              <div style={textSize}>문의내용</div>
              <textarea style={textArea}></textarea>
            </div>
            <div style={infoSubBox}>
              <a className="send-button" href="mailto:w_dol97@icloud.com">
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
