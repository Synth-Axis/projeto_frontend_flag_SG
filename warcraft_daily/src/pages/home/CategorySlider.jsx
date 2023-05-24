import "./CategorySlider.scss";
import demonhunter from "../../assets/media/demonhunter_icon.png";
import priest from "../../assets/media/priest_icon.png";
import mage from "../../assets/media/mage_icon.png";
import paladin from "../../assets/media/paladin_icon.png";
import hunter from "../../assets/media/hunter_icon.png";
import warrior from "../../assets/media/warrior_icon.png";
import demonhunterbg from "../../assets/media/demonhunter.jpg";
import shadowpriestbg from "../../assets/media/shadowpriest.jpg";
import frostmagebg from "../../assets/media/frostmage.jpg";
import paladinbg from "../../assets/media/paladin.jpg";
import hunterbg from "../../assets/media/hunter.jpg";
import warriorbg from "../../assets/media/warrior.jpg";
import CategoryDetail from "./CategoryDetail";
import { useState } from "react";

const CategorySlider = () => {
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
    {
      id: 5,
      icon: hunter,
      title: "Hunter",
      bg: hunterbg,
      description:
        "This guide will help you master your in all aspects of the game including raids and dungeons.",
      guideTitle: "Hunter is a ranged-wielding DPS.",
      guideDescription:
        "If you like taking down your enemies from afar with carefully considered, powerful shots while focusing on moving as little as possible, Marksmanship is a spec for you.",
    },
    {
      id: 6,
      icon: warrior,
      title: "Warrior",
      bg: warriorbg,
      description:
        "This guide will help you master your in all aspects of the game including raids and dungeons.",
      guideTitle: "Arms Warriors are high intensity damage dealers.",
      guideDescription:
        "Fast-paced playstyle which focuses on sustained damage rather than spikes of big burst.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  let newArray = [
    categories[currentIndex],
    categories[currentIndex + 1],
    categories[currentIndex + 2],
    categories[currentIndex + 3],
  ];

  const updateSlides = (newSlides) => {
    // if (currentIndex - 1 < 0) {
    //   newSlides = categories.length - 1;
    // } else if (currentIndex >= categories.length) {
    //   newSlides = 0;
    // }
    setCurrentIndex(newSlides);
  };

  const handleNext = () => {
    updateSlides(currentIndex + 1);
  };

  const handlePrev = () => {
    updateSlides(currentIndex - 1);
  };

  const [activeCategory, setActiveCategory] = useState("");

  const unhide = (eventArgs) => {
    let clickedCategory = eventArgs.target.id;
    if (activeCategory === clickedCategory) {
      setActiveCategory("");
    } else {
      setActiveCategory(clickedCategory);
    }
  };

  return (
    <div className="category-slider-container">
      <h2 className="choose-category">Choose A Category</h2>
      <div className="category-card-container">
        <button className="btn-prev" onClick={handlePrev}>
          &lt;
        </button>

        {newArray &&
          newArray.map((element) => (
            <div
              key={element.id}
              className={`card-item ${
                activeCategory === element.title && "card-active"
              }`}
              id={element.title}
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
        <button className="btn-next" onClick={handleNext}>
          &gt;
        </button>
      </div>
      {categories.map((element) => (
        <div key={element.id}>
          {activeCategory === element.title && (
            <CategoryDetail data={element} />
          )}
        </div>
      ))}
    </div>
  );
};

export default CategorySlider;
