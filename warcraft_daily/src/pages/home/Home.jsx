import "./Home.scss";
import Carousel from "./Carousel";
import HomeFeaturedPost from "./HomeFeaturedPost";
import HomeAllPosts from "./HomeAllPosts";
import JoinUs from "../../components/JoinUs";
import ResumeTabs from "./SumaryTabs";
import CategoryCardList from "./CategoryCardList";
import Partners from "../../components/Partners";
import CategorySlider from "./CategorySlider";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="home-posts">
        <HomeFeaturedPost />
        <HomeAllPosts />
      </div>
      <ResumeTabs />
      <CategoryCardList />
      <Partners />
      <CategorySlider />
      <div className="join-us-app">
        <JoinUs />
      </div>
    </div>
  );
};

export default Home;
