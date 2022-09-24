import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { data } from "./data";

function App() {
  const [items, setItems] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const lastIndex = items.length - 1;
    if (currentIndex < 0) {
      setCurrentIndex(lastIndex);
    }
    if (currentIndex > lastIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, items]);

  useEffect(() => {
    let slider = setInterval(() => {
      setCurrentIndex(currentIndex + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [currentIndex]);

  return (
    <div>
      <div className="heading">
        <span>/</span>
        <h2 className="title">Reviews</h2>
      </div>

      <div className="main">
        {items.map((item, personIndex) => {
          const { id, img, name, role, quote } = item;
          let position = "nextSlide";
          if (personIndex === currentIndex) {
            position = "activeSlide";
          }
          if (
            personIndex === currentIndex - 1 ||
            (currentIndex === 0 && personIndex === items.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <div class="item" key={id}>
                <img src={img} alt={name} />
                <h3 className="name">{name.toUpperCase()}</h3>
                <h4 className="role">{role}</h4>
                <p className="quote">{quote}</p>
                <FaQuoteRight className="quote-icon" />
              </div>
            </article>
          );
        })}

        <button
          className="prev-btn"
          onClick={() => setCurrentIndex(currentIndex - 1)}
        >
          <FaChevronLeft className="left-chevron" />
        </button>
        <button
          className="next-btn"
          onClick={() => setCurrentIndex(currentIndex + 1)}
        >
          <FaChevronRight className="right-chevron" />
        </button>
      </div>
    </div>
  );
}

export default App;
