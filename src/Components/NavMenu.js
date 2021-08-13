import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
const NavMenu = () => {
  return (
    <nav className="nav">
      <ul className="nav__menu">
        <li className="nav__item">
          {" "}
          <Link
            to="home"
            className="nav__link"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            activeClass="active-nav"
          >
            Inicio
          </Link>{" "}
        </li>
        <li className="nav__item">
          {" "}
          <Link
            to="aboutUs"
            activeClass="active-nav"
            className="nav__link"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            ¿Quiénes somos?
          </Link>{" "}
        </li>
        <li className="nav__item">
          {" "}
          <Link
            to="meetUs"
            activeClass="active-nav"
            className="nav__link"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Conocenos
          </Link>{" "}
        </li>
        <li className="nav__item">
          {" "}
          <Link
            to="obras"
            activeClass="active-nav"
            className="nav__link"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Obras
          </Link>{" "}
        </li>
        <li className="nav__item">
          {" "}
          <Link
            to="store"
            activeClass="active-nav"
            className="nav__link"
            spy={true}
            smooth={true}
            offset={-110}
            duration={500}
          >
            Tienda
          </Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
