import "./HomeFeaturedPost.scss";
import Button from "../../components/Button";
import fyrak from "../../assets/media/fyrakk-bg.jpg";
import dragonriding from "../../assets/media/dragonriding-bg.jpg";
import augmentationevoker from "../../assets/media/augmentationevoker-bg.jpg";
import gearupgrade from "../../assets/media/gearupgrade-bg.jpg";
import greatvault from "../../assets/media/greatvault-bg.jpg";
import catalyst from "../../assets/media/catalyst-bg.jpg";

const HomeFeaturedPost = () => {
  const data = [
    {
      id: 1,
      image: fyrak,
      category: "Events",
      title: "Fyrakk Assaults",
      author: "Synthaxis",
      date: "May 1, 2023",
      description:
        "Fyrakk Assaults are one way of obtaining gear for alts in Patch 10.1, Embers of Neltharion, as well as a way to obtain Drake's Shadowflame Crest to upgrade lower gear to ilvl424.",
    },
    {
      id: 2,
      image: dragonriding,
      category: "Guides",
      title: "Dragon Riding",
      author: "Jahel",
      date: "May 7, 2023",
      description:
        "Dragonriding is one of the new systems coming in Dragonflight, a new flying system that allows you to fly much faster than usual. Although players go through a tutorial when first learning how to Dragonride, you might still be left with questions on how the system works. In this guide, we delve through the very basics of Dragonriding, so you can learn the ins and outs of the system and become a better rider!",
    },
    {
      id: 3,
      image: augmentationevoker,
      category: "Classes",
      title: "Augmentation Evoker",
      author: "Elethriel",
      date: "May 12, 2023",
      description:
        "Augmentation Evokers deliver their damage in a wholly unique way. They act as force multipliers, increasing their group's capabilities (and damage output) significantly.",
    },
    {
      id: 4,
      image: gearupgrade,
      category: "Seasons",
      title: "Item Level & Gear Upgrades",
      author: "Perky, The Pug",
      date: "May 17, 2023",
      description:
        "You can upgrade any current season piece of gear when you obtain it as long as you have the required materials; no unlock is required. However, while completing the first chapter of the Patch 10.1 campaign, you'll have a brief tutorial about the upgrade system, which provides a couple of free materials.",
    },
    {
      id: 5,
      image: greatvault,
      category: "Seasons",
      title: "The Great Vault",
      author: "Jahel",
      date: "May 2, 2023",
      description:
        "The Great Vault is a weekly reward chest, providing players with an extra piece of gear for completing activities in Raids, Mythic+, and PvP. In this guide, we will explain the objectives you must complete to unlock Great Vault rewards, how to improve the iLevel of your Great Vault rewards, and what your options are if you don't like your choices.",
    },
    {
      id: 6,
      image: catalyst,
      category: "Classes",
      title: "Revival Catalyst Guide",
      author: "Synthaxis",
      date: "May 16, 2023",
      description:
        "The Revival Catalyst allows players to turn in a non-set piece gear item and receive a set piece of the same item level in return. This guide covers all you need to know about the Catalyst, including what it is, where it is, what you need to use it, and what it can do for you.",
    },
  ];

  //Extra
  //   const [randomPost, setRandomPost] = useState();
  //   setRandomPost(Math.floor(data.length * Math.random()));

  return (
    <div className="featured-post-wrapper">
      <p className="featured-post-header">Featured Post</p>
      <div className="featured-post-inner">
        <img src={data[1].image} className="post-image" alt="Post Banner"></img>
        <div className="post-details">
          <p>
            By <span>{data[1].author}</span> | {data[1].date}
          </p>
          <h1 className="title">{data[1].title}</h1>

          <p className="description">{data[1].description}</p>
          <Button text="Read More >" />
        </div>
      </div>
    </div>
  );
};

export default HomeFeaturedPost;
