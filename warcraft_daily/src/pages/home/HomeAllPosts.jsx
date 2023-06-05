import "./HomeAllPosts.scss";
import { Link } from "react-router-dom";

const HomeAllPosts = (props) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0 });
  };
  return (
    <div className="all-post-wrapper">
      <div className="all-post-header">
        <span className="all-posts-inner-title">All Posts</span>
        <Link to="/blog">
          <span className="view-all-link">View All</span>
        </Link>
      </div>
      <div className="all-posts-scroll-container">
        {props.data &&
          props.data.map((element) => (
            <Link key={element.id} to={`/blogpost/${element.id}`}>
              <div
                className="all-post-inner"
                onClick={() => {
                  props.handleClick(element.id - 1);
                  scrollToTop();
                }}
              >
                <p>
                  By <span>{element.author}</span> | {element.date}
                </p>
                <h1 className="all-post-title">{element.title}</h1>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default HomeAllPosts;
