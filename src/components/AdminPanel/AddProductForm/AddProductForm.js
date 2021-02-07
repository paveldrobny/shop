import React, { useState } from "react";
import "./AddProductForm.css";

function AddProductForm({ handleChange, value }) {
  return (
    <div className="admin-input-main">
      <div className="admin-input-content">
        <label>Имя товара:</label>
        <input
          type="text"
          name="Name"
          value={value.Name}
          onChange={handleChange}
        />
      </div>
      <div className="admin-input-content">
        <label>Цена товара:</label>
        <input
          min="0"
          type="number"
          name="Price"
          value={value.Price}
          onChange={handleChange}
        />
      </div>
      <div className="admin-input-content">
        <label>Скидка на товар %:</label>
        <input
          type="number"
          min="0"
          name="Discount"
          value={value.Discount}
          onChange={handleChange}
        />
      </div>

      <div className="admin-input-content">
        <label>Ссылка фото товара:</label>
        <input
          type="text"
          name="Image"
          value={value.Image}
          onChange={handleChange}
        />
      </div>
      <div className="admin-input-content">
        <label>Ссылка оплаты товара:</label>
        <input
          type="text"
          name="Pay"
          value={value.Pay}
          onChange={handleChange}
        />
      </div>
      <div className="admin-input-content">
        <label>Описание товара:</label>
        <textarea
          type="text"
          name="Description"
          value={value.Description}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default AddProductForm;
