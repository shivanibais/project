import React from "react";

const Navbar = ({ linksContainerDivRef, linksRef }) => {
  return (
    <div className="nav-bar" ref={linksContainerDivRef}>
      <ul className="links-bar" ref={linksRef}>
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#">About</a>
        </li>

        <li>
          <a href="#">Projects</a>
        </li>

        <li>
          <a href="#">Contact</a>
        </li>

        <li>
          <a href="#">Profile</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
