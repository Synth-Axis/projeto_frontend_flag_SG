import "./StaffCard.scss";
import Socials from "./Socials";

const StaffCard = (props) => {
  return (
    <div className="staff-card">
      <div className="image-container">
        <img className="player-image" src={props.image} alt={props.name}></img>
        <div className="fade_right"></div>
      </div>

      <div className="player-text">
        <div>
          <p className="text_primary_nav">{props.name}</p>
          <p className="text_primary_strong">{props.position}</p>
        </div>

        <p className="text_primary">{props.description}</p>

        <Socials />
      </div>
    </div>
  );
};

export default StaffCard;
