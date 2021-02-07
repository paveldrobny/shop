import React, { useState, useEffect } from "react";
import "firebase/firestore";
import firebase from "firebase";
import Card from "./Card";
import "./Cards.css";
import Loading from "../Loadings/Loading_1/Loading";

function CardsView() {
  const [cards, setCards] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const db = firebase.firestore();
    const cardData = [];
    return db
      .collection("Cards")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          cardData.push(doc.data());
        });
        setCards(cardData);
        setLoading(false);
      });
  }, []);

  return (
    <div className="card-wrapper">
      {isLoading ? (
        <Loading />
      ) : (
        cards.map((card) => {
          return <Card key={card.id} card={card} />;
        })
      )}
    </div>
  );
}

export default CardsView;
