import "./HomeFeaturedPost.scss";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const HomeFeaturedPost = (props) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0 });
  };

  return (
    <div className="featured-post-wrapper">
      <p className="featured-post-header">Featured Post</p>
      <div className="featured-post-inner">
        <img
          src={props.data.image}
          className="post-image"
          alt="Post Banner"
        ></img>
        <div className="post-details">
          <p>
            By <span>{props.data.author}</span> | {props.data.date}
          </p>
          <h1 className="title">{props.data.title}</h1>

          <p className="description">{props.data.description}</p>

          <Link
            to={`/blogfeaturedpost/${props.data.id}`}
            onClick={() => {
              props.handleClick(props.data.id - 1);
              scrollToTop();
            }}
          >
            <Button type="button" text="Read More >" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeFeaturedPost;
