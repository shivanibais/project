import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-section section">
      <div className="error-container">
        <h1 className="error-heading">
          Oops! Looks like you got lost on your way.
        </h1>
        <Link to="/" className="btn">
          BACK HOME
        </Link>
      </div>
    </section>
  );
};

export default Error;
