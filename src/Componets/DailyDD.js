import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "../GitGraphs.css";
import { AccContext } from "../Context/OtherContext";
import axios from "../axios";
function DailyDD() {
  const [info, setInfo] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [val, setVal] = React.useState("");
  const { values } = React.useContext(AccContext);
  const [showlogin] = values;
  // const [setShowType] = values2;
  React.useEffect(() => {
    axios
      .post("/getdailyddloss/", { number: showlogin })
      .then((res) => {
        //console.log(res.data);
        setInfo(
          res.data.map((item) => {
            return { date: item.date, drawdown: item.drawdown };
          })
        );
      })
      .catch((err) => {
        //console.log(err);
      });
    //console.log("info:", info);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showlogin]);

  let handleClick = (value) => {
    if (value === null) {
      setOpen2(true);
      setVal("no drawdowns for this day");
    } else {
      setOpen(true);
      setVal(value);
      //console.log(value);
    }
  };

  return (
    <div style={{ margin: "7% 0% 0% 0%" }}>
      <dialog
        onClick={() => {
          setOpen(false);
        }}
        open={open}
      >
        <div>
          Had a Drawdown of {val.drawdown}% on {val.date}
          <br />
          <br />
          <span>Click to close</span>
        </div>
      </dialog>
      <dialog
        onClick={() => {
          setOpen2(false);
        }}
        open={open2}
      >
        <div>
          No drawdowns for this day
          <br />
          <br />
          <span>Click to close</span>
        </div>
      </dialog>
      <CalendarHeatmap
        startDate={new Date("2021-12-31")}
        endDate={new Date("2022-12-31")}
        values={info}
        onClick={handleClick}
        showWeekdayLabels={true}
        weekdayLabels={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          if (value.drawdown === 0) {
            return "color-scale-4";
          }
          if (value.drawdown < 5) {
            return "color-scale-3";
          }
          if (value.drawdown < 10 && value.drawdown > 5) {
            return "color-scale-2";
          }
          if (value.drawdown > 10) {
            return "color-scale-red";
          }
          return "color-scale-red";
        }}
      />
    </div>
  );
}

export default DailyDD;
