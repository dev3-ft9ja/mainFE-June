import React from "react";
import axios from "../axios";
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
function ReLine() {
  const [info, setInfo] = React.useState([]);
  const { values, values3 } = React.useContext(AccContext);
  const [showlogin] = values;
  // const [setShowType] = values2;
  const [showsize] = values3;

  React.useEffect(() => {
    getEquAndBalAndTime();
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

  const formatXAxis = (tickItem) => {
    if (tickItem) {
      let tickItemss = tickItem.split(" ");
      return tickItemss[0].toString();
    } else {
      return "";
    }
  };

  // const CustomTooltip = ({ active, payload, label }) => {
  //   if (active) {
  //     if (payload) {
  //       return (
  //         <div className="custom-tooltip">
  //           <p
  //             className="label"
  //             style={{ color: "black" }}
  //           >{`date : ${payload[0]?.payload.date}`}</p>
  //           <p
  //             className="label"
  //             style={{ color: "#F77E27B2" }}
  //           >{`${payload[0]?.name} : ${payload[0]?.value}`}</p>
  //           <p
  //             className="label"
  //             style={{ color: "#1D435380" }}
  //           >{`${payload[1]?.name} : ${payload[1]?.value}`}</p>
  //         </div>
  //       );
  //     }
  //     return " ";
  //   }
  //   return " ";
  // };
  return (
    <ResponsiveContainer width={"100%"} height={317}>
      <AreaChart
        data={info}
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
          minTickGap={-20}
          // axisLine={false}
          dx={35}
          dy={10}
          tickLine={false}
          tick={{ fontSize: 11 }}
          label={{
            value: "Date",
            offset: -19,
            position: "insideBottomRight",
          }}
        />
        <YAxis
          type="number"
          domain={[{ showsize }, "dataMax + 100"]}
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

export default ReLine;
