import "./Blog.scss";
import BlogFeaturedPost from "./BlogFeaturedPost";
import AllPosts from "./AllPosts";
import CategorySlider from "../home/CategorySlider";
import JoinUs from "../../components/JoinUs";
import Categories from "../../assets/objects/Categories";

const Blog = (props) => {
  const generateRandomPost = () => {
    let randomPost = Math.floor(Math.random() * props.data.length);
    return randomPost;
  };

  return (
    <div className="blog-container">
      <BlogFeaturedPost data={props.data[generateRandomPost()]} />
      <AllPosts handleClick={props.postId} data={props.data} />
      <CategorySlider data={Categories} />
      <JoinUs />
    </div>
  );
};

export default Blog;
