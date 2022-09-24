import React, { useState, useEffect } from "react";
import Review from "./Review";

const Reviews = () => {
  return (
    <>
      <div>
        <h2 className="heading">Our Reviews</h2>
        <div className="underline"></div>
      </div>

      <Review />
    </>
  );
};

export default Reviews;
