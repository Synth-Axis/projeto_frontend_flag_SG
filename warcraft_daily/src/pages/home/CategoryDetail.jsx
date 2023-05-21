import "./CategoryDetail.scss";
import Button from "../../components/Button";

const CategoryDetail = (props) => {
  return (
    <article className="article-container">
      <img
        className="article-img"
        src={props.data.bg}
        alt="Demon Hunter Background"
      />
      <div className="article-details">
        <p className="article-spec">{props.data.title}</p>
        <p className="article-title">{props.data.guideTitle}</p>
        <p className="article-sumary">{props.data.guideDescription}</p>
        <Button text="Discover more >" />
      </div>
    </article>
  );
};

export default CategoryDetail;
