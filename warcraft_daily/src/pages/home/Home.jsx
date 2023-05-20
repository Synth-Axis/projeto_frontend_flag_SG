import "./Home.scss";
import Carousel from "./Carousel";
import HomeFeaturedPost from "./HomeFeaturedPost";
import HomeAllPosts from "./HomeAllPosts";
import JoinUs from "../../components/JoinUs";
import ResumeTabs from "./SumaryTabs";
import CategoryCard from "./CategoryCard";
import Partners from "../../components/Partners";
import demonhunter from "../../assets/media/demonhunter_icon.png";
import priest from "../../assets/media/priest_icon.png";
import mage from "../../assets/media/mage_icon.png";
import paladin from "../../assets/media/paladin_icon.png";

const Home = () => {
  let categories = [
    {
      id: 1,
      icon: demonhunter,
      title: "Demon Hunter",
      description:
        "This guide will help you master your Havoc Demon Hunter in all aspects of the game including raids and dungeons.",
    },
    {
      id: 2,
      icon: priest,
      title: "Shadow Priest",
      description:
        "This guide will help you master your in all aspects of the game including raids and dungeons.",
    },
    {
      id: 3,
      icon: mage,
      title: "Frost Mage",
      description:
        "This guide will help you master your in all aspects of the game including raids and dungeons.",
    },
    {
      id: 4,
      icon: paladin,
      title: "Paladin",
      description:
        "This guide will help you master your in all aspects of the game including raids and dungeons.",
    },
  ];

  return (
    <div>
      <Carousel />
      <div className="home-posts">
        <HomeFeaturedPost />
        <HomeAllPosts />
      </div>
      <ResumeTabs />
      <div className="categories-wrapper">
        {categories &&
          categories.map((element) => (
            <CategoryCard key={element.id} data={element} />
          ))}
      </div>

      <Partners />
      <div className="join-us-app">
        <JoinUs />
      </div>
    </div>
  );
};

export default Home;
