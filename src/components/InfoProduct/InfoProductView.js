import React, { useState, useEffect } from "react";
import firebase from "firebase";
import "firebase/firestore";
import "./InfoProduct.css";
import InfoProduct from "./InfoProduct";
import Loading from "../Loadings/Loading_1/Loading";

function InfoProductView() {
  const [info, setInfo] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getInfo();
  }, []);

  function getInfo() {
    let str = window.location.pathname;
    let newPath = str.replace("/product/", "");
    const db = firebase.firestore();

    return db
      .collection("Cards")
      .doc(newPath)
      .get()
      .then((doc) => {
        setInfo(doc.data());
        setLoading(false)
      });
  }

  return (
    <div className="infoCard-wrapper">
      {isLoading ? <Loading /> : <InfoProduct info={info} />}
    </div>
  );
}

export default InfoProductView;
