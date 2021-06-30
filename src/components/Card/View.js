import React, { useState, useEffect } from "react";
import "firebase/firestore";
import firebase from "firebase";
import Card from "./Card";
import "./Card.css";
import Loading from "../Loadings/Loading_1";
import Search from "../Search";
import NotFound from "./NotFound";

const CardsView = () => {
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
  }, []);

  const filterProducts = cards.filter((card) => {
    return card.Name.toLowerCase().includes(query.toLowerCase());
  });

  let component;
  if (isLoading) {
    component = <Loading />;
  } else if (cards.length && filterProducts.length) {
    component = filterProducts.map((card) => {
      return <Card key={card.id} card={card} />;
    });
  } else if (!filterProducts.length) {
    component = <NotFound text={query} />;
  }

  return (
    <div>
      <Search value={query} onChange={onChange} />
      <div className="card-wrapper">{component}</div>
    </div>
  );
};

export default CardsView;
