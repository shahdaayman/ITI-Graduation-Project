import React from "react";
import "./FeaturesSection.css";

const features = [
  {
    icon: "fas fa-truck",
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    icon: "fas fa-headset",
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    icon: "fas fa-check-circle",
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];

const FeaturesSection = () => {
  return (
    <section className="features">
      {features.map((feature, index) => (
        <div className="feature-item" key={index}>
          <div className="icon-circle">
            <i className={feature.icon}></i>
          </div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;
