import React, { useState } from "react";
import "./AdminCards.css";

function AdminCards({ card, deleteCard }) {
  const [cardsInfo, setCardsInfo] = useState([
    { name: "ID", value: card.id },
    { name: "TITLE", value: card.Name },
    { name: "PRICE", value: card.Price },
    { name: "DISCOUNT", value: card.Discount },
    { name: "PAY LINK", value: card.PayLink },
    { name: "DESCRIPTION", value: card.Description },
  ]);

  return (
    <div className="cards-block">
      <div>
        <button className="delete-product" onClick={deleteCard}>
          DELETE
        </button>
      </div>
      {cardsInfo.map((cardInfo) => {
        return (
          <div key={cardInfo.value} className="cards-info">
            <b>{cardInfo.name}:</b>
            {cardInfo.value}
          </div>
        );
      })}
    </div>
  );
}

export default AdminCards;
