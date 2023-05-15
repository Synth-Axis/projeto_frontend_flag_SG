import "./Carousel.scss";
import CarouselItem from "./CarouselItem";
import fyrak from "../assets/media/fyrakk-bg.jpg";
import dragonriding from "../assets/media/dragonriding-bg.jpg";
import augmentationevoker from "../assets/media/augmentationevoker-bg.jpg";

const Carousel = (props) => {
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
  ];

  return (
    <div className="carousel">
      {data &&
        data.map((element) => (
          <div>
            <CarouselItem key={element.id} data={element} />
            <span>Tras</span>
            <span>Frente</span>
          </div>
        ))}
    </div>
  );
};

export default Carousel;
