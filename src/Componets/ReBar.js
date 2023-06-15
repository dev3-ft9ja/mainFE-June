import React from "react";
import axios from "../axios";
import { AccContext } from "../Context/OtherContext";
import {
  BarChart,
  Bar,
  Tooltip,
  LabelList,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
} from "recharts";
function ReBar() {
  const [info, setInfo] = React.useState([]);
  const [neg, setNeg] = React.useState(false);
  const { values } = React.useContext(AccContext);
  const [showlogin] = values;
  // const [setShowType] = values2;
  React.useEffect(
    () => {
      axios
        .post("/getdrawdownloss/", { number: showlogin })
        .then((res) => {
          //console.log([res.data]);
          if (res.data.profit < 0) {
            //  //console.log("profit is less than 0");
            setInfo([
              {
                profit: res.data.profit * -1,
                drawdown: res.data.drawdown,
              },
            ]);
            setNeg(true);
          } else {
            setInfo([res.data]);
          }
        })
        .catch((err) => {
          //console.log(err);
        });
    },
    // }
    [showlogin]
  );

  const BalanceCustomizedLabel = (props) => {
    //console.log(props);
    const { x, y, width, height } = props;
    return (
      <text x={x + width / 2} y={y + height + 15} textAnchor="middle">
        Profit
      </text>
    );
  };

  const DrawdownCustomizedLabel = (props) => {
    //console.log(props);
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
    <ResponsiveContainer width="80%" height={224}>
      <BarChart
        data={info}
        margin={{ bottom: 25 }}
        barCategoryGap={70}
        barGap={50}
        isAnimationActiveBoolean={false}
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
        <Bar dataKey="profit">
          <LabelList content={<BalanceCustomizedLabel />} position="bottom" />
          {info.map((entry, index) => (
            <Cell
              key={index}
              fill={neg ? "white" : "#359602"}
              stroke={neg ? "red" : "#359602"}
            />
          ))}
        </Bar>
        <Bar dataKey="drawdown">
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

export default ReBar;
