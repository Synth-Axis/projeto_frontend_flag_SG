import "./CategoryCardList.scss";
import demonhunter from "../../assets/media/demonhunter_icon.png";
import priest from "../../assets/media/priest_icon.png";
import mage from "../../assets/media/mage_icon.png";
import paladin from "../../assets/media/paladin_icon.png";
import demonhunterbg from "../../assets/media/demonhunter.jpg";
import shadowpriestbg from "../../assets/media/shadowpriest.jpg";
import frostmagebg from "../../assets/media/frostmage.jpg";
import paladinbg from "../../assets/media/paladin.jpg";
import Button from "../../components/Button";
import { useState } from "react";

const CategoryCardList = () => {
  let categories = [
    {
      id: 1,
      icon: demonhunter,
      title: "Demon Hunter",
      bg: demonhunterbg,
      description:
        "This guide will help you master your Havoc Demon Hunter in all aspects of the game including raids and dungeons.",
    },
    {
      id: 2,
      icon: priest,
      title: "Shadow Priest",
      bg: shadowpriestbg,
      description:
        "This guide will help you master your in all aspects of the game including raids and dungeons.",
    },
    {
      id: 3,
      icon: mage,
      title: "Frost Mage",
      bg: frostmagebg,
      description:
        "This guide will help you master your in all aspects of the game including raids and dungeons.",
    },
    {
      id: 4,
      icon: paladin,
      title: "Paladin",
      bg: paladinbg,
      description:
        "This guide will help you master your in all aspects of the game including raids and dungeons.",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("");

  const unhide = (eventArgs) => {
    let clickedCategory = eventArgs.target.id;
    if (clickedCategory === activeCategory) {
      setActiveCategory("");
    } else {
      setActiveCategory(clickedCategory);
    }
  };

  //   const getTabColor = (clickedQuestion) => {
  //     if (clickedQuestion === question) {
  //       return "selected-tab";
  //     }
  //   };

  return (
    <div>
      <div className="category-container">
        {categories.map((element) => (
          <div
            key={element.id}
            className="category-card-wrapper"
            onClick={unhide}
          >
            <img
              className="category-icon"
              src={element.icon}
              alt="Class icon"
            />
            <h3 className="category-title">{element.title}</h3>
            <p className="category-description">{element.description}</p>
          </div>
        ))}
      </div>
      <article className="article-container">
        <img
          className="article-img"
          src={demonhunterbg}
          alt="Demon Hunter Background"
        />
        <div className="article-details"></div>
      </article>
    </div>
  );
};

export default CategoryCardList;
