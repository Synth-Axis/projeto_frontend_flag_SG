import "./CarouselItem.scss";
import Button from "../../components/Button";

const CarouselItem = (props) => {
  return (
    <div
      style={{ backgroundImage: `url(${props.data.image})` }}
      className="caroussel-item"
    >
      <div className="carrousel-details">
        <p className="posted-on">Posted on {props.data.category}</p>
        <h1 className="title">{props.data.title}</h1>
        <p className="carrousel-author">
          By <span>{props.data.author}</span> | {props.data.date}
        </p>
        <p className="description">{props.data.description}</p>
        <Button text="Read More >" />
      </div>
    </div>
  );
};

export default CarouselItem;
