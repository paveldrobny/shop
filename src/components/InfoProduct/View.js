import React, { useState, useEffect } from "react";
import firebase from "firebase";
import "firebase/firestore";
import "./InfoProduct.css";
import InfoProduct from "./InfoProduct";
import Loading from "../Loadings/Loading_1";
import { useLocation } from "react-router";

const View = () => {
  const [info, setInfo] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = () => {
    let str = location.pathname;
    let newPath = str.replace("/product/", "");
    const db = firebase.firestore();

    return db
      .collection("Cards")
      .doc(newPath)
      .get()
      .then((doc) => {
        setInfo(doc.data());
        setLoading(false);
      });
  };

  return (
    <div className="info-card-wrapper">
      {isLoading ? <Loading /> : <InfoProduct info={info} />}
    </div>
  );
};

export default View;
