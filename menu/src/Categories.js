import React from "react";

const Categories = ({ type, filterItems }) => {
  return (
    <nav>
      {type.map((category, index) => {
        return (
          <a onClick={() => filterItems(category)} key={index}>
            {category}
          </a>
        );
      })}
    </nav>
  );
};

export default Categories;
