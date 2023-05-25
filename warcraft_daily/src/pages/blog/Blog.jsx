import "./Blog.scss";
import BlogFeaturedPost from "./BlogFeaturedPost";
import AllPosts from "./AllPosts";
import CategorySlider from "../home/CategorySlider";
import JoinUs from "../../components/JoinUs";

const Blog = (props) => {
  const generateRandomPost = () => {
    let randomPost = Math.random() * props.data.length;
    randomPost = Math.floor(randomPost);
    return randomPost;
  };

  return (
    <div>
      <BlogFeaturedPost data={props.data[generateRandomPost()]} />
      <AllPosts handleClick={props.setPost} data={props.data} />
      <CategorySlider />
      <div className="join-us-app">
        <JoinUs />
      </div>
    </div>
  );
};

export default Blog;
