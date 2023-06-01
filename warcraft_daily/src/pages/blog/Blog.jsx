import "./Blog.scss";
import BlogFeaturedPost from "./BlogFeaturedPost";
import AllPosts from "./AllPosts";
import CategorySlider from "../home/CategorySlider";
import JoinUs from "../../components/JoinUs";
import Categories from "../../assets/objects/Categories";
import PostData from "../../assets/objects/PostData";

const Blog = (props) => {
  const generateRandomPost = () => {
    let randomPost = Math.floor(Math.random() * PostData.length);
    return randomPost;
  };

  return (
    <div className="blog-container">
      {/* <BlogFeaturedPost data={props.data[generateRandomPost()]} /> */}
      <BlogFeaturedPost
        handleClick={props.handleClick}
        data={PostData[generateRandomPost()]}
      />
      <AllPosts handleClick={props.postId} data={props.data} />
      <CategorySlider data={Categories} />
      <JoinUs />
    </div>
  );
};

export default Blog;
