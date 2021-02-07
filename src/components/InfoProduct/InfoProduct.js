import React from "react";
import CardPrice from "../Card/CardPrice";

function InfoProduct({ info }) {
  return (
    <div className="infoCard-container">
      <div className="infoCard-left">
        <div
          className="infoCard-img"
          style={{ backgroundImage: `url(${info.Image})` }}
        ></div>
      </div>
      <div className="border"></div>
      <div className="infoCard-right">
        <div className="infoCard-title">
          <b>{info.Name}</b>
        </div>
        <div className="infoCard-price-cont">
          <CardPrice card={info} />
          <a className="infoCardPay" href={info.PayLink}>
            BUY
          </a>
        </div>
        <div className="infoCard-added">
          <b>Added:</b> {info.CreateAt}
        </div>
        <div className="infoCard-description">
          <b>Description:</b> {info.Description}
        </div>
      </div>
    </div>
  );
}

export default InfoProduct;
