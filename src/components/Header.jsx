import React from "react";
import "../styles/components/Home.scss";
import Logo from "../resources/img/logoAero.svg";

const Header = () => {
  return (
    <div className="Header__main">
      <img src={Logo} alt="Logo" />
      <p>Soy el header</p>
    </div>
  );
};

export default Header;
