import React, { useState } from "react";
import "./AddProductForm.css";

function AddProductForm({ handleChange, value }) {
  return (
    <div className="admin-input-main">
      <div className="admin-side">
        <div className="admin-input-content">
          <label>Product name:</label>
          <input
            type="text"
            name="Name"
            value={value.Name}
            onChange={handleChange}
          />
        </div>
        <div className="admin-input-content">
          <label>Product price:</label>
          <input
            min="0"
            type="number"
            name="Price"
            value={value.Price}
            onChange={handleChange}
          />
        </div>
        <div className="admin-input-content">
          <label>Product discount %:</label>
          <input
            type="number"
            min="0"
            name="Discount"
            value={value.Discount}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="admin-side">
        <div className="admin-input-content">
          <label>Product photo link:</label>
          <input
            type="text"
            name="Image"
            value={value.Image}
            onChange={handleChange}
          />
        </div>
        <div className="admin-input-content">
          <label>Product payment link:</label>
          <input
            type="text"
            name="Pay"
            value={value.Pay}
            onChange={handleChange}
          />
        </div>
        <div className="admin-input-content">
          <label>Product description:</label>
          <textarea
            type="text"
            name="Description"
            value={value.Description}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default AddProductForm;
