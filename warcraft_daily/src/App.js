import "./App.css";
import Navigation from "./Components/Navigation";
import Button from "./Components/Button";

function App() {
  return (
    <div className="general">
      <Navigation />
      <Button text="Read More >" />
      &nbsp;
      <Button text="Subscribe" />
      &nbsp;
      <Button section="btn-nav" text="Subscribe" />
    </div>
  );
}

export default App;
