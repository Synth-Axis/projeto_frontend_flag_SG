import "./CarouselItem.scss";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const CarouselItem = (props) => {
  return (
    <div
      // style={{ backgroundImage: `url(${props.data.image})` }}
      className="caroussel-item"
    >
      <img src={props.data.image} alt="Carousel item"></img>
      <div className="carrousel-details">
        <p className="posted-on">Posted on {props.data.category}</p>
        <h1 className="title">{props.data.title}</h1>
        <p className="carrousel-author">
          By <span>{props.data.author}</span> | {props.data.date}
        </p>
        <p className="description">{props.data.description}</p>
        <Link to={`/blogpost/${props.data.id}`}>
          <Button
            type="button"
            text="Read More >"
            onClick={props.handleClick}
          />
        </Link>
      </div>
    </div>
  );
};

export default CarouselItem;
