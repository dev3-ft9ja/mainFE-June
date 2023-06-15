import React from "react";
import { Box } from "@mui/material";
import axios from "../axios";
import Refcodein from "../Componets/Refcodein";
import {
  BarChart,
  Bar,
  Tooltip,
  LabelList,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
function RefCode() {
  const [gdata, setGdata] = React.useState({});

  React.useEffect(() => {
    axios
      .get(`/refgraph/`)
      .then((res) => {
        //console.log(res.data);
        setGdata(res.data);
        // if (res.data === false) {
        //   setdisable(true);
        // }
      })
      .catch((err) => {
        //console.log(err);
      });
  }, []);
  const BalanceCustomizedLabel = (props) => {
    const { x, y, width } = props;
    return (
      <text
        x={x + width / 2}
        y={y - 3}
        fill="black"
        textAnchor="middle"
        // fontSize={"calc(0.9vw + 0.5vh + .1vmin)"}
      >
        Banked Payout
      </text>
    );
  };

  const DrawdownCustomizedLabel = (props) => {
    const { x, y, width } = props;
    return (
      <text
        x={x + width / 2}
        y={y - 3}
        fill="black"
        textAnchor="middle"
        // fontSize={"calc(0.9vw + 0.5vh + .1vmin)"}
      >
        Potential Payout
      </text>
    );
  };
  return (
    <div className="PayoutSection3">
      <div
        // style={{
        //   marginLeft: "10%",
        // }}
        className="RefText"
      >
        <h3
          style={{
            fontSize: "22px",
          }}
          className="RefAffiText"
        >
          Referral Code
        </h3>
        <Refcodein />
      </div>
      <Box
        style={{
          marginTop: "7%",
          height: "50%",
        }}
        className="PayoutBoxlink1"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "15%",
            alignItems: "center",
          }}
          className="PayoutBoxlinksection"
        >
          <ResponsiveContainer className={"affbar"} width={200} height={124}>
            <BarChart
              data={[gdata]}
              margin={{ bottom: 15, top: 15 }}
              barCategoryGap={10}
              barGap={70}
            >
              {/* <XAxis dataKey="name" />
            <YAxis /> */}
              <Tooltip
                cursor={false}
                formatter={(value, name, props) => {
                  return [`$${value}`, name];
                }}
              />
              <ReferenceLine y={0} stroke="#000" />
              {/* <Legend /> */}
              <Bar dataKey="banked" fill="#359602">
                <LabelList
                  content={<BalanceCustomizedLabel />}
                  position="top"
                />
              </Bar>
              <Bar dataKey="potential" fill="#216100">
                <LabelList
                  content={<DrawdownCustomizedLabel />}
                  position="top"
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <Box>
            <p
              style={{
                width: "95%",
                lineHeight: "23px",
                fontSize: "16px",
              }}
              className="AffiText"
            >
              Boost your earnings with our Affiliate Program. Banked Payout is
              the amount you have earned for referring Traders that have gone
              ahead to purchase an account. Potential Payout is the amount you
              will earn if the rest of the Traders you referred go ahead to
              purchase an account. <br /> <br />
              You are leaving money on the table! Follow up with your referees
              to get an account today.
            </p>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default RefCode;
