import "./StaffCard.scss";
import Socials from "../../components/Socials";

const StaffCard = (props) => {
  return (
    <div className="staff-card">
      <div className="image-container">
        <img className="player-image" src={props.image} alt={props.name}></img>
        <div className="fade_right"></div>
      </div>

      <div className="player-text">
        <div>
          <p className="name">{props.name}</p>
          <p className="position">{props.position}</p>
        </div>

        <p className="description">{props.description}</p>

        <Socials />
      </div>
    </div>
  );
};

export default StaffCard;
