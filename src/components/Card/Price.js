import React from "react";

const Price = ({ card, isProduct }) => {
  const NormalPrice = () => {
    if (card.Price > 0 && card.Discount === 0) {
      return true;
    }
    return false;
  };

  const DiscountPrice = () => {
    if (card.Price > 0 && card.Discount > 0) {
      return true;
    }
    return false;
  };

  const DiscountValue = () => {
    return (card.Price - card.Price * (card.Discount / 100)).toFixed(2);
  };

  const ProductData = () => {
    if (isProduct) return "SAVE ";
    return "- ";
  };

  return (
    <div className={`card-price ${isProduct ? "is-product" : ""}`}>
      {NormalPrice(card) ? (
        <div className="card-price-normal">{card.Price}</div>
      ) : DiscountPrice(card) ? (
        <div className="card-discount-wrapper">
          <div className="card-discount-test">
            <div className="card-price-old">{card.Price}</div>
            <div className="card-price-discount">{DiscountValue(card)}</div>
          </div>
          <div className={`card-discount-percent`}>
            {ProductData()}
            {card.Discount}%
          </div>
        </div>
      ) : (
        <div>FREE</div>
      )}
    </div>
  );
};

export default Price;
