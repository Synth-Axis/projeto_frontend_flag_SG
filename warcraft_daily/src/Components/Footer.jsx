import "./Footer.scss";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import Button from "./Button";
import Input from "./Input";
import Socials from "./Socials";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <Link to="/">
          <Logo />
        </Link>
        <NavMenu id="burguer-footer-hide" id2="footer-menu" />
      </div>
      <div className="subscribe">
        <p>Subscribe to our news letter to get latest updates and news</p>
        <div id="subscribe" className="hero-box">
          <Input
            class="input-email"
            type="email"
            placeholder="Enter Your Email"
          />
          <Button type="button" text="Subscribe" />
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <p>Stormwind, 122 Dwarven District, Elwynn Forest</p>
          <Socials />
        </div>
        <p>info@wowdaily.com | 020 7993 2905</p>
      </div>
    </div>
  );
};

export default Footer;
