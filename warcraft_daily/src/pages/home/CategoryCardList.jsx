import "./CategoryCardList.scss";
import demonhunter from "../../assets/media/demonhunter_icon.png";
import priest from "../../assets/media/priest_icon.png";
import mage from "../../assets/media/mage_icon.png";
import paladin from "../../assets/media/paladin_icon.png";
import demonhunterbg from "../../assets/media/demonhunter.jpg";
import shadowpriestbg from "../../assets/media/shadowpriest.jpg";
import frostmagebg from "../../assets/media/frostmage.jpg";
import paladinbg from "../../assets/media/paladin.jpg";
import { useState } from "react";
import CategoryDetail from "./CategoryDetail";

const CategoryCardList = () => {
  let categories = [
    {
      id: 1,
      icon: demonhunter,
      title: "Demon Hunter",
      bg: demonhunterbg,
      description:
        "This guide will help you master your Havoc Demon Hunter in all aspects of raids and dungeons.",
      guideTitle: "Dual-wielding DPS.",
      guideDescription:
        "In single target our damage is highly cooldown based, but for cleave and AoE it is more consistent relying on shorter rolling cooldowns with almost always something to hit.",
    },
    {
      id: 2,
      icon: priest,
      title: "Shadow Priest",
      bg: shadowpriestbg,
      description:
        "This guide will help you master your in all aspects of the game including raids and dungeons.",
      guideTitle: "Direct damage & DOT's spells.",
      guideDescription:
        "Ability to empower the damage of their allies, as well as themselves, focused on dealing maximum damage in burst. ",
    },
    {
      id: 3,
      icon: mage,
      title: "Frost Mage",
      bg: frostmagebg,
      description:
        "This guide will help you master your in all aspects of the game including raids and dungeons.",
      guideTitle: "Excels at sustained damage",
      guideDescription:
        "Exceptional ability to survive dangerous situations that would kill other classes thanks to mobility spells and Ice Block",
    },
    {
      id: 4,
      icon: paladin,
      title: "Paladin",
      bg: paladinbg,
      description:
        "This guide will help you master your in all aspects of the game including raids and dungeons.",
      guideTitle:
        "The Light is with me. Even in the darkest of all places... Even Here!",
      guideDescription: "Forged by valor and also by honor - For the Alliance",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("Demon Hunter");

  const unhide = (eventArgs) => {
    let clickedCategory = eventArgs.target.id;

    setActiveCategory(clickedCategory);
  };

  return (
    <div>
      <div className="category-wrapper">
        <h2 className="choose-category">Choose A Category</h2>
        <div className="category-container">
          {categories.map((element) => (
            <div
              key={element.id}
              id={element.title}
              onClick={unhide}
              className={`category-card-wrapper ${
                activeCategory === element.title && "card-active"
              }`}
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
      </div>

      {categories.map((element) => (
        <div key={element.id} className="category-details">
          {activeCategory === element.title && (
            <CategoryDetail data={element} />
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryCardList;
