import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "../GitGraphs.css";
import { AccContext } from "../Context/OtherContext";
import axios from "../axios";

function TradingDays() {
  const [info, setInfo] = React.useState([]);
  const { values } = React.useContext(AccContext);
  const [showlogin] = values;
  React.useEffect(() => {
    axios
      .post("/gettradingdays/", { number: showlogin })
      .then((res) => {
        //console.log(res.data);
        setInfo(
          res.data.map((item) => {
            return { date: item.date };
          })
        );
      })
      .catch((err) => {
        //console.log(err);
      });
  }, [showlogin]);

  return (
    <div style={{ margin: "7% 0% 0% 0%" }}>
      <CalendarHeatmap
        startDate={new Date("2021-12-31")}
        endDate={new Date("2022-12-31")}
        values={info}
        showWeekdayLabels={true}
      />
    </div>
  );
}

export default TradingDays;
