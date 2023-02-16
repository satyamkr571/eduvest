import React from "react";
import style from "./ReturnLegends.module.scss";

const ReturnLegends = () => {
  const legendsData = [
    { labels: "Education", colors: "#99280c", roi: "200%" },
    { labels: "Real-State", colors: "#0d6631", roi: "60%" },
    { labels: "Stock-Market", colors: "#0c4078", roi: "18%" },
    { labels: "Mutual Funds", colors: "#d16813", roi: "14%" },
    { labels: "PPF", colors: "#d4b117", roi: "9%" },
  ];

  return (
    <div className={style.legends_data_container}>
      {legendsData.map((data, index) => (
        <div key={index} className={style.legends__box}>
          <div
            className={style.legends__box__color}
            style={{ backgroundColor: data.colors }}></div>
          <div className={style.legends__box__labels}>{data.labels}</div>
          <div className={style.legends__box__roi}>{data.roi}</div>
        </div>
      ))}
    </div>
  );
};

export default ReturnLegends;
