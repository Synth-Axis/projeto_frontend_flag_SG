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

const Home = () => {
  return (
    <div className="home-container">
      <Carousel data={PostData} />
      <div className="home-posts">
        <HomeFeaturedPost />
        <HomeAllPosts data={PostData} />
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
