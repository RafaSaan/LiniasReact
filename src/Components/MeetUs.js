import React from "react";
import "./MeetUs.css";
import aranza from "../media/aranza.jpeg";
import luu from "../media/luu.jpg";
import isabel from "../media/isabel.jpg";
import gerardo from "../media/gerardo.jpg";
import itzcoatl from "../media/itzcoatl.jpg";
const MeetUs = () => {
  return (
    <section id="meetUs" className="meetUs">
      <h3 className="meetUs__title">Conócenos</h3>
      <div className="meetUs__cards">
        <div className="meetUs__item">
          <img src={aranza} alt="aranza" className="meetUs__img" />
          <div className="meetUs__item__info">
            <details>
              <summary>
                <h4 className="meetUs__item__title">Aranza Sánchez</h4>
              </summary>
              <div className="meetUs__container__paragraph">
                <p className="meetUs__paragraph">
                  Creadora Escénica Estudiante de la Licenciatura en Literatura
                  Dramática y Teatro con enfoque en el área de actuación y
                  dramaturgia.
                </p>
              </div>
            </details>
          </div>
        </div>
        <div className="meetUs__item">
          <img src={luu} alt="luu" className="meetUs__img" />
          <div className="meetUs__item__info">
            <details>
              <summary>
                <h4 className="meetUs__item__title">Luu Sanz</h4>
              </summary>
              <div className="meetUs__container__paragraph">
                <p className="meetUs__paragraph">
                  Estudiante del Colegio de Literatura Dramática y Teatro y
                  bailarina en la Compañía de Danza Folklórica “Mi Corazón es
                  México”.
                </p>
              </div>
            </details>
          </div>
        </div>
        <div className="meetUs__item">
          <img src={isabel} alt="isabel" className="meetUs__img" />
          <div className="meetUs__item__info">
            <details>
              <summary>
                <h4 className="meetUs__item__title">Isabel Contreras</h4>
              </summary>
              <div className="meetUs__container__paragraph">
                <p className="meetUs__paragraph">
                  Actiz y cantante mexicana. Estudia la licenciatura en
                  Literatura dramática y teatro en la facultad de filosofía y
                  letras de la UNAM.
                </p>
              </div>
            </details>
          </div>
        </div>
        <div className="meetUs__item">
          <img src={itzcoatl} alt="itzcoatl" className="meetUs__img" />
          <div className="meetUs__item__info">
            <details>
              <summary>
                <h4 className="meetUs__item__title">Itzcóatl Pérez</h4>
              </summary>
              <div className="meetUs__container__paragraph">
                <p className="meetUs__paragraph">
                  Estudiante de Literatura Dramática y Teatro de la Facultad de
                  Filosofía y Letras de la UNAM. Ha participado como
                  musicalizador, director y asistente de dirección.
                </p>
              </div>
            </details>
          </div>
        </div>
        <div className="meetUs__item">
          <img src={gerardo} alt="gerardo" className="meetUs__img" />
          <div className="meetUs__item__info">
            <details>
              <summary>
                <h4 className="meetUs__item__title">Gerardo Neri</h4>
              </summary>
              <div className="meetUs__container__paragraph">
                <p className="meetUs__paragraph">
                  Estudiante de la Licenciatura en Literatura Dramática y Teatro
                  de la UNAM.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetUs;
