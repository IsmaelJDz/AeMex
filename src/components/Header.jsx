import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "../styles/components/Header.scss";

//===================================
//  Resources Img
//===================================

import LogoAeroMex from "../resources/img/logoAero.svg";
import LogoAeroMexResponsive from "../resources/img/ResponsiveLogo.svg";
import Pictogram from "../resources/img/logoAeroTwo.svg";
import Language from "../resources/img/mexFlag.svg";

const Header = () => {
  return (
    <Fragment>
      <div className="Header--main">
        <div className="Header--images">
          <div className="Header--images-logoResponsive">
            <img
              src={LogoAeroMexResponsive}
              className="Header--responsive"
              alt="Logo"
              width="35px"
            />
          </div>
          <div className="Header--images-logo">
            <img
              src={LogoAeroMex}
              className="Header--mainLogo"
              alt="Logo"
              width="140px"
            />
          </div>
          <div className="Header--images-logoPic">
            <img
              src={Pictogram}
              className="Header--images__secondaryLogo"
              alt="Pictogram"
              width="25px"
            />
          </div>
        </div>

        <div className="Header--reservation">
          <h4 className="Header--reservation-text">RESERVA</h4>
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
              <li>
                <span className="Header--menu_secondary-activeLink">
                  Rastrea un vuelo
                </span>
              </li>
              <li>Destinos</li>
              <li>Más</li>
            </ul>
          </div>
          <div className="Header--menu_secondary-profile">
            <span className="icon-envelop"></span>
            <img
              src={Language}
              alt="idioma"
              width="25px"
              className="Header--menu_secondary-imgLanguage"
            />
            <Link
              to="/"
              className="Header--menu_secondary-profile_login"
              alt="login"
            >
              Iniciar sesión
            </Link>
          </div>
          <div className="Header--menu-tablet">
            <div className="Header--menu-flag">
              <span className="icon-envelop"></span>
            </div>
            <div className="Header--menu-hamburguer">
              <span className="icon-menu"></span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
