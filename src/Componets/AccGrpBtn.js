import React from "react";
import { Box, Button } from "@mui/material";
import { AccContext } from "../Context/OtherContext";
function AccGrpBtn() {
  const [showtype] = React.useContext(AccContext);
  return (
    <Box className="AccBtn">
      <Button
        style={{
          borderRadius: 0,
          backgroundColor: "#CCCCCC",
          color: "black",
          border: "1pt solid black",
        }}
        variant="outlined"
      >
        {showtype}
      </Button>
      <Button
        style={{
          borderRadius: 0,
          width: "149px",
          color: "black",
          backgroundColor: "#CCCCCC",
          border: "1pt solid black",
        }}
        variant="outlined"
      >
        Aso Accountss
      </Button>
      <Button
        style={{
          borderRadius: 0,
          width: "149px",
          color: "black",
          backgroundColor: "#CCCCCC",
          border: "1pt solid black",
        }}
        variant="outlined"
      >
        Payout
      </Button>
    </Box>
  );
}

export default AccGrpBtn;
