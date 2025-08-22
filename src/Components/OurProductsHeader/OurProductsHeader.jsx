import React from "react";
const OurProductsHeader = () => {
  return (
    <div>
      <div className="body-container">
        <div className="content-area">
          <div className="carts-nav12">
            <div className="Today">Our Products</div>
          </div>
        </div>
      </div>

      <section className="flash-sales">
        <div className="title">
          <span>Explore Our Products</span>
        </div>
        <div className="category-arrows">
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

export default OurProductsHeader;
