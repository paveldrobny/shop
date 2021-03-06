import React, { useState } from "react";
import "./Cards.css";

function Cards({ card, deleteCard }) {
  const [cardsInfo, setCardsInfo] = useState([
    { name: "ID", value: card.id },
    { name: "TITLE", value: card.Name },
    { name: "PRICE", value: card.Price },
    { name: "DISCOUNT", value: card.Discount },
    { name: "IMAGE LINK", value: card.Image },
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
          <div key={cardInfo.name} className="cards-info">
            <b>{cardInfo.name}:</b>
            {cardInfo.value}
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
