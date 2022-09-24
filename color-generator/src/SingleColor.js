import React, { useState, useEffect } from "react";

const SingleColor = ({ rgb, weight, hex, index }) => {
  const [alert, setAlert] = useState(false);
  // Join the three rgb array values together separated by commas
  const col = rgb.join(",");
  // The hex attribute returned by library does not have hash, so we add that
  const hexValue = `#${hex}`;

  useEffect(() => {
    let timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${col})` }}
      onClick={() => {
        setAlert(true);
        //Copying our value to the clipboard using JS
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="color-weight">{weight}%</p>
      <p className="color-hex">{hexValue}</p>
      {alert && <p className="alert">Copied to Clipboard</p>}
    </article>
  );
};

export default SingleColor;
