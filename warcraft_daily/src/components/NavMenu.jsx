import "./NavMenu.scss";
import { NavLink, Link } from "react-router-dom";
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
        id={props.id}
        className={menuMode ? "icon icon-active" : "icon"}
        onClick={toggleMode}
      >
        <div className="hamburguer hamburguer-icon"></div>
      </div>

      <div className={menuMode ? "menu menu-open" : "menu menu-close"}>
        <ul className={menuMode ? "nav-burguer " : "hide"}>
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
          <li className={props.class}>
            <Link to="/policy"> Privacy Policy</Link>
          </li>
          <li>
            <a id="btn-burguer" href="#subscribe">
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
        <ul id={props.id2} className="nav">
          <li className="nav-link nav-link-underline">
            <NavLink to="/"> Home</NavLink>
          </li>
          <li className="nav-link nav-link-underline">
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li className="nav-link nav-link-underline">
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li className="nav-link nav-link-underline">
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li className={`nav-link nav-link-underline ${props.class}`}>
            <NavLink to="/policy"> Privacy Policy</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
