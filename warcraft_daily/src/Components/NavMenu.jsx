import "./NavMenu.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";

const NavMenu = (props) => {
  const [menuMode, setMenuMode] = useState(false);

  const toggleMode = () => {
    setMenuMode(!menuMode);
  };

  return (
    <div>
      <div
        className={menuMode ? "icon icon-active" : "icon"}
        onClick={toggleMode}
      >
        <div className="hamburguer hamburguer-icon"></div>
      </div>

      <div className={menuMode ? "menu menu-open" : "menu menu-close"}>
        <ul className={menuMode ? "nav-burguer " + props.class : "hide"}>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/policy"> Privacy Policy</Link>
          </li>
          <li>
            <a href="#subscribe">
              <Button
                type="button"
                class="btn-nav btn-burguer"
                text="Subscribe"
              />
            </a>
          </li>
        </ul>
      </div>

      <div className={menuMode ? "hide" : ""}>
        <ul className={"nav " + props.class}>
          <li className="nav-link nav-link-underline">
            <Link to="/"> Home</Link>
          </li>
          <li className="nav-link nav-link-underline">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="nav-link nav-link-underline">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-link nav-link-underline">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="nav-link nav-link-underline">
            <Link to="/policy"> Privacy Policy</Link>
          </li>
          <a href="#subscribe">
            <Button type="button" class="btn-nav" text="Subscribe" />
          </a>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
