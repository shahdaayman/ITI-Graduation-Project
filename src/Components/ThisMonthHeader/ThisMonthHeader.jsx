import React from "react";
import "./ThisMonthHeader.css";

const ThisMonthHeader = () => {
  return (
    <div className="this-month-header">
      <div className="body-container">
        <div className="content-area">
          <div className="carts-nav12">
            <div className="Today">This Month</div>
          </div>
        </div>
      </div>

      <section className="flash-sales">
        <div className="title">
          <span>Browse By Category</span>
        </div>
        <div className="category-arrows">
          <button className="view-all">View All</button>
        </div>
      </section>
    </div>
  );
};

export default ThisMonthHeader;
