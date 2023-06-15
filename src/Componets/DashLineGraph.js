import React from "react";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import axios from "../axios";
import { AccContext } from "../Context/OtherContext";

function DashLineGraph(props) {
  const [info, setInfo] = React.useState([]);
  const { values } = React.useContext(AccContext);
  const [showlogin] = values;
  // const [setShowType] = values2;

  React.useEffect(() => {
    getEquAndBalAndTime();
    //console.log(showlogin);
    let interval = setInterval(() => {
      getEquAndBalAndTime();
    }, 294000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showlogin]);

  let getEquAndBalAndTime = async () => {
    await axios
      .post("/geteqbal/", { number: showlogin })
      .then((res) => {
        //console.log(res.data);
        if (res.data.length > 0) {
          setInfo(res.data);
        } else {
          setInfo([]);
        }
      })
      .catch((err) => {
        //console.log(err);
        setInfo([]);
      });
  };

  let Equity = info.map((item) => item.equity);
  let Balance = info.map((item) => item.balance);
  let date = info.map((item) => item.date);

  let data = {
    labels: date,
    datasets: [
      {
        label: "Equity",
        data: Equity,
        backgroundColor: "#F7DBC6",
        fill: false,
        tension: 1,
        borderWidth: 3,
        borderColor: "#F77E27",
      },
      {
        label: "Balance",
        data: Balance,
        backgroundColor: "#B8C3C8",
        fill: false,
        tension: 1,
        borderWidth: 3,
        borderColor: "#1D4353CC",
      },
    ],
  };

  const options = {
    pointRadius: 0,
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        stacked: true,
        ticks: {
          display: true,
          beginAtZero: true,
        },
        grid: {
          display: true,
          borderWidth: 0.7,
          borderColor: "rgba(0, 0, 0, 0.8)",
        },
      },
      x: {
        stacked: true,
        ticks: {
          display: false,
          beginAtZero: true,
        },
        grid: {
          display: false,
          borderWidth: 0.7,
          borderColor: "black",
        },
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} width={400} height={250} />
    </div>
  );
}

export default DashLineGraph;
