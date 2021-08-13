import React from "react";
import womanAu1 from "../media/womanAu1.jpg";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="aboutUs" id="aboutUs">
      <h3 className="aboutUs__title">¿Quiénes somos?</h3>
      <div className="aboutUs__container">
        <div className="aboutUs__objectives">
          <div className="aboutUs__mission">
            <h5 className="aboutUs__mission__title">MISIÓN</h5>
            <p className="aboutUs__paragraph">
              Empresa dedicada a la logística y creación de producciones
              teatrales, dirigidas a adultos jóvenes y adultos.
            </p>
          </div>
          <div className="aboutUs__vision">
            <h5 className="aboutUs__mission__title">VISIÓN</h5>
            <p className="aboutUs__paragraph">
              Nuestra visión es ser líder de las producciones teatrales,
              satisfaciendo al espectador, con el uso de medios digitales.
            </p>
          </div>
        </div>
        <div className="aboutUs__img__container">
          <img src={womanAu1} alt="teatro" className="aboutUs__img" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
