import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  // Showing a default list on page load
  const [list, setList] = useState(new Values("red").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      <section className="main">
        <h2 id="heading"> Color Generator</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id={`${error ? "error" : null}`}
            placeholder="#f15025"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit" id="submit-btn">
            Submit
          </button>
        </form>
      </section>

      <section className="colors">
        {list.map((color, index) => {
          console.log(color);
          return (
            <SingleColor key={index} {...color} index={index} hex={color.hex} />
          );
        })}
      </section>
    </>
  );
}

export default App;
