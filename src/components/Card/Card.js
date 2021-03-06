import React from "react";
import { NavLink } from "react-router-dom";
import Price from "./Price";

function Card({ card }) {
  return (
    <div className="card">
      <NavLink to={`/product/${card.id}`}>
        <div
          className="card-img"
          style={{ backgroundImage: `url(${card.Image})` }}
        ></div>
        <div className="card-container">
          <div className="card-name-cart">
            <div className="card-name">{card.Name}</div>
            <div className="card-cart-wrapper">
              {/* <button className="card-cart">Add to cart</button> */}
            </div>
          </div>
          <Price isProduct={false} card={card} />
        </div>

        <div className="card-message">
          <div className="card-message-info">
            View
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default Card;
