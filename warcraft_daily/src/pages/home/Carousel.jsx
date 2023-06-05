import "./Carousel.scss";
import CarouselItem from "./CarouselItem";
import { useState, useEffect, useRef } from "react";

const Carousel = (props) => {
  const [activeIndex, SetActiveIndex] = useState(0);
  const timeoutRef = useRef(null);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = props.data.length - 1;
    } else if (newIndex >= props.data.length) {
      newIndex = 0;
    }

    SetActiveIndex(newIndex);
  };

  const handleClickPrev = () => {
    updateIndex(activeIndex - 1);
  };

  const handleClickNext = () => {
    updateIndex(activeIndex + 1);
  };

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      SetActiveIndex((state) =>
        state < props.data.length - 1 ? state + 1 : 0
      );
    }, 5000);
    return () => {
      resetTimeout();
    };
  }, [activeIndex]);

  return (
    <div className="carousel">
      <div className="inner-carousel">
        {props.data &&
          props.data.map((element) => (
            <div key={element.id}>
              {activeIndex === element.id - 1 && (
                <CarouselItem
                  key={element.id}
                  data={element}
                  // handleClick={props.getPostId(element.id - 1)}
                  handleClick={props.getCarouselId}
                />
              )}
            </div>
          ))}
        <div className="carousel-buttons">
          <button className="button-arrow prev-arrow" onClick={handleClickPrev}>
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </button>
          <div className="indicators">
            {props.data &&
              props.data.map((item, index) => (
                <button
                  className="indicator-buttons"
                  key={index}
                  onClick={() => {
                    updateIndex(index);
                  }}
                >
                  <span
                    className={`material-symbols-outlined ${
                      index === activeIndex
                        ? "indicators-symbol-active"
                        : "indicators-symbol"
                    }`}
                  >
                    radio_button_checked
                  </span>
                </button>
              ))}
          </div>

          <button className="button-arrow next-arrow" onClick={handleClickNext}>
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
