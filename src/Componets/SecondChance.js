import { Button, Typography } from "@mui/material";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../axios";
function SecondChance() {
  //--Toast messages--//
  const showRequestSuccess = (message) => {
    toast.success(message, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  const showRequestFailed = (message) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  const getSecondChance = () => {
    axios.post("/request2nd/").then((res) => {
      console.log(res.data);
      showRequestSuccess("Your request has been sent!");
    });
  };

  return (
    <div style={{ marginBottom: "88px", marginTop: "60px" }}>
      <ToastContainer />
      <Typography sx={{ marginTop: "9%", lineHeight: "3.5" }}>
        Click the button below to request for a
        <br />
        SecondChance Account
      </Typography>

      <Button
        variant="outlined"
        onClick={getSecondChance}
        sx={{
          marginTop: "5%",
          width: "10%",
          border: "none",
          backgroundColor: "#359602",
          color: "white",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#359602",
          },
        }}
      >
        Button
      </Button>
    </div>
  );
}

export default SecondChance;
