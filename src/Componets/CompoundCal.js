import React from "react";
import {
  Box,
  TextField,
  FormControl,
  MenuItem,
  Button,
  CircularProgress,
  InputAdornment,
} from "@mui/material";
import { ReactComponent as Compound } from "../Assets/compound.svg";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import axios from "../axios";
function CompoundCal() {
  const [account, setAccount] = React.useState(3000);
  // const [frequency, setFrequency] = React.useState("Monthly");
  const [rate, setRate] = React.useState(0);
  // const [years, setYears] = React.useState(0);
  const [months, setMonths] = React.useState(0);
  const [pip, setPip] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const handleChangeAccount = (event) => {
    setAccount(event.target.value);
  };
  const calculate = () => {
    setLoading(true);
    axios
      .post("/calcompound/", {
        account: account,
        rate: rate,
        months: months,
      })
      .then((res) => {
        //console.log(res.data);
        setLoading(false);
        setPip(res.data);
      });
  };
  const accounts = [3000, 5000, 25000];
  return (
    <Box className="pipcalc">
      <Box className="pipcalc__container">
        <Box className="pipcalctexts">
          <h2 className="CompoundingHeader">Compounding Profits Calculator</h2>
          <p style={{ paddingTop: "20px" }}>
            This calculates how much your money will grow over a period of time.
          </p>
          <br />
          <Compound width="70%" />
        </Box>
        <Box className="pipcalcdevice">
          <Box className="deviceheader">Compounding Profits Calculator</Box>
          <Box className="devicebody">
            <FormControl className="calcform" variant="standard">
              <label className="labelsigh">
                Inital Deposit{" "}
                <div className="pipcalcinfo1">
                  <InfoOutlinedIcon className="pipcalcinfoicon" />
                  <span className="compoundtiptext1">Enter your value</span>
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
                Estimated Monthly Returns{" "}
                <div className="pipcalcinfo2">
                  <InfoOutlinedIcon className="pipcalcinfoicon" />
                  <span className="compoundtiptext2">Enter your value</span>
                </div>
              </label>
              <TextField
                value={rate}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  ),
                }}
                onChange={(e) => setRate(e.target.value)}
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
              {/* <div className="compoundsec"> */}
              {/* <div> */}
              <label className="labelsigh">
                Compounding Period in Months{" "}
                <Box className="pipcalcinfo4">
                  <InfoOutlinedIcon className="pipcalcinfoicon" />
                  <span className="compoundtiptext4">Enter your value</span>
                </Box>
              </label>
              <TextField
                value={months}
                onChange={(e) => setMonths(e.target.value)}
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
              ></TextField>
              {/* </div> */}
              {/* </div> */}
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
                  color: "white",
                  height: "45px",
                  fontSize: "16px",
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
                  background: "#1D4353",
                  color: "white",
                  height: "45px",
                  borderRadius: "5px",
                  alignSelf: "center",
                  fontSize: "16px",
                  marginBottom: "15%",
                  "&:hover": {
                    background: "#1D4353",
                  },
                }}
                onClick={() => {
                  setPip(0);
                  setRate(0);
                  setMonths(0);
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

export default CompoundCal;
