import React from "react";
import "./Obras.css";
import cartel from "../media/cartel.jpg";
const Obras = () => {
  return (
    <section className="obras" id="obras">
      <h3 className="obras__title">Obras</h3>
      <div className="obras__container">
        <div className="obras__img__container">
          <img src={cartel} alt="obra" className="obras__img" />
        </div>
        <div className="obras__info">
          <h4 className="obras__name">
            Monstruos en el closet,ogros bajo la cama <br />
            <span>de Gustavo Ott</span>
          </h4>
          <p className="obras__description">
            Somos oficinistas, gerentes, trabajadores, sobrecargos,
            rescatistas,bomberos, mamá, papá, abuela, abuelo, soñamos, amamos y
            tenemos fe. Hoy no llegaremos a casa, en unosminutos nos volvimos
            humo. ¿accidente? Negativo Gustavo Ott nos muestra a través de esta
            obra los rostros que no se nombran.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Obras;
