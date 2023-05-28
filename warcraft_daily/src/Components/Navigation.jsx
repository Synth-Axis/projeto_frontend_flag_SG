import Logo from "./Logo";
import NavMenu from "./NavMenu";
import Button from "./Button";
import "./Navigation.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="header">
      <Link to="/">
        <Logo />
      </Link>
      <div className="nav-block">
        <NavMenu />
        <a href="#subscribe">
          <Button class="btn-nav" text="Subscribe" />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
