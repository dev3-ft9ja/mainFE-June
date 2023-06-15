import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "../GitGraphs.css";
import { AccContext } from "../Context/OtherContext";
// import { Grid, Box } from "@mui/material";
import axios from "../axios";
import Carousel from "react-material-ui-carousel";
function TradingDays() {
  const [info, setInfo] = React.useState([]);
  const calendarStartDate = new Date("2022-01-01");
  const { values } = React.useContext(AccContext);
  const [showlogin] = values;
  const calendarDatesArray = [];
  for (let i = 1; i < 13; i++) {
    calendarDatesArray.push({
      start: new Date(
        Date.UTC(
          calendarStartDate.getFullYear(),
          calendarStartDate.getMonth() + i - 1,
          0
        )
      ),
      end: new Date(
        Date.UTC(
          calendarStartDate.getFullYear(),
          calendarStartDate.getMonth() + i,
          0
        )
      ),
    });
  }
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
    <Carousel
      autoPlay={false}
      animation="slide"
      indicators={true}
      navButtonsProps={{
        style: {
          backgroundColor: "#359602",
        },
      }}
    >
      {calendarDatesArray.map((date, index) => (
        // <Grid item xs={9} key={index}>
        <div style={{ margin: "6% 25% 0% 25%" }}>
          <CalendarHeatmap
            showWeekdayLabels={true}
            startDate={date.start}
            weekdayLabels={["Mon", "Mon", "Wed", "Wed", "Fri", "Fri", "Sun"]}
            endDate={date.end}
            // horizontal={false}
            values={info}
          />
        </div>
        // </Grid>
      ))}
    </Carousel>
    // </Grid>
  );
}

export default TradingDays;
