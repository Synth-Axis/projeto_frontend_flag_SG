import Logo from "./Logo";
import NavMenu from "./NavMenu";
import "./Navigation.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="header-wrapper">
      <nav className="header">
        <Link to="/">
          <Logo classNav="logo-nav" />
        </Link>
        <div className="nav-block">
          <NavMenu />
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
