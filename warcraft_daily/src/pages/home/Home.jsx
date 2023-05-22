import "./Home.scss";
import Carousel from "./Carousel";
import HomeFeaturedPost from "./HomeFeaturedPost";
import HomeAllPosts from "./HomeAllPosts";
import JoinUs from "../../components/JoinUs";
import ResumeTabs from "./SumaryTabs";
import Partners from "../../components/Partners";
import CategorySlider from "./CategorySlider";
import AuthorsList from "./AuthorsList";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="home-posts">
        <HomeFeaturedPost />
        <HomeAllPosts />
      </div>
      <ResumeTabs />
      <CategorySlider />
      <AuthorsList />
      <Partners />
      <Testimonials />
      <div className="join-us-app">
        <JoinUs />
      </div>
    </div>
  );
};

export default Home;
