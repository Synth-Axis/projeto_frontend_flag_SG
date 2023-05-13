import Logo from "./Logo";
import NavMenu from "./NavMenu";
import Button from "./Button";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="header">
      <Logo />
      <div className="nav-block">
        <NavMenu />
        <Button section="btn-nav" text="Subscribe" />
      </div>
    </nav>
  );
};

export default Navigation;
