import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Accordian = ({ ques, ans }) => {
  const style = { fontSize: "0.65em" };
  const [icon, setIcon] = useState(true);
  const [answer, setAnswer] = useState("");

  return (
    <>
      <div key="id" className="single-item">
        <h4 className="question">{ques}</h4>
        <button
          type="button"
          className="plus-btn"
          onClick={() => {
            setIcon(!icon);
            {
              answer === "" ? setAnswer(ans) : setAnswer("");
            }
          }}
        >
          {icon === true ? <FaPlus style={style} /> : <FaMinus style={style} />}
        </button>
        <div>
          <p>{answer}</p>
        </div>
      </div>
    </>
  );
};

export default Accordian;
