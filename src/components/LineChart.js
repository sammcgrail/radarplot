import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export const options = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: "#000",
      },
    },
    y: {
      ticks: {
        color: "#000",
      },
    },
  },
};

export default function LineChart({ data }) {
  return (
    <div>
      <Line {...{ data, options }} />
    </div>
  );
}
