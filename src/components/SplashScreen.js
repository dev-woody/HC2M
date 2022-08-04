import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
      <div className="App-logo">HC2M</div>
    </div>
  );
};

export default SplashScreen;
