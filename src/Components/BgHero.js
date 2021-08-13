import "./BgHero.css";
import bgHero from "../media/bgHero.mp4";
const BgHero = () => {
  return (
    <div className="hero__container" id="home">
      <video src={bgHero} className="hero__video" autoPlay loop muted></video>
      <h1>LINIA’S PRODUCCIONES</h1>
    </div>
  );
};

export default BgHero;
