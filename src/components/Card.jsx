import React from "react";

function Card({ children }) {
  const style = {
    backgroundColor: "pink",
    borderRadius: "5px",
    border: "1px solid red",
  };
  return <div style={style}>{children}</div>;
}

export default Card;
