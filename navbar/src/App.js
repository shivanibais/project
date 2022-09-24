import React, { useState, useRef, useEffect } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaBars,
} from "react-icons/fa";
import logo from "./coding-addict-logo.svg";

// navbar
import Navbar from "./Navbar";
console.log(window.innerWidth);

function App() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerDivRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    // Checking the height of our nav links dynamically and manually updating the container
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerDivRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerDivRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <header>
      <img src={logo} alt="logo" />
      <button onClick={() => setShowLinks(!showLinks)}>
        <FaBars className="bar-icon" />
      </button>

      <Navbar linksContainerDivRef={linksContainerDivRef} linksRef={linksRef} />

      <div className="icons">
        <button>
          <FaFacebook
            className="icon"
            onClick={() =>
              window.open("https://www.facebook.com/kshitij.dhar.9", "_blank")
            }
          />
        </button>
        <button>
          <FaTwitter
            className="icon"
            onClick={() => window.open("https://twitter.com/", "_blank")}
          />
        </button>
        <button>
          <FaLinkedin
            className="icon"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/kshitij-dhar-493a76164/",
                "_blank"
              )
            }
          />
        </button>
        <button>
          <FaGithub
            className="icon"
            onClick={() => window.open("https://github.com/Dhar15", "_blank")}
          />
        </button>
      </div>
    </header>
  );
}

export default App;
