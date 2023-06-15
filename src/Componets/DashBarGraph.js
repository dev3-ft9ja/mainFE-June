import React from "react";
import { Bar } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import axios from "../axios";
import { AccContext } from "../Context/OtherContext";
function DashBarGraph(props) {
  const [profit, setProfit] = React.useState("");
  const [drawdown, setDrawdown] = React.useState("");
  const { values, values2 } = React.useContext(AccContext);
  const [showlogin, ] = values;
  // const [setShowType] = values2;

  React.useEffect(
    () => {
      //console.log(showlogin);
      axios
        .post("/getdrawdownloss/", { number: showlogin })
        .then((res) => {
          //console.log(res.data);
          setProfit(res.data.profit);
          setDrawdown(res.data.drawdown);
        })
        .catch((err) => {
          //console.log(err);
        });
    }
    // }
  );

  const data = {
    labels: ["Profit", "Drawdown"],
    datasets: [
      {
        label: "Account Summary",
        data: [profit, drawdown],
        backgroundColor: ["green", "red"],
        base: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
        grid: {
          display: false,
        },
        display: false,
      },
      x: {
        grid: {
          display: false,
          borderWidth: 0,
        },
      },
    },
  };

  return <Bar options={options} data={data} />;
}

export default DashBarGraph;
