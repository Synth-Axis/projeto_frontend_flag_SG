import elgato from "../assets/media/elgato_logo_white.png";
import curseforge from "../assets/media/curseforgelogo.png";
import corsair from "../assets/media/corsair_white_logo.webp";
import secretlabs from "../assets/media/secretlablogo.png";
import "./Partners.scss";

const Partners = () => {
  return (
    <div className="partners-banner">
      <a href="https://www.elgato.com" target="_blank">
        <img
          className="partners-logos"
          src={elgato}
          alt="Elgato Website link"
          title="Elgato Website link"
        ></img>
      </a>
      <a href="https://www.curseforge.com/" target="_blank">
        <img
          className="partners-logos"
          src={curseforge}
          alt="curseforge link"
        ></img>
      </a>
      <a href="https://www.corsair.com" target="_blank">
        <img className="partners-logos" src={corsair} alt="corsair link"></img>
      </a>
      <a href="https://secretlab.eu/" target="_blank">
        <img
          className="partners-logos"
          src={secretlabs}
          alt="secret lab link"
        ></img>
      </a>
    </div>
  );
};

export default Partners;
