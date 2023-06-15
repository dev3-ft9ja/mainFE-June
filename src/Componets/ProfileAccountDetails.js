import React from "react";
import { Box, TextField, FormControl } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import axios from "../axios";
function ProfileAccountDetails() {
  const [acc, setAcc] = React.useState([]);
  React.useEffect(() => {
    axios.get("/getaccdetails/").then((res) => {
      setAcc(res.data);
    });
  }, []);
  return (
    <Box
      sx={{
        width: "70%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      className="ProfileMain"
    >
      <Box
        sx={{
          textAlign: "center",
          fontSize: 20,
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          minHeight: "55px",
          backgroundColor: "white",
          borderRadius: "5px 5px 0px 0px",
          lineHeight: "60px",
          fontWeight: 494,
        }}
      >
        Account Details
      </Box>
      <Carousel
        height={542}
        sx={{
          backgroundColor: "white",
          paddingBottom: "25px",
        }}
        autoPlay={false}
        swipeable={false}
        draggable={false}
        // indicators={false}
        navButtonsAlwaysVisible={false}
        navButtonsProps={{
          style: {
            backgroundColor: "rgba(33, 97, 0, 0.2)",
          },
        }}
        keyBoardControl={true}
        animation="slide"
      >
        {acc.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                marginTop: "5%",
                width: "45%",
                marginLeft: "auto",
                marginRight: "auto",
                boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
              }}
              className="ProfileAccountDetails"
            >
              <Box className="AccHead1">Account {index + 1}</Box>
              <FormControl
                sx={{
                  width: "-webkit-fill-available",
                  padding: "0% 7% 0% 7%",
                  marginTop: "5%",
                  fontSize: "16px",
                  // marginLeft: "auto",
                  // marginRight: "auto",
                  // height: "auto",
                  // border: "1px solid ",
                }}
                className="ProfileAccountForm"
                variant="standard"
              >
                <label>Platform </label>
                <br />
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  value={item.acc.platform}
                  className="ProfileAccountInput"
                  sx={{
                    "& .MuiInputBase-input": {
                      // border: "1px solid #ced4da",

                      background: "#FFFFFF",

                      border: "0.5px solid rgba(0, 0, 0, 0.2)",
                      boxShadow: "inset 0px 0px 2px rgba(0, 0, 0, 0.25)",
                      borderRadius: "5px",
                      height: "13px",
                      fontSize: "16px ",
                    },
                  }}
                />
                <br />
                <label>Login </label>
                <br />
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  value={item.acc.number}
                  className="ProfileAccountInput"
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
                />
                <br />
                <label>Server </label>
                <br />
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  value={item.acc.broker}
                  className="ProfileAccountInput"
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
                />
                <br />
                <label>Account size </label>
                <br />
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  value={item.acc.acc_size}
                  className="ProfileAccountInput"
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
                />
                <br />
                <br />
              </FormControl>
            </Box>
          );
        })}
      </Carousel>
    </Box>
  );
}

export default ProfileAccountDetails;