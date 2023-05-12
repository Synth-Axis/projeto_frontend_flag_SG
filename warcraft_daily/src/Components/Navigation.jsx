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
          <li className="nav-link nav-link-underline">Home</li>
          <li className="nav-link nav-link-underline">Blog</li>
          <li className="nav-link nav-link-underline">About Us</li>
          <li className="nav-link nav-link-underline">Contact Us</li>
        </ul>
        <Button section="btn-nav" text="Subscribe" />
      </div>
    </nav>
  );
}

export default Navigation;
