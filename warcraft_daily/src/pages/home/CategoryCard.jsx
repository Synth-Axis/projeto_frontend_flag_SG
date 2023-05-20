import "./CategoryCard.scss";

const CategoryCard = (props) => {
  return (
    <div className="category-card-wrapper">
      <img className="category-icon" src={props.data.icon} alt="Class icon" />
      <h3 className="category-title">{props.data.title}</h3>
      <p className="category-description">{props.data.description}</p>
    </div>
  );
};

export default CategoryCard;
