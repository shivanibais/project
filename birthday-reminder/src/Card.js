import React, { useState } from "react";
import { data } from "./data";

const Card = () => {
  const [people, setPeople] = useState(data);
  const removeAll = () => {
    setPeople([]);
  };

  const removeItem = (id) => {
    const oldValues = people.filter((person) => person.id !== id);
    setPeople(oldValues);
  };
  return (
    <>
      <h2> {people.length} birthdays today </h2>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div key="id" className="card">
            <img src={image} />
            <div className="cardAgain">
              <h4> {name} </h4>
              <h5> {age} years </h5>
              <h6 onClick={() => removeItem(id)}> Remove </h6>
            </div>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={removeAll}>
        Clear All
      </button>
    </>
  );
};

export default Card;
