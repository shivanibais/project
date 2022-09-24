import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import logo from "./images/logo.svg";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const pageName = e.target.textContent;
    const btnLocation = e.target.getBoundingClientRect();
    // Get the center and bottom of button so we can position it dynamically
    const center = (btnLocation.left + btnLocation.right) / 2;
    const bottom = btnLocation.bottom - 3; // We wanna lift our submenu 3 pixels up
    console.log(pageName, center, bottom);
    openSubmenu(pageName, { center, bottom });
  };

  const handleSubmenu = (e) => {
    // Close submenu only if the hovered element is not button
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <header>
      <img src={logo} alt="logo" />

      <nav class="links" onMouseOver={handleSubmenu}>
        <li>
          <button className="link-btn" onMouseOver={displaySubmenu}>
            products
          </button>
        </li>
        <li>
          <button className="link-btn" onMouseOver={displaySubmenu}>
            developers
          </button>
        </li>
        <li>
          <button className="link-btn" onMouseOver={displaySubmenu}>
            company
          </button>
        </li>
      </nav>

      <button className="sign-in-btn">Sign in</button>
      <button className="open-sidebar-btn" onClick={openSidebar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
