import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button className="bar-icon" onClick={openSidebar}>
        <FaBars />
      </button>

      <button className="modal-btn" onClick={openModal}>
        Show Modal
      </button>
    </main>
  );
};

export default Home;
