import React from "react";
import style from "./Pane.module.scss";

const Pane = ({ children, className }) => {
  const classNames = `${style.pane_container} ${className}`;
  return <div className={classNames}>{children}</div>;
};

export default Pane;
