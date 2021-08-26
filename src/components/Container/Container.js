import React from "react";
import "./Container.css";

function Container({ children }) {
  return <div className="containers"> {children}</div>;
}

export default Container;
