import React from "react";
import "./Banner.css";
import speakerImg from "../../Assets/speaker.svg"; 

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-text">
        <div className="category3">Categories</div>
        <h1>
          Enhance Your
          <br />
          Music Experience
        </h1>

        <div className="countdown">
          <div className="countdown-item">
            23 <span>Hours</span>
          </div>
          <div className="countdown-item">
            05 <span>Days</span>
          </div>
          <div className="countdown-item">
            59 <span>Minutes</span>
          </div>
          <div className="countdown-item">
            35 <span>Seconds</span>
          </div>
        </div>

        <button className="buy-btn">Buy Now!</button>
      </div>
      <img src={speakerImg} alt="Speaker" />
    </div>
  );
};

export default Banner;
