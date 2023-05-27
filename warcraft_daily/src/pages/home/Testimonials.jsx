import "./Testimonials.scss";

import { useState } from "react";

const Testimonials = (props) => {
  const [activeIndex, SetActiveIndex] = useState(0);

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

  return (
    <div className="testimonials-container">
      <div className="testimonials-sumary">
        <p className="testimonials-title">TESTIMONIALS</p>
        <h2>What people say about our blog</h2>
        <p>
          The largest World of Warcraft information site, featuring guides,
          news, and information on classes.
        </p>
      </div>

      <div className="testimonials-details-wrapper">
        {props.data &&
          props.data.map((element) => (
            <div key={element.id} className="testimonials-details">
              {activeIndex === element.id - 1 && (
                <div>
                  <h4>{element.review}</h4>
                  <div className="user-details">
                    <img src={element.photo} alt={element.name} />
                    <div className="user-inner-wrapper">
                      <h4 className="user-details-name">{element.name}</h4>
                      <p className="user-details-location">
                        {`${element.city}, `} <span>{element.country}</span>{" "}
                      </p>
                    </div>
                    <div className="buttons-container">
                      <button
                        className="arrow-key-left"
                        onClick={handleClickPrev}
                      >
                        <span className="material-symbols-outlined">west</span>
                      </button>
                      <button
                        className="arrow-key-right"
                        onClick={handleClickNext}
                      >
                        <span className="material-symbols-outlined">east</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Testimonials;
