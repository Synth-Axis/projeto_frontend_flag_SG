import "./Socials.scss";
import linkedin from "../assets/media/linkedIn_bw.png";
import discord from "../assets/media/discord.png";
import twitter from "../assets/media/twitter.png";
import instagram from "../assets/media/instagram_bw.png";

const Socials = () => {
  return (
    <div className="socials">
      <a href="https://discord.gg/GxTTmXwHHk" target="_blank">
        <img
          className="socials-icon"
          src={discord}
          alt="Discord Channel Link"
        />
      </a>
      <a href="https://twitter.com/synthaxisgaming" target="_blank">
        <img className="socials-icon" src={twitter} alt="Twitter Page Link" />
      </a>
      <a href="https://www.instagram.com/synthaxis_gaming/" target="_blank">
        <img
          className="socials-icon"
          src={instagram}
          alt="Instagram Page Link"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/sergioalexandregarcia/"
        target="_blank"
      >
        <img className="socials-icon" src={linkedin} alt="Linkedin Page Link" />
      </a>
    </div>
  );
};

export default Socials;
