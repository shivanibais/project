// import Menu from "./Menu";
import React, { useState, useEffect } from "react";
import { data } from "./data";
import Categories from "./Categories";

function App() {
  const [items, setItems] = useState(data);
  // Get all unique category values - The Set object lets you store unique values of any type. Spread operator to store as array.
  const allCategories = ["All", ...new Set(items.map((item) => item.type))];
  console.log(allCategories);

  const [type, setType] = useState(allCategories);

  const filterItems = (type) => {
    if (type === "All") {
      setItems(data);
      return;
    }
    const newItems = data.filter((item) => item.type === type);
    setItems(newItems);
  };

  return (
    <div>
      <main>
        <h2 className="heading">Our Menu</h2>
        <div className="underline"></div>

        <Categories type={type} filterItems={filterItems} />

        <div className="main-container">
          {items.map((item) => {
            const { id, name, price, desc, img } = item;
            return (
              <div key={id}>
                <div className="flex-box">
                  <img src={img} />
                  <div>
                    <h3 className="item-name">{name}</h3>
                    <p className="item-price">
                      <span>$</span>
                      {price}
                    </p>
                    <hr />
                    <p className="item-desc">{desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
