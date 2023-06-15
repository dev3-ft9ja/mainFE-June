import { Typography } from "@mui/material";
import React from "react";

function DailyDDText() {
  return (
    <div>
      <Typography> Your Daily Drawdown calendar</Typography>
      <Typography>
        {" "}
        Each box represents a day. Click on a box to view your drawdown for that
        day
      </Typography>
    </div>
  );
}

export default DailyDDText;
