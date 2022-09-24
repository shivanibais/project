import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getData = async () => {
    const response = await fetch(url);
    const items = await response.json();
    setData(items);
    console.log(items);
  };

  useEffect(() => {
    getData();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <h1 className="loading">Loading...</h1>;
  }
  const { title, dates, duties, company } = data[currentIndex];
  return (
    <div>
      <main>
        <h2 className="heading">Experience</h2>
        <div className="underline"></div>

        <article className="main">
          <div className="side-btn">
            {data.map((item, index) => {
              return (
                <button
                  type="button"
                  key={item.id}
                  className={`job-btn ${
                    index === currentIndex && "active-btn"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          <div>
            <h2 class="title">{title}</h2>
            <h3 className="sub-company">{company}</h3>
            <p class="dates">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className="job-duties">
                  <FaAngleDoubleRight className="angle-right" />
                  <p class="desc"> {duty}</p>
                </div>
              );
            })}
          </div>
        </article>

        <button type="button" className="more-info">
          More Info
        </button>
      </main>
    </div>
  );
}

export default App;
