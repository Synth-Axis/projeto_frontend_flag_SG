import "./PostCardSlider.scss";
import PostCard from "./PostCard";
import { useState } from "react";
import PostData from "../../../src/assets/objects/PostData";

const PostCardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  let newArray = [
    PostData[currentIndex],
    PostData[currentIndex + 1],
    PostData[currentIndex + 2],
  ];

  const updateCards = (newCards) => {
    // if (currentIndex - 1 < 0) {
    //   newSlides = categories.length - 1;
    // } else if (currentIndex >= categories.length) {
    //   newSlides = 0;
    // }
    setCurrentIndex(newCards);
  };

  const handleNext = () => {
    updateCards(currentIndex + 1);
  };

  const handlePrev = () => {
    updateCards(currentIndex - 1);
  };

  return (
    <div>
      <div className="post-card-slider-container">
        <h2>What to Read Next</h2>
        <div className="post-card-slider-inner-container">
          {newArray.map(
            (element) => element && <PostCard key={element.id} data={element} />
          )}
        </div>
        <div className="post-card-slider-buttons">
          <input
            disabled={currentIndex === 0 ? true : false}
            className={`prev material-symbols-outlined ${
              currentIndex === 0 && "btn-disabled"
            }`}
            type="button"
            value="arrow_back_ios"
            onClick={handlePrev}
          />
          <input
            disabled={currentIndex + 1 === PostData.length - 2 ? true : false}
            className={`next material-symbols-outlined ${
              currentIndex + 1 === PostData.length - 1 && "btn-disabled"
            }`}
            type="button"
            value="arrow_forward_ios"
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default PostCardSlider;
