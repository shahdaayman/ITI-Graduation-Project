import React from "react";
import "./Sidebar.css";
import { FaAngleRight } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="body-sidebar">
      <ul>
        <li>
          Woman's Fashion <FaAngleRight className="i1" />
        </li>
        <li>
          Men's Fashion <FaAngleRight className="i2" />
        </li>
        <li>Electronics</li>
        <li>Home & Lifestyle</li>
        <li>Medicine</li>
        <li>Sports & Outdoor</li>
        <li>Baby's & Toys</li>
        <li>Groceries & Pets</li>
        <li>Health & Beauty</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
