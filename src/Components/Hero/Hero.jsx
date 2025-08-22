import React from "react";
import "./Hero.css";
import { FaApple } from "react-icons/fa";
import heroImg from "../../Assets//hero_endframe__cvklg0xk3w6e_large 2.svg"; // move image to Assets

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="iphone-p1">
          <FaApple /> iPhone 14 Series
        </p>
        <pre>
          Up to 10%{"\n"}
          off Voucher
        </pre>
        <a href="#" className="shop-btn">
          Shop Now →
        </a>
      </div>
      <img src={heroImg} alt="iPhone 14" />
    </section>
  );
};

export default Hero;
