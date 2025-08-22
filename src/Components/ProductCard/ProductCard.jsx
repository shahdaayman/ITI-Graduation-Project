import React from "react";
import { FaShoppingCart, FaEye, FaStar } from "react-icons/fa";
import deleteIcon from "../../Assets/delete.svg";
import "./ProductCard.css";

const ProductCard = ({
  title,
  price,
  oldPrice,
  img,
  discount,
  newTag,
  showDelete,
  showView,
  rating,
  inCart,
  onAddToCart,
  onDelete,
  onView,
}) => {
  return (
    <div className="card">
      <div className="card-img">
        {discount && <span className="discount">{discount}</span>}
        {newTag && <span className="discount2">{newTag}</span>}

        {showDelete && (
          <span className="delete-icon" onClick={onDelete}>
            <img src={deleteIcon} alt="Delete" />
          </span>
        )}
        {showView && (
          <span className="view-icon" onClick={onView}>
            <FaEye />
          </span>
        )}

        <img src={img} alt={title} />
      </div>

      <button
        className="btn-add-cart"
        onClick={onAddToCart}
        style={{
          backgroundColor: inCart ? "transparent" : "black",
          color: inCart ? "black" : "white",
        }}
      >
        <FaShoppingCart /> {inCart ? "Remove from Cart" : "Add To Cart"}
      </button>

      <div className="card-content">
        <p>{title}</p>
        <div>
          <span className="price">{price}</span>
          {oldPrice && <span className="old-price">{oldPrice}</span>}
        </div>

        {rating && (
          <div className="rating">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar key={i} className={i < rating ? "star filled" : "star"} />
            ))}
            <span>({rating})</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
