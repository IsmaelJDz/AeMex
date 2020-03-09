import React, { Fragment } from "react";
import { Link } from "react-router-dom"

import "../styles/components/Header.scss";

//===================================
//  Resources Img
//===================================

import LogoAeroMex from "../resources/img/logoAero.svg";
import Pictogram from "../resources/img/logoAeroTwo.svg"
import Language from "../resources/img/mexFlag.svg";

const Header = () => {
  return (
    <Fragment>
      <div className="Header--main">
        <div className="Header--images">
          <img src={LogoAeroMex} className="Header--mainLogo" alt="Logo" width="150px" />
          <img src={Pictogram} className="Header--images__secondaryLogo" alt="Pictogram" width="30px" />
        </div>
        <div className="Header--menu_main">
          <nav>
            <ul>
              <li>Reserva</li>
              <li>Tu viaje</li>
              <li>Check-In</li>
              <li>Upgrade</li>
              <li>Club Premier</li>
            </ul>
          </nav>
        </div>
        <div className="Header--menu_secondary">
          <div className="Header--menu_secondary-travel">
            <ul>
              <li>Promociones</li>
              <li>Rastrea un vuelo</li>
              <li>Destinos</li>
              <li>Más</li>
            </ul>
          </div>
          <div className="Header--menu_secondary-profile">
            <div className="Header--menu_secondary-newsletter">
              <span className="icon-envelop"></span>
            </div>
            <div className="Header--menu_secondary-profile_flag">
              <img src={Language} alt="idioma" width="30px" />
            </div>
            <Link to="/" className="Header--menu_secondary-profile_login" alt="login">
              <span>Iniciar sesión</span>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
