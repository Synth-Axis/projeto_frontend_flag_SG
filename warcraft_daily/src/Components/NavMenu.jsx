import "./NavMenu.scss";
import { Link } from "react-router-dom";

const NavMenu = (props) => {
  return (
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
    </ul>
  );
};

export default NavMenu;
