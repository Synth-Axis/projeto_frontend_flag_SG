import "./AuthorCard.scss";
import Socials from "../../components/Socials";

const AuthorCard = (props) => {
  return (
    <div className="author-container">
      <img
        className="author-icon gradient-border"
        src={props.data.photo}
        alt={`${props.data.name} photo`}
      />

      <h3 className="author-name">{props.data.name}</h3>
      <p className="author-position">{props.data.position}</p>
      <Socials />
    </div>
  );
};

export default AuthorCard;
