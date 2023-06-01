import "./JoinUs.scss";
import Button from "./Button";
import { Link } from "react-router-dom";

const JoinUs = () => {
  return (
    <div className="join-us">
      <h2>Join our team to be a part of our story</h2>
      <p>
        Would you like to become a contributing writer or partner up with us?
      </p>

      <Link to="/contact">
        <Button type="button" text="Join Now" />
      </Link>
    </div>
  );
};

export default JoinUs;
