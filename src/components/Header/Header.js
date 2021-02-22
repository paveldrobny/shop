import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./Header.css";

function Header() {
  const [percentage, setPercentage] = useState(0);
  const [navLinks, setNavLinks] = useState([
    {
      name: "Products",
      path: "/",
      FAClass: "fas fa-shopping-bag",
    },
    // {
    //   name: "WishList",
    //   path: "/wishList",
    //   FAClass: "fas fa-shopping-cart",
    // },
    {
      name: "AdminPanel",
      path: "/admin",
      FAClass: "fas fa-user-cog",
    },
  ]);

  let headerActive = "";

  window.addEventListener("scroll", handleScroll);

  if (window.scrollY >= 15) {
    headerActive += "active";
  }

  function handleScroll() {
    let scrollStart =
        document.body.scrollTop || document.documentElement.scrollTop,
      scrollHeight =
        document.body.scrollHeight - document.documentElement.clientHeight;

    let percentValue = (scrollStart / scrollHeight) * 100;
    setPercentage(percentValue);
  }

  return (
    <header id="header" className={headerActive}>
      <ProgressBar value={percentage} />
      <div className="header-cont">
        <div className="header-title">Shop</div>
        <div className="header-navBtn">
          <ul>
            {navLinks.map((link) => {
              return (
                <li key={link.name}>
                  <NavLink
                    exact
                    to={link.path}
                    className="App-link"
                    activeClassName="selected"
                  >
                    <i className={link.FAClass}></i>
                  </NavLink>
                  <div className="linkMessage">{link.name}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
