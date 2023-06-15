import React from "react";
import { Button } from "@mui/material";

function logout() {
  const handlelogout = () => {
    localStorage.setItem("access_token", "");
    localStorage.setItem("refresh_token", "");
    window.location.href = "https://old.ft9ja.com/login";
  };
  return (
    <div>
      <Button
        onClick={handlelogout}
        variant="contained"
        sx={{
          float: "right",
          width: "150px",
          background: "red",
          color: "white",
          height: "45px",
          borderRadius: "5.1px",
          alignSelf: "center",
          textTransform: "none",
          fontSize: "16px !important",
          "&:hover": {
            background: "red",
          },
          marginBottom: "5%",
        }}
      >
        Logout
      </Button>
    </div>
  );
}

export default logout;
