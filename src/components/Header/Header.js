import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./Header.css";

const Header = () => {
  const [percentage, setPercentage] = useState(0);
  const [active, setActive] = useState(false);
  const [navLinks, setNavLinks] = useState([
    {
      name: "Home",
      path: "/",
      FAClass: "fas fa-home",
    },
    {
      name: "Browse",
      path: "/browse",
      FAClass: "fas fa-shopping-bag",
    },
    // {
    //   name: "WishList",
    //   path: "/wishList",
    //   FAClass: "fas fa-shopping-cart",
    // },
    {
      name: "Admin panel",
      path: "/admin",
      FAClass: "fas fa-user-cog",
    },
  ]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [active]);

  const handleScroll = () => {
    let scrollStart =
        document.body.scrollTop || document.documentElement.scrollTop,
      scrollHeight =
        document.body.scrollHeight - document.documentElement.clientHeight;

    let percentValue = (scrollStart / scrollHeight) * 100;
    setPercentage(percentValue);

    window.scrollY >= 15 ? setActive(true) : setActive(false);
  };

  return (
    <header id="header" className={`${active ? "activeScroll" : ""}`}>
      <ProgressBar value={percentage} type={"header"} />
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
};
export default Header;
