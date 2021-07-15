import React from "react";

const Container = ({ name, value }) => {
  return (
    <div className="info-card-container">
      <b>{name}:</b> {value}
    </div>
  );
};

export default Container;
