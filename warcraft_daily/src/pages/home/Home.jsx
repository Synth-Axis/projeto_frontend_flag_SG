import "./Home.scss";
import Carousel from "./Carousel";
import HomeFeaturedPost from "./HomeFeaturedPost";
import HomeAllPosts from "./HomeAllPosts";
import JoinUs from "../../components/JoinUs";
import ResumeTabs from "./ResumeTabsTabs";
import Partners from "../../components/Partners";
import CategorySlider from "./CategorySlider";
import AuthorsList from "./AuthorsList";
import Testimonials from "./Testimonials";
import PostData from "../../assets/objects/PostData";
import Categories from "../../assets/objects/Categories";
import Users from "../../assets/objects/Users";

const Home = (props) => {
  const generateRandomPost = () => {
    let randomPost = Math.floor(Math.random() * props.data.length);
    return randomPost;
  };

  return (
    <div className="home-container">
      <Carousel
        getPostId={props.postId}
        data={PostData}
        getCarouselId={props.handleClick}
      />
      <div className="home-posts">
        <HomeFeaturedPost
          handleClick={props.handleClick}
          data={PostData[generateRandomPost()]}
        />
        <HomeAllPosts handleClick={props.postId} data={PostData} />
      </div>
      <ResumeTabs />
      <CategorySlider data={Categories} />
      <AuthorsList />
      <Partners />
      <Testimonials data={Users} />
      <JoinUs />
    </div>
  );
};

export default Home;
