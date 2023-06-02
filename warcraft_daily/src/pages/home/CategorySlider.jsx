import "./CategorySlider.scss";
import CategoryDetail from "./CategoryDetail";
import { useState } from "react";

const CategorySlider = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  let newArray = [
    props.data[currentIndex],
    props.data[currentIndex + 1],
    props.data[currentIndex + 2],
    props.data[currentIndex + 3],
  ];

  const updateSlides = (newSlides) => {
    // if (currentIndex - 1 < 0) {
    //   newSlides = props.data.length - 1;
    // } else if (currentIndex >= props.data.length) {
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
        <button
          disabled={currentIndex === 0 ? true : false}
          className={`${currentIndex === 0 ? "btn-disabled" : "btn-prev"}`}
          onClick={handlePrev}
        >
          &lt;
        </button>
        {newArray &&
          newArray.map(
            (element) =>
              element && (
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
              )
          )}

        <button
          disabled={currentIndex + 3 === props.data.length - 1 ? true : false}
          className={`${
            currentIndex + 3 === props.data.length - 1
              ? "btn-disabled"
              : "btn-next"
          }`}
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
      {props.data.map((element) => (
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
