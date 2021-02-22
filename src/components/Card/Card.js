import React from "react";
import { NavLink } from "react-router-dom";
import CardPrice from "./CardPrice";

function Card({ card }) {
  return (
    <div className="card">
      <NavLink to={`/product/${card.id}`}>
        <div
          className="card-img"
          style={{ backgroundImage: `url(${card.Image})` }}
        ></div>
        <div className="card-container">
        <CardPrice card={card} />
        </div>
        <div className="card-name">{card.Name}</div>
        <div className="card-message">
          <div className="card-message-info">
            View
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </NavLink>
      {/* <button className="toWishList">Add to wishlist</button> */}
    </div>
  );
}

export default Card;
