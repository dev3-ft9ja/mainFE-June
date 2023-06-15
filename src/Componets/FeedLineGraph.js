import React from "react";
// import { Line } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { GraphContext } from "../Context/GraphContext";
import { AccContext } from "../Context/OtherContext";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
function FeedLineGraph() {
  const { values3 } = React.useContext(AccContext);
  let values = React.useContext(GraphContext);
  const [showsize] = values3;
  const formatXAxis = (tickItem) => {
    if (tickItem) {
      let hr = roundToNearestHour(new Date(tickItem.replace(/-/g, "/")));
      return hr.toString().split(" ")[4].split(":")[0];
    } else {
      return "";
    }
  };
  function roundToNearestHour(date) {
    date.setMinutes(date.getMinutes() + 30);
    date.setMinutes(0, 0, 0);

    return date;
  }
  // let omo = roundToNearestHour(new Date(values[1].date));
  //  //console.log(omo.toString().split(" ")[4].split(":")[0], "omo");
  return (
    <ResponsiveContainer width={"100%"} height={312}>
      <AreaChart
        data={values}
        margin={{ top: 50, right: 40, left: 0, bottom: 20 }}
      >
        <CartesianGrid vertical={false} />
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#F77E27B2" stopOpacity={0.7} />
            <stop offset="95%" stopColor="#D9D9D900" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1D435380" stopOpacity={0.5} />
            <stop offset="95%" stopColor="#D9D9D900" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="date"
          tickFormatter={formatXAxis}
          angle={31}
          minTickGap={-50}
          // axisLine={false}
          dx={35}
          dy={10}
          tickLine={false}
          tick={{ fontSize: 14 }}
          label={{
            value: "Time(hrs)",
            offset: -19,
            position: "insideBottomRight",
          }}
        />
        <YAxis
          type="number"
          domain={[{ showsize }, "dataMax"]}
          tickLine={false}
          tickFormatter={(tickItem) => {
            if (tickItem) {
              let newtick = Math.round(tickItem);
              return newtick;
            } else {
              return "";
            }
          }}
          tick={{ fontSize: 11 }}
          label={{
            value: "Equity/Balance",
            angle: -90,
            position: "insideLeft",
            fontSize: 15,
          }}
        />
        <Tooltip />
        {/* <Legend /> */}
        <Area
          type="monotone"
          dataKey="equity"
          stroke="#F77E27B2"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="balance"
          stroke="#1D435380"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default FeedLineGraph;
