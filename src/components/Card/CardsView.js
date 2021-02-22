import React, { useState, useEffect } from "react";
import "firebase/firestore";
import firebase from "firebase";
import Card from "./Card";
import "./Cards.css";
import Loading from "../Loadings/Loading_1/Loading";
import Search from "../Search/Search";

function CardsView() {
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setLoading] = useState(true);

  const onChange = (event) => setQuery(event.target.value);

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
  });

  const filterProducts = cards.filter((card) => {
    return card.Name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div>
      <Search value={query} onChange={onChange} />
      <div className="card-wrapper">
        {isLoading ? (
          <Loading />
        ) : cards.length ? (
          filterProducts.map((card) => {
            return <Card key={card.id} card={card} />;
          })
        ) : (
          <h2>Empty list</h2>
        )}
      </div>
    </div>
  );
}

export default CardsView;
