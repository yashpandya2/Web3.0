import React from "react";
import "./Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} className="punklogo" alt="" />
      </div>
      <div className="searchBar">
        <div className="searchIcon">
          <img src={searchIcon} alt="" />
        </div>
        <input
          className="searchInput"
          placeholder="Collections, Items and Users.."
        />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>MarketPlace</p>
        <p>Create</p>
      </div>

      <div className="headerActions">
        <div className="themeSwitch">
          <img src={themeSwitchIcon} alt="" />
        </div>
      </div>

      <div className="loginButton">
        GET IN
      </div>
    </div>
  );
};

export default Header;
