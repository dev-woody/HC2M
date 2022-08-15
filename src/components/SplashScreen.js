import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HC2M_logo_png from "../HC2M_logo.png";

import "../styles/SplashScreen.css";

const SplashScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/portfolio");
    }, 5000);
  });
  return (
    <div className="SplashScreenBlock">
      <div className="App-logo">
        <img className="Logo-box" src={HC2M_logo_png} />
      </div>
    </div>
  );
};

export default SplashScreen;
