import React from "react";
import "./NewArrivalSection.css";
import newArrival1 from "../../Assets/newArrival-1.svg";
import newArrival2 from "../../Assets/newArrival-2.svg";
import newArrival3 from "../../Assets/newArrival-3.svg";
import newArrival4 from "../../Assets/newArrival-4.svg";

const NewArrivalSection = () => {
  return (
    <div className="last-section">
      <div className="container">
        <div className="left">
          <img
            src={newArrival4}
            alt="PlayStation 5"
            className="left-img"
          />
          <div className="overlay">
            <h3>PlayStation 5</h3>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <a href="#">Shop Now</a>
          </div>
        </div>

        <div className="right">
          <div className="top">
            <img
              src={newArrival3}
              alt="Women's Collections"
              className="top-img"
            />
            <div className="overlay">
              <h3>Women’s Collections</h3>
              <p>Featured woman collections that give you another vibe.</p>
              <a href="#">Shop Now</a>
            </div>
          </div>

          <div className="bottom">
            <div className="bottom-item">
              <img src={newArrival2} alt="Speakers" />
              <div className="overlay">
                <h3>Speakers</h3>
                <p>Amazon wireless speakers</p>
                <a href="#">Shop Now</a>
              </div>
            </div>
            <div className="bottom-item">
              <img src={newArrival1} alt="Perfume" />
              <div className="overlay">
                <h3>Perfume</h3>
                <p>GUCCI INTENSEOUD EDP</p>
                <a href="#">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalSection;
