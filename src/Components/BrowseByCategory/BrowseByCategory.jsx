import React from "react";
import "./BrowseByCategory.css";

const BrowseByCategory = () => {
  return (
    <div className="browse-category-container">
      <div className="body-container">
        <div className="content-area">
          <div className="carts-nav12">
            <div className="Today">Categories</div>
          </div>
        </div>
      </div>

      <section className="flash-sales">
        <div className="title">
          <span>Browse By Category</span>
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

export default BrowseByCategory;
