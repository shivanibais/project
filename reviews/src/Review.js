import React, { useState, useEffect } from "react";
import { data } from "./data";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, title, desc, img, id } = data[index];
  console.log(data.length - 1);

  const goBack = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      console.log(newIndex);
      if (newIndex < 0) {
        return data.length - 1;
      }
      return newIndex;
    });
  };

  const goNext = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      console.log(newIndex);
      if (newIndex > data.length - 1) {
        return 0;
      }
      return newIndex;
    });
  };

  const randomSlide = () => {
    setIndex((index) => {
      const newIndex = Math.floor(Math.random() * data.length);
      return newIndex;
    });
  };

  return (
    <article className="container" key={id}>
      <img src={img} className="image" />
      <span className="quote">
        <FaQuoteLeft />
      </span>
      <h3>{name}</h3>
      <h5>{title.toUpperCase()}</h5>
      <p>{desc}</p>

      <div className="nav">
        <button type="button" className="prev-btn" onClick={goBack}>
          <FaChevronLeft />
        </button>
        <button type="button" className="next-btn" onClick={goNext}>
          <FaChevronRight />
        </button>
      </div>
      <button className="surprise" onClick={randomSlide}>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
