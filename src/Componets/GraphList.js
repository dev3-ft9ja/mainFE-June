import React from "react";
import FeedBarGraph from "./FeedBarGraph";
import FeedLineGraph from "./FeedLineGraph";
import { Box } from "@mui/material";
import axios from "../axios";
import { GraphProvider } from "../Context/GraphContext";
import { AccContext } from "../Context/OtherContext";
import IndiDates from "./IndiDates";

function GraphList(props) {
  const [info, setInfo] = React.useState([]);
  const { values } = React.useContext(AccContext);
  const [showlogin, ] = values;
  // const [setShowType] = values2;
  let num = props.age;
  //console.log(num);

  if (num === "Current Feed") {
    num = 1;
  } else if (num === "Last 7 Days") {
    num = 7;
  } else if (num === "Last Month") {
    num = 30;
  }
  React.useEffect(() => {
    axios
      .post(`/getfeed/?days=${num}`, { number: showlogin })
      .then((res) => {
        setInfo(res.data);
        //console.log(num);
        //console.log(res.data);
      })
      .catch((err) => {
        //console.log(err);
      });
    return () => {};
  }, [num, showlogin]);

  return (
    <Box>
      {info.map((feed, index) => {
        return (
          <GraphProvider value={feed} key={index}>
            <Box className="Feed">
              <IndiDates />
              <div className="FeedGraphs">
                <Box className="FeedBarGraph">
                  <FeedBarGraph />
                </Box>
                <Box
                  sx={{ marginTop: "72px", marginBottom: "72px" }}
                  className="LineGraph3"
                >
                  <FeedLineGraph />
                </Box>
              </div>
            </Box>
          </GraphProvider>
        );
      })}
    </Box>
  );
}

export default GraphList;
