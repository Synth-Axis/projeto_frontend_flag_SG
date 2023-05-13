import "./App.css";
import Navigation from "./Components/Navigation";
import Button from "./Components/Button";
import Socials from "./Components/Socials";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="general">
      <Navigation />
      &nbsp;
      <Footer />
      &nbsp;
      <Socials />
      <Button text="Read More >" />
      &nbsp;
      <Button text="Subscribe" />
      &nbsp;
      <Button section="btn-nav" text="Subscribe" />
    </div>
  );
}

export default App;
