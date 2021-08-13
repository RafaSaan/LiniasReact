import React from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer__title">LINIA’S PRODUCCIONES</h3>
      <div className="footer__container">
        <ul className="footer__menu">
          <li className="footer__item">
            {" "}
            <Link to="#" className="footer__link">
              {" "}
              <AiIcons.AiFillInstagram className="footer__icon" /> @lineas_pro
            </Link>{" "}
          </li>
          <li className="footer__item">
            {" "}
            <Link to="#" className="footer__link">
              <AiIcons.AiFillFacebook className="footer__icon" /> LINIA’S
              PRODUCCIONES{" "}
            </Link>{" "}
          </li>
          <li className="footer__item">
            {" "}
            <Link to="#" className="footer__link">
              <AiIcons.AiFillTwitterCircle className="footer__icon" />
              @linias_pro{" "}
            </Link>{" "}
          </li>
          <li className="footer__item">
            {" "}
            <Link to="#" className="footer__link">
              {" "}
              <AiIcons.AiFillYoutube className="footer__icon" />
              LINIA’S PRODUCCIONES{" "}
            </Link>{" "}
          </li>
          <li className="footer__item">
            {" "}
            <Link to="#" className="footer__link">
              {" "}
              <AiIcons.AiFillMail className="footer__icon" />
              linias-pro@gmail.com{" "}
            </Link>{" "}
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
