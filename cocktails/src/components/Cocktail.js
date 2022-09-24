import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ img, name, id, info, glass }) => {
  return (
    <article className="single-cocktail">
      <div className="cocktail-img">
        <img src={img} alt={name} />
      </div>
      <div className="cocktail-body">
        <h3 className="cocktail-name"> {name} </h3>
        <h4 className="cocktail-glass"> {glass}</h4>
        <p className="cocktail-info">{info}</p>
        <Link to={`/cocktail/${id}`} className="btn">
          DETAILS
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
