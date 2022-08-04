import React from "react";
import { Fade } from "react-reveal";

import "../styles/Plan.css";

const Plan = () => {
  return (
    <Fade>
      <div className="PlanBlock">
        <div className="Google-Map-Box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1587.310623066929!2d127.11356435823943!3d37.280407629145905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5a8f5b9b76b3%3A0x9e86ddd50d192bb7!2z6riw7Z2l6rWs7LKt!5e0!3m2!1sko!2skr!4v1658975688655!5m2!1sko!2skr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>HC2M 오시는 길</div>
      </div>
    </Fade>
  );
};

export default Plan;
