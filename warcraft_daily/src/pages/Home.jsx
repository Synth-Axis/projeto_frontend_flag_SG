import "./Home.scss";
import Carousel from "../Components/Carousel";
import HomeFeaturedPost from "../Components/HomeFeaturedPost";
import HomeAllPosts from "../Components/HomeAllPosts";
import JoinUs from "../Components/JoinUs";
import ResumeTabs from "../Components/SumaryTabs";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="home-posts">
        <HomeFeaturedPost />
        <HomeAllPosts />
      </div>
      <ResumeTabs />
      <div className="join-us-app">
        <JoinUs />
      </div>
    </div>
  );
};

export default Home;
