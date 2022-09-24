import React, { useState } from "react";
import { data } from "./data";

function App() {
  const [number, setNumber] = useState(0);
  const [paras, setParas] = useState([]);
  console.log(paras);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (number <= 1) {
      setParas(data.first());
    }
    if (number > 8) {
      setParas(data);
    }

    setParas(data.slice(0, number));

    console.log(paras);
  };
  return (
    <section className="main">
      <h2>Tired of boring lorem ipsum?</h2>
      <div>
        <form className="form-items" onClick={handleSubmit}>
          <label htmlFor="number">Paragraphs:</label>
          <input
            type="number"
            id="number"
            name="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            Generate
          </button>
        </form>
      </div>
      <article className="list">
        {paras.map((para, index) => {
          return (
            <p key={index} className="list-items">
              {para}
            </p>
          );
        })}
      </article>
    </section>
  );
}

export default App;
