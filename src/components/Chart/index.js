import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import styled from "@emotion/styled";
import { glassStyle } from "../../utils/style";
import { styled } from "@mui/material/styles";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StyledLine = styled(Line)(({ theme }) => {
  return {
    ...glassStyle,
    padding: 20,
    marginTop: 15,
    transition: "all 0.25s ease-in-out",
    "&:hover": {
      backgroundColor: "rgba(12, 10, 60, 0.5)",
    },

    [theme.breakpoints.down("md")]: { padding: 10 },
  };
});

export const options = {
  responsive: true,
  scales: {
    y: {
      grid: {
        drawBorder: false,
        display: true,
        drawOnChartArea: true,
        drawTicks: false,
        borderDash: [5, 5],
        color: "lightgray",
      },
      ticks: {
        display: true,
        padding: 10,
        color: "#fff",
        font: {
          size: 11,
          style: "normal",
          lineHeight: 2,
        },
      },
    },
    x: {
      grid: {
        drawBorder: false,
        display: false,
        drawOnChartArea: false,
        drawTicks: false,
        borderDash: [5, 5],
        color: "lightgray",
      },
      ticks: {
        display: true,
        color: "#fff",
        padding: 20,
        font: {
          size: 11,
          style: "normal",
          lineHeight: 2,
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },

    title: {
      display: true,
      text: "Line Chart",
      color: "white",
      font: {
        size: 20,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      tension: 0.1,
      pointRadius: 3,
      borderWidth: 4,
      maxBarThickness: 6,
      data: labels.map(() => Math.random() * 10000),
      borderColor: "white",
      backgroundColor: "white",
    },
  ],
};

export function LineChart({ title }) {
  options.plugins.title.text = title || "Default";
  return <StyledLine options={options} data={data} />;
}
