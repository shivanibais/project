import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, items }) => {
  useEffect(() => {
    let timeout = setTimeout(() => {
      removeAlert();
    }, 2000);
    // Clear out the old timeout everytime items re-render
    return () => clearTimeout(timeout);
  }, [items]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
