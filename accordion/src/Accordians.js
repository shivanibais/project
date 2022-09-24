import React, { useState } from "react";
import { data } from "./data";
import Accordian from "./Accordian";

const Accordians = () => {
  const [list, setList] = useState(data);
  return (
    <div className="main">
      <h3>Questions And Answers About Login</h3>

      <div>
        {list.map((question) => {
          return <Accordian {...question} key={list.id} />;
        })}
      </div>
    </div>
  );
};

export default Accordians;
