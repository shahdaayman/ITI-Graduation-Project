import React from "react";
import "./CategorySection.css";

const categories = [
  { id: 1, icon: "fa-solid fa-mobile-screen", name: "Phones" },
  { id: 2, icon: "fa-solid fa-desktop", name: "Computers" },
  { id: 3, icon: "fa-solid fa-clock", name: "SmartWatch" },
  { id: 4, icon: "fa-solid fa-camera", name: "Camera" },
  { id: 5, icon: "fa-solid fa-headphones", name: "HeadPhones" },
  { id: 6, icon: "fa-solid fa-gamepad", name: "Gaming" },
];

const CategorySection = () => {
  return (
    <div className="categories">
      {categories.map((category) => (
        <div className="category" key={category.id}>
          <i className={category.icon}></i>
          <span>{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
