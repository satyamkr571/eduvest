import React from "react";
import style from "./ReturnChart.module.scss";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

const ReturnChart = () => {
  const data = {
    labels: ["Education", "Mutual Funds", "PPF", "Real-State", "Stock-Market"],
    datasets: [
      {
        label: "Investment VS Return",
        data: [200, 14, 9, 60, 18],
        backgroundColor: [
          "#99280c",
          "#d16813",
          "#d4b117",
          "#0d6631",
          "#0c4078",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className={style.chart_container}>
      <Doughnut
        data={data}
        options={{
          maintainAspectRatio: false,
          font: "normal normal 700 16/24 Montserrat",
          plugins: {
            legend: {
              position: "bottom",
              rtl: true,
              labels: {
                font: "normal normal 700 16/24 Montserrat",
                usePointStyle: true,
                pointStyle: "circle",
                padding: 20,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ReturnChart;
