import React, { useState, useEffect } from "react";
import "firebase/firestore";
import firebase from "firebase";
import AddProductForm from "./AddProductForm/AddProductForm";
import AdminCards from "./AdminCards/AdminCards";

function AdminView() {
  const [cards, setCards] = useState([]);
  const [newProduct, setNewProduct] = useState({
    Name: "",
    Price: 0,
    Discount: 0,
    Image: "",
    Pay: "",
    Description: "",
    Date: "",
  });

  function handleChange(e) {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  }

  const db = firebase.firestore();

  useEffect(() => {
    const cardData = [];
    return db
      .collection("Cards")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          cardData.push(doc.data());
        });
        setCards(cardData);
      });
  }, []);

  function addProduct() {
    var str = cards.length + 1;
    var cID = str.toString();
    if (checkInput()) {
      db.collection("Cards").doc(cID).set({
        id: cID,
        Name: newProduct.Name,
        Price: newProduct.Price,
        Discount: newProduct.Discount,
        Image: newProduct.Image,
        PayLink: newProduct.Pay,
        Description: newProduct.Description,
        CreateAt: new Date().toLocaleString(),
      });
    } else {
      alert("One of the fields is empty!");
    }
  }

  function checkInput() {
    if (
      newProduct.Name.trim() &&
      newProduct.Price >= 0 &&
      newProduct.Discount <= 99 &&
      newProduct.Image.trim() &&
      newProduct.Pay.trim() &&
      newProduct.Description.trim()
    ) {
      return true;
    }
    return false;
  }

  function deleteCard(id, name, price) {
    let message = `\nID: ${id}\nИмя товара: ${name}\nЦена товара: ${price}`;
    if (window.confirm("ВНИМАНИЕ: Удалить этот товар?" + message)) {
      db.collection("Cards")
        .doc(id)
        .delete()
        .then(function () {
          console.log("Deleted!");
        })
        .catch(function (error) {
          console.error("Error:", error);
        });
    }
  }

  return (
    <div className="admin-wrapper">
      <h1>Admin Panel</h1>

      <AddProductForm
        handleChange={handleChange.bind(this)}
        value={newProduct}
      />

      <div id="btn_content">
        <button onClick={addProduct}>Add product</button>
      </div>

      <details className="cards-preview">
        <summary>Show / Hide products</summary>

        {cards.map((card) => {
          return (
            <AdminCards
              key={card.id}
              card={card}
              deleteCard={() => deleteCard(card.id, card.Name, card.Price)}
            />
          );
        })}
      </details>
    </div>
  );
}

export default AdminView;
