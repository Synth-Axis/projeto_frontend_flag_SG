import { useState } from "react";
import "./CategorySlider.scss";
import demonhunter from "../../assets/media/demonhunter_icon.png";
import priest from "../../assets/media/priest_icon.png";
import mage from "../../assets/media/mage_icon.png";
import paladin from "../../assets/media/paladin_icon.png";
import demonhunterbg from "../../assets/media/demonhunter.jpg";
import shadowpriestbg from "../../assets/media/shadowpriest.jpg";
import frostmagebg from "../../assets/media/frostmage.jpg";
import paladinbg from "../../assets/media/paladin.jpg";

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
      id: 6,
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

  let indexStart = 0;
  let indexEnd = 4;

  const [currentSlides, setCurrentSlides] = useState([(indexStart, indexEnd)]);

  const updateSlides = ([newSlides]) => {
    //   // if (newIndex < 0) {
    //   //   newIndex = data.length - 1;
    //   // } else if (newIndex >= data.length) {
    //   //   newIndex = 0;
    //   // }
    setCurrentSlides(newSlides);
  };

  const handlePrev = () => {
    indexStart = indexStart - 1;
    indexEnd = indexEnd - 1;
    updateSlides([(indexStart, indexEnd)]);
  };

  const handleNext = () => {
    indexStart = indexStart + 1;
    indexEnd = indexEnd + 1;
    updateSlides([(indexStart, indexEnd)]);
  };

  return (
    <div className="category-slider-container">
      <button className="btn-prev" onClick={handlePrev}>
        &lt;
      </button>
      <button className="btn-next" onClick={handleNext}>
        &gt;
      </button>

      <div className="category-card-container">
        {currentSlides &&
          categories(currentSlides).map((element) => (
            <div key={element.id} className="card-item">
              <p>{element.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategorySlider;
