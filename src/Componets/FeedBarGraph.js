import React from "react";
// import axios from "../axios";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
// import { AccContext } from "../Context/OtherContext";
import { GraphContext } from "../Context/GraphContext";
import {
  BarChart,
  Bar,
  Tooltip,
  LabelList,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
} from "recharts";

function FeedBarGraph() {
  // const [info, setInfo] = React.useState([]);
  // const [showlogin] = React.useContext(AccContext);
  // const [neg, setNeg] = React.useState(false);
  let neg = false;
  let values = React.useContext(GraphContext);
  values[values.length - 1].profit < 0 ? (neg = true) : (neg = false);
  let info = values.map((item) => {
    return {
      profit: item.profit < 0 ? item.profit * -1 : item.profit,
      drawdown: item.drawdown,
    };
  });
  const BalanceCustomizedLabel = (props) => {
    const { x, y, width, height } = props;
    return (
      <text
        x={x + width / 2}
        y={y + height + 15}
        fill="black"
        textAnchor="middle"
      >
        Profit
      </text>
    );
  };

  const DrawdownCustomizedLabel = (props) => {
    const { x, y, width, height } = props;
    return (
      <text
        x={x + width / 2}
        y={y + height + 15}
        fill="black"
        textAnchor="middle"
      >
        DrawDown
      </text>
    );
  };
  return (
    <ResponsiveContainer width="100%" height={224}>
      <BarChart
        isAnimationActive={false}
        data={[info[info.length - 1]]}
        // margin={{ bottom: 2, right: 10 }}
        // width={600}
        margin={{ bottom: 25 }}
        barCategoryGap={90}
        barGap={50}
      >
        <Tooltip
          cursor={false}
          formatter={(value, name, props) => {
            if (neg && name === "profit") {
              return [`-${value}%`, name];
            } else {
              return [`${value}%`, name];
            }
          }}
        />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="profit" isAnimationActive={false}>
          <LabelList content={<BalanceCustomizedLabel />} position="bottom" />
          {info.map((entry, index) => (
            <Cell
              key={index}
              fill={neg ? "white" : "#359602"}
              stroke={neg ? "red" : "#359602"}
            />
          ))}
        </Bar>
        <Bar dataKey="drawdown" isAnimationActive={false}>
          <LabelList content={<DrawdownCustomizedLabel />} position="bottom" />
          {info.map((entry, index) => (
            <Cell
              key={index}
              fill={info.drawdown > 9.9 ? "#E63B3B" : "#FFCFCF"}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default FeedBarGraph;
