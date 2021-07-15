import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const urlProject = "https://github.com/paveldrobny/shop";
  const urlUpdate = "https://api.github.com/repos/paveldrobny/shop";

  const [update, setUpdate] = useState("");

  useEffect(() => {
    let result = "";
    return fetch(urlUpdate)
      .then((res) => res.json())
      .then((out) => {
        result = out.updated_at.slice(0, 10);
        setUpdate(result);
      })
      .catch((err) => {
        return err;
      });
  });

  return (
    <div id="footer-wrapper">
      <footer>
        <div id="footer-update-text">Update: {update}</div>
        <div>

          <a id="footer-link" href={urlProject}>
            <i className="fab fa-github"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
