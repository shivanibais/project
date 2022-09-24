import React, { useState, useEffect } from "react";
import Tour from "./Tour";
import { data } from "./data";

const Tours = () => {
  const [places, setPlaces] = useState(data);
  const [isLoading, setIsLoading] = useState(false);

  const removeItem = (id) => {
    const newPlaces = places.filter((place) => place.id !== id);
    setPlaces(newPlaces);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <div className="main">
          <h2> Our Tours </h2>

          <div>
            {places.map((place) => {
              return (
                <Tour key={place.id} {...place} removeItem={removeItem}></Tour>
              );
            })}
          </div>
        </div>
      </>
    );
  }
};

export default Tours;
