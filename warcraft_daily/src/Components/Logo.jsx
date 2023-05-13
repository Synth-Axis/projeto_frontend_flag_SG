import "./Logo.scss";
import logo from "../assets/media/wow_icon.png";

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="WoW Logo" title="WoW Logo"></img>
      <span>DAILY</span>
    </div>
  );
};

export default Logo;
