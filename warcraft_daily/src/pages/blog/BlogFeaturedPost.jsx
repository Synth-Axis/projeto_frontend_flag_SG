import "./BlogFeaturedPost.scss";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const BlogFeaturedPost = (props) => {
  return (
    <div className="blog-featured-post-wrapper">
      <div className="all-post-details">
        <p className="all-posts-posted-on">FEATURED POST</p>
        <h1 className="all-posts-title">{props.data.title}</h1>
        <p className="all-posts-author">
          By <span>{props.data.author}</span> | {props.data.date}
        </p>
        <p className="all-posts-description">{props.data.description}</p>
        <Link
          key={props.data.id}
          to={`/blogfeaturedpost/${props.data.id}`}
          onClick={() => {
            props.handleClick(props.data.id - 1);
          }}
        >
          <Button type="button" text="Read More >" />
        </Link>
      </div>
      <div className="post-image-container">
        <img src={props.data.image} alt="Post scenario" />
      </div>
    </div>
  );
};

export default BlogFeaturedPost;
