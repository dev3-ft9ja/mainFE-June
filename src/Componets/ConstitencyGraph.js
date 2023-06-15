import { FormControl, Box, Select, MenuItem } from "@mui/material";
import React from "react";
import { Bar } from "react-chartjs-2";
import axios from "../axios";
function ConstitencyGraph() {
  const [age, setAge] = React.useState("Lots traded - Daily");
  const [lots, setLots] = React.useState([]);
  const [date, setDate] = React.useState([]);
  const [weeklots, setWeeklots] = React.useState("");
  const [weekdate, setWeekdate] = React.useState("");
  const [monthslots, setMonthslots] = React.useState("");
  const [monthsdate, setMonthdate] = React.useState("");
  const [title, setTitle] = React.useState("Lots traded - Daily");

  React.useEffect(() => {
    axios
      .get("/dailyvalues")
      .then((res) => {
        //console.log(res.data);
        setWeeklots(res.data.map((item) => item.lots));
        setWeekdate(res.data.map((item) => item.date));
        setLots(res.data.map((item) => item.lots));
        setDate(res.data.map((item) => item.date));
      })
      .catch((err) => {
        //console.log(err);
      });
    axios
      .get("/monthlyvalues")
      .then((res) => {
        //console.log(res.data);
        setMonthslots(res.data.map((item) => item.lots));
        setMonthdate(res.data.map((item) => item.date));
      })
      .catch((err) => {
        //console.log(err);
      });
  }, []);

  const handleChange = (event) => {
    setAge(event.target.value);
    setTitle(event.target.value);
    //console.log(event.target.value);
    if (event.target.value === "Lots traded - Daily") {
      setLots(weeklots);
      setDate(weekdate);
    } else if (event.target.value === "Lots traded - Monthly") {
      setLots(monthslots);
      setDate(monthsdate);
    }
  };
  let data = {
    labels: date,
    datasets: [
      {
        label: "lots traded",
        backgroundColor: "blue",
        data: lots,
      },
    ],
  };

  let options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `${title}`,
        align: "start",
        font: {
          size: 15,
          weight: "bold",
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          stepSize: 0.5,
        },
      },
    },
    layout: {
      padding: {
        left: 20,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  };

  return (
    <Box sx={{ maxWidth: "600px", border: "1pt solid #cccc", margin: "9px" }}>
      <Box
        sx={{
          border: "1pt solid #cccc",
          backgroundColor: "#cccc",
          display: "flex",
        }}
      >
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={age}
            label="Lots traded - Daily"
            onChange={handleChange}
            sx={{ backgroundColor: "#ffff" }}
          >
            <MenuItem value={"Lots traded - Daily"}>
              Lots traded - Daily
            </MenuItem>
            <MenuItem value={"Lots traded - Monthly"}>
              Lots traded - Monthly
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Bar data={data} options={options} />
    </Box>
  );
}

export default ConstitencyGraph;
