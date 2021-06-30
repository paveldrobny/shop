import React, { useState, useEffect } from "react";
import firebase from "firebase";
import Slider from "../components/Slider";
import Card from "../components/Card";

const Home = () => {
  const [discountCards, setDiscountCards] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const db = firebase.firestore();

  useEffect(() => {
    const discountData = [];

    db.collection("Cards")
      .orderBy("id", "desc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let discount = doc.data().Discount;
          if (discount > 0) {
            discountData.push(doc.data());
          }
        });
        setDiscountCards(discountData);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page-wrapper">
      <Slider />
      <div className="home_title">DISCOUNTS!</div>
      <div className="newCardsTest">
        {discountCards.map((card) => {
          return <Card card={card} />;
        })}
      </div>
    </div>
  );
};

export default Home;
