import React, { useState, useEffect } from "react";
import "./Footer.css";

function Footer() {
  const urlUpdate =
    "https://api.github.com/repos/paveldrobny/shop/branches/gh-pages";

  const [update, setUpdate] = useState("");

  useEffect(() => {
    let result = "";
    return fetch(urlUpdate)
      .then((res) => res.json())
      .then((out) => {
        result = out.commit.commit.author.date.slice(0, 10);
        setUpdate(result);
      })
      .catch((err) => {
        return err;
      });
  });

  return (
    <footer>
      <div id="footer_MainCont">
        <div id="updateSite">Update: {update}</div>
        <div id="footer_Cont">
          <a href="https://github.com/paveldrobny/shop">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
