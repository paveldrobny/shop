import React from "react";

const Price = ({ card }) => {
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

  return (
    <div className="card-price">
      {NormalPrice(card) ? (
        <div> {card.Price}</div>
      ) : DiscountPrice(card) ? (
        <div>
          <div className="discountContent discountPrice">-{card.Discount}%</div>
          <div className="discountContent">
            <div className="oldPrice">{card.Price}</div>
            <div className="newPrice">{DiscountValue(card)}</div>
          </div>
        </div>
      ) : (
        <div>FREE</div>
      )}
    </div>
  );
};

export default Price;
