import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  // useRef to access submenu container
  const container = useRef(null);
  // For width of submenu based on number of elements present
  const [columns, setColumns] = useState("col-2");

  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current; //Holds our node
    console.log(submenu);

    const { center, bottom } = location; //Destructuring
    // console.log(center, bottom);
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [location, links]);
  return (
    <aside
      ref={container}
      className={`${isSubmenuOpen ? "submenu submenu-show" : "submenu"}`}
    >
      <h4 className="submenu-page">{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url} className="link-submenu-a">
              <p className="submenu-icon">{icon}</p>
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
