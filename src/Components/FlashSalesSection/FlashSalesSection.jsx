import React from "react";
import "./FlashSalesSection.css";

const FlashSalesSection = () => {
  return (
    <div className="flashsales-container">
      <div className="carts-nav">
        <div className="Today">Today’s</div>
      </div>

      <section className="flash-sales">
        <div className="title">
          <span>Flash Sales</span>
        </div>

        <div className="countdown1">
          <div className="time-box">
            <span className="label">Days</span>
            <span className="number">03</span>
          </div>
          <span className="col">:</span>
          <div className="time-box">
            <span className="label">Hours</span>
            <span className="number">23</span>
          </div>
          <span className="col">:</span>
          <div className="time-box">
            <span className="label">Minutes</span>
            <span className="number">19</span>
          </div>
          <span className="col">:</span>
          <div className="time-box">
            <span className="label">Seconds</span>
            <span className="number">56</span>
          </div>
        </div>

        <div className="arrows">
          <button className="arrow">
            <i className="fa-solid fa-arrow-left-long"></i>
          </button>
          <button className="arrow">
            <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default FlashSalesSection;
