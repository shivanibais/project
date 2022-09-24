import React, { useState, useEffect } from "react";

const Tour = ({ img, title, cost, desc, id, removeItem }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <div className="container" key={id}>
        <img src={img} alt={title} width="600px" height="300px" />
        <h3>{title}</h3>
        <h4>${cost}</h4>

        <p>
          {readMore ? desc : `${desc.substring(0, 200)}...`}
          <a className="read-more" onClick={() => setReadMore(!readMore)}>
            {readMore ? " Show Less" : " Read More"}
          </a>{" "}
        </p>

        <button type="button" className="btn" onClick={() => removeItem(id)}>
          Not Interested
        </button>
      </div>
    </>
  );
};

export default Tour;
