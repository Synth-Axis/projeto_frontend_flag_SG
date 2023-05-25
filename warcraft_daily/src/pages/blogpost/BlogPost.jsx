import "./BlogPost.scss";
import JoinUs from "../../components/JoinUs";
import PostCard from "./PostCard";

const BlogPost = (props) => {
  return (
    <div className="post-wrapper">
      <div>
        <div className="author-details">
          <img
            className="post-author"
            src={props.data.authorPhoto}
            alt="author"
          />
          <div>
            <p className="post-author-name">{props.data.author}</p>
            <p className="post-author-date">{props.data.date}</p>
          </div>
        </div>

        <h1>{props.data.title}</h1>
        <p className="post-category">{props.data.category}</p>
        <div className="post-background-container">
          <img src={props.data.image} alt="post scenario" />
        </div>
        <div className="post-article-wrapper">
          <h2>{props.data.subTitle1}</h2>
          <p className="post-sub-text">{props.data.subText1}</p>
          <h2>{props.data.subTitle2}</h2>
          <p className="post-sub-text">{props.data.subText2}</p>
          <h2>{props.data.subTitle3}</h2>
          <p className="post-sub-text">{props.data.subText3}</p>
        </div>
      </div>

      <PostCard data={props.data} />
      <JoinUs />
    </div>
  );
};

export default BlogPost;
