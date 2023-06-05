import "./AllPosts.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const AllPosts = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  let newArray = [
    props.data[currentIndex],
    props.data[currentIndex + 1],
    props.data[currentIndex + 2],
    props.data[currentIndex + 3],
    props.data[currentIndex + 4],
  ];

  const updateSlides = (newSlides) => {
    setCurrentIndex(newSlides);
  };

  const handleNext = () => {
    updateSlides(currentIndex + 5);
  };

  const handlePrev = () => {
    updateSlides(currentIndex - 5);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0 });
  };

  return (
    <div className="blog-all-posts-wrapper">
      <h1>All Posts</h1>
      {newArray.map(
        (element) =>
          element && (
            <div key={element.id} className="blog-all-posts-container">
              <div className="blog-image-container">
                <img src={element.image} alt="Post scenario" />
              </div>
              <div className="blog-all-posts-details">
                <p className="blog-all-posts-details-category">
                  {element.category}
                </p>
                <h2 className="blog-all-posts-details-title">
                  {element.title}
                </h2>
                <p className="blog-all-posts-details-description">
                  {element.description}
                </p>
                <Link
                  id={element.id}
                  to={`/blogpost/${element.id}`}
                  onClick={() => {
                    props.handleClick(element.id - 1);
                    scrollToTop();
                  }}
                >
                  Read More &gt;
                </Link>
              </div>
            </div>
          )
      )}
      <div className="all-posts-buttons">
        <input
          disabled={currentIndex === 0 ? true : false}
          className={`${currentIndex === 0 ? "btn-disabled" : ""}`}
          type="button"
          value="< Prev"
          onClick={handlePrev}
        />
        <input
          disabled={currentIndex + 1 === props.data.length - 1 ? true : false}
          className={`${
            currentIndex + 1 === props.data.length - 1 ? "btn-disabled" : ""
          }`}
          type="button"
          value="Next >"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default AllPosts;
