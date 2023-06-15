import { Typography } from "@mui/material";
import React from "react";

function TradingDaysText() {
  return (
    <div>
      <Typography> Your Daily Trading Days calendar</Typography>
      <Typography>
        {" "}
        Each box represents a day. Each green box represents a day you've traded
      </Typography>
    </div>
  );
}

export default TradingDaysText;
