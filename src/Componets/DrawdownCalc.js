import React from "react";
import {
  Box,
  TextField,
  FormControl,
  MenuItem,
  Button,
  CircularProgress,
} from "@mui/material";
import { ReactComponent as DrawnDown } from "../Assets/drawdown.svg";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import axios from "../axios";
function DrawdownCalc() {
  const [account, setAccount] = React.useState(3000);
  const [percentage, setPercentage] = React.useState("5%");
  const [frequency, setFrequency] = React.useState("Daily Drawdown");
  const [pip, setPip] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const handleChangeAccount = (event) => {
    setAccount(event.target.value);
  };
  const handleChangeFrequency = (event) => {
    setFrequency(event.target.value);
    if (event.target.value === "Daily Drawdown") {
      setPercentage("5%");
    }
    if (event.target.value === "Account Drawdown") {
      setPercentage("10%");
    }
  };
  const calculate = () => {
    setLoading(true);
    axios
      .post("/caldrawdown/", { account: account, frequency: frequency })
      .then((res) => {
        //console.log(res.data);
        setLoading(false);
        setPip(res.data);
      });
  };
  const accounts = [3000, 5000, 25000];
  const duration = ["Daily Drawdown", "Account Drawdown"];
  return (
    <Box className="pipcalc">
      <Box className="pipcalc__container">
        <Box className="pipcalctexts">
          <h2>Drawdown Calculator</h2>
          <p>
            This helps you calculate the maximum drawdown value on your account.
            The maximum overall drawdown allowed on all FT9ja accounts is 10% of
            the original account size while the maximum daily drawdown is 5% of
            each day’s starting equity. Note: Once this rule is violated, you
            lose your account.
          </p>
          <br />
          <DrawnDown width="70%" />
        </Box>
        <Box className="pipcalcdevice">
          <Box className="deviceheader">Drawdown Calculator</Box>
          <Box className="devicebody">
            <FormControl className="calcform" variant="standard">
              <label className="labelsigh">
                Account size{" "}
                <div className="pipcalcinfo1">
                  <InfoOutlinedIcon className="pipcalcinfoicon" />
                  <span className="drawdowntiptext1">Enter your value</span>
                </div>
              </label>
              <TextField
                select
                value={account}
                onChange={handleChangeAccount}
                sx={{
                  "& .MuiInputBase-input": {
                    // border: "1px solid #ced4da",
                    fontSize: "16px",
                    width: "100%",
                    padding: "10px 12px",
                    background: "#FEFEFE",
                    boxShadow: "inset 0px 0px 2px rgba(0, 0, 0, 0.25)",
                    borderRadius: "5px",
                  },
                }}
              >
                {accounts.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    ${option}
                  </MenuItem>
                ))}
              </TextField>
              <br />
              <label className="labelsigh">
                Drawdown Type{" "}
                <div className="pipcalcinfo2">
                  <InfoOutlinedIcon className="pipcalcinfoicon" />
                  <span className="drawdowntiptext2">Enter your value</span>
                </div>
              </label>
              <TextField
                select
                value={frequency}
                onChange={handleChangeFrequency}
                sx={{
                  "& .MuiInputBase-input": {
                    fontSize: "16px",
                    width: "100%",
                    padding: "10px 12px",
                    background: "#FEFEFE",
                    boxShadow: "inset 0px 0px 2px rgba(0, 0, 0, 0.25)",
                    borderRadius: "5px",
                  },
                }}
              >
                {duration.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <br />
              <label className="labelsigh">
                Percentage{" "}
                <div className="pipcalcinfo3">
                  <InfoOutlinedIcon className="pipcalcinfoicon" />
                  <span className="drawdowntiptext3">Enter your value</span>
                </div>
              </label>
              <TextField
                InputProps={{
                  readOnly: true,
                }}
                value={percentage}
                sx={{
                  "& .MuiInputBase-input": {
                    // border: "1px solid #ced4da",
                    fontSize: "16px",
                    width: "100%",
                    padding: "10px 12px",
                    background: "#FEFEFE",
                    boxShadow: "inset 0px 0px 2px rgba(0, 0, 0, 0.25)",
                    borderRadius: "5px",
                  },
                }}
              />
              <br />
              <TextField
                InputProps={{
                  readOnly: true,
                }}
                value={`$${pip}`}
                sx={{
                  "& .MuiInputBase-input": {
                    width: "100%",
                    height: "70px",
                    padding: "10px 12px",
                    background: "#F5F5F5",
                    boxShadow: "inset 0px 1px 2px rgba(0, 0, 0, 0.1)",
                    borderRadius: "5px",
                    textAlign: "center",
                    fontSize: "30px",
                    lineHeight: "33px",
                  },
                }}
              ></TextField>
              <br />
              <Button
                variant="outlined"
                sx={{
                  width: "100%",
                  background: "#359602",
                  fontSize: "16px",
                  color: "white",
                  height: "45px",
                  borderRadius: "5px",
                  "&:hover": {
                    background: "#359602",
                  },
                }}
                onClick={calculate}
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
                Calculate
              </Button>
              <br />
              <Button
                variant="outlined"
                sx={{
                  width: "60%",
                  fontSize: "16px",
                  background: "#1D4353",
                  color: "white",
                  height: "45px",
                  borderRadius: "5px",
                  alignSelf: "center",
                  marginBottom: "15%",
                  "&:hover": {
                    background: "#1D4353",
                  },
                }}
                onClick={() => {
                  setPip(0);
                }}
              >
                Reset
              </Button>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DrawdownCalc;
