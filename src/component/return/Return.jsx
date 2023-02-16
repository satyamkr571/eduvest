import React from "react";
import style from "./Return.module.scss";
import ReturnChart from "./return_chart/ReturnChart";
import ReturnLegends from "./return_legends/ReturnLegends";
const Return = () => {
  return (
    <>
      <div className={style.return_container_header}>
        Investment VS Return
        <span
          style={{
            fontSize: "0.875rem",
            margin: "0.675rem 0rem 0rem 0.25rem",
          }}>
          (Approx)
        </span>
      </div>
      <div className={style.return_container}>
        <div className={style.return__chart_container}>
          <ReturnChart />
        </div>
        <div className={style.return__legends_container}>
          <ReturnLegends />
        </div>
      </div>
    </>
  );
};

export default Return;
