import React from "react";
import { Card } from "antd";
import style from "./Card.module.scss";

const Cards = ({ children, className, onClick }) => {
  const classNames = `${style.card_container} ${className}`;
  return (
    <Card onClick={onClick} className={classNames}>
      {children}
    </Card>
  );
};
export default Cards;
