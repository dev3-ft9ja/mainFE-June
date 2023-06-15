import React from "react";
import {
  Box,
  TextField,
  FormControl,
  Button,
  CircularProgress,
} from "@mui/material";

import axios from "../axios";
function Changepassword(props) {
  const [password1, setPassword1] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const UpdatePersonalInformation = () => {
    setLoading(true);
    axios
      .post("/auth/password/change/", {
        new_password1: password1,
        new_password2: password2,
      })
      .then((res) => {
        //console.log(res.data);
        setLoading(false);
      });
  };

  return (
    <Box
      sx={{
        width: "70%",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "white",
      }}
      className="ProfileMain"
    >
      <Box
        sx={{
          textAlign: "center",
          fontSize: "26px !important",
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          minHeight: "55px",
          backgroundColor: "white",
          borderRadius: "5px 5px 0px 0px",
          lineHeight: "60px",
          fontWeight: 494,
        }}
      >
        Security
      </Box>
      <FormControl
        sx={{
          width: "-webkit-fill-available",
          padding: "0% 7% 0% 7%",
          marginTop: "5%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          fontSize: "16px !important",
        }}
        variant="standard"
        className="ProfileInfoDetails"
      >
        <div style={{ width: "45%" }} className="ProfileInfoDetails1">
          <label style={{ paddingBottom: "5px" }}>Confirm new password</label>
          <br />
          <br />
          <TextField
            style={{ width: "100%" }}
            value={password1}
            sx={{
              "& .MuiInputBase-input": {
                // border: "1px solid #ced4da",

                background: "#FFFFFF",

                border: "0.5px solid rgba(0, 0, 0, 0.2)",
                boxShadow: "inset 0px 0px 2px rgba(0, 0, 0, 0.25)",
                borderRadius: "5px",
                height: "13px",
                width: "100%",
                fontSize: "16px !important",
              },
            }}
            onChange={(e) => setPassword1(e.target.value)}
          />
        </div>
        <div style={{ width: "45%" }} className="ProfileInfoDetails1">
          <label style={{ paddingBottom: "5px" }}>New Password</label>
          <br />
          <br />
          <TextField
            value={password2}
            style={{ width: "100%" }}
            sx={{
              "& .MuiInputBase-input": {
                // border: "1px solid #ced4da",

                background: "#FFFFFF",
                border: "0.5px solid rgba(0, 0, 0, 0.2)",
                boxShadow: "inset 0px 0px 2px rgba(0, 0, 0, 0.25)",
                borderRadius: "5px",
                height: "13px",
                fontSize: "16px !important",
              },
            }}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
      </FormControl>

      <br />
      <br />
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Button
          onClick={UpdatePersonalInformation}
          variant="contained"
          sx={{
            width: "150px",
            background: "#359602",
            color: "white",
            height: "45px",
            borderRadius: "5.1px",
            alignSelf: "center",
            textTransform: "none",
            fontSize: "16px !important",
            "&:hover": {
              background: "#359602",
            },
            marginBottom: "5%",
          }}
          endIcon={
            loading && (
              <CircularProgress
                size={12}
                sx={{
                  zIndex: 1,
                  color: "white",
                }}
              />
            )
          }
        >
          Update password
        </Button>
      </Box>
    </Box>
  );
}

export default Changepassword;
