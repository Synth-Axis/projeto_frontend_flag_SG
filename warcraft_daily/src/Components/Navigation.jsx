import logo from "../assets/media/wow_icon.png";
import Button from "./Button";
import "./Navigation.scss";

function Navigation() {
  return (
    <nav className="header">
      <div className="logo-container">
        <img src={logo} alt="WoW Logo" title="WoW Logo"></img>
        <span>DAILY</span>
      </div>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <Button section="btn-nav" text="Subscribe" />
      </div>
    </nav>
  );
}

export default Navigation;
