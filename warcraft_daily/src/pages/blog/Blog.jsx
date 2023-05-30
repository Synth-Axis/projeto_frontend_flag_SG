import "./Blog.scss";
import BlogFeaturedPost from "./BlogFeaturedPost";
import AllPosts from "./AllPosts";
import CategorySlider from "../home/CategorySlider";
import JoinUs from "../../components/JoinUs";
import Categories from "../../assets/objects/Categories";

const Blog = (props) => {
  return (
    <div className="blog-container">
      {/* <BlogFeaturedPost data={props.data[generateRandomPost()]} /> */}
      <BlogFeaturedPost
        handleClick={props.featuredPost}
        data={props.featuredPost}
      />
      <AllPosts handleClick={props.postId} data={props.data} />
      <CategorySlider data={Categories} />
      <JoinUs />
    </div>
  );
};

export default Blog;
