import React from "react";
import CardPrice from "../Card/Price";
import Container from "./Container";

const InfoProduct = ({ info }) => {
  return (
    <div className="info-card">
      <div className="info-card-left">
        <div
          className="info-card-image"
          style={{ backgroundImage: `url(${info.Image})` }}
        ></div>
      </div>
      <div className="info-card-right">
        <div className="info-card-title">
          <b>{info.Name}</b>
        </div>
        <div className="info-card-container">
          <CardPrice isProduct={true} card={info} />
        </div>
        <div className="info-card-container">
          <a className="info-card-pay" href={info.PayLink}>
            BUY
          </a>
        </div>
        <Container name="Added" value={info.CreateAt} />
        <Container name="Description" value={info.Description} />
      </div>
    </div>
  );
};

export default InfoProduct;
