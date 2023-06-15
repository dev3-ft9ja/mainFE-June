import React from "react";
import {
  Box,
  TextField,
  FormControl,
  MenuItem,
  Button,
  CircularProgress,
} from "@mui/material";
import { ReactComponent as CalBro } from "../Assets/pip.svg";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import axios from "../axios";
function PipCal() {
  const [currency, setCurrency] = React.useState("EUR/USD");
  const [amount, setAmount] = React.useState(0);
  const [lots, setLots] = React.useState(0);
  const [pip, setPip] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const calculate = () => {
    setLoading(true);
    axios
      .post("/calpip/", { amount: amount, pair: currency, lotsize: lots })
      .then((res) => {
        //console.log(res.data);
        setLoading(false);
        setPip(res.data);
      });
  };
  const currencies = [
    "AUD/CAD",
    "AUD/CHF",
    "AUD/HKD",
    "AUD/JPY",
    "AUD/NZD",
    "AUD/SGD",
    "AUD/USD",
    "CAD/CHF",
    "CAD/HKD",
    "CAD/JPY",
    "CAD/SGD",
    "CHF/HKD",
    "CHF/JPY",
    "CHF/ZAR",
    "EUR/AUD",
    "EUR/CAD",
    "EUR/CHF",
    "EUR/CZK",
    "EUR/DKK",
    "EUR/GBP",
    "EUR/HKD",
    "EUR/HUF",
    "EUR/JPY",
    "EUR/NOK",
    "EUR/NZD",
    "EUR/PLN",
    "EUR/SEK",
    "EUR/SGD",
    "EUR/TRY",
    "EUR/USD",
    "EUR/ZAR",
    "GBP/AUD",
    "GBP/CAD",
    "GBP/CHF",
    "GBP/HKD",
    "GBP/JPY",
    "GBP/NZD",
    "GBP/PLN",
    "GBP/SGD",
    "GBP/USD",
    "GBP/ZAR",
    "HKD/JPY",
    "NZD/CAD",
    "NZD/CHF",
    "NZD/HKD",
    "NZD/JPY",
    "NZD/SGD",
    "NZD/USD",
    "SGD/CHF",
    "SGD/HKD",
    "SGD/JPY",
    "TRY/JPY",
    "USD/CAD",
    "USD/CHF",
    "USD/CNH",
    "USD/CZK",
    "USD/DKK",
    "USD/HKD",
    "USD/HUF",
    "USD/INR",
    "USD/JPY",
    "USD/MXN",
    "USD/NOK",
    "USD/PLN",
    "USD/SAR",
    "USD/SEK",
    "USD/SGD",
    "USD/THB",
    "USD/TRY",
    "USD/ZAR",
    "ZAR/JPY",
  ];
  return (
    <Box className="pipcalc">
      <Box className="pipcalc__container">
        <Box className="pipcalctexts">
          <h2>Pip Calculator</h2>
          <p>
            The pip calculator helps you calculate the pip value of any
            financial instrument you intend to trade in dollars. This also helps
            you calculate your risk per trade.
          </p>
          <CalBro width="70%" />
        </Box>
        <Box className="pipcalcdevice">
          <Box className="deviceheader">Pip Calculator</Box>
          <Box className="devicebody">
            <FormControl className="calcform" variant="standard">
              <label className="labelsigh">
                Pip Amount{" "}
                <div className="pipcalcinfo1">
                  <InfoOutlinedIcon className="pipcalcinfoicon" />
                  <span className="tooltiptext1">Enter your value</span>
                </div>
              </label>
              <TextField
                placeholder="Pip Amount"
                type="number"
                inputProps={{
                  step: 0.1,
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                }}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
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
              <label className="labelsigh">
                Currency Pair{" "}
                <div className="pipcalcinfo2">
                  <InfoOutlinedIcon className="pipcalcinfoicon" />
                  <span className="tooltiptext2">Enter your value</span>
                </div>
              </label>
              <TextField
                select
                value={currency}
                onChange={handleChange}
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
                {currencies.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <br />
              <label className="labelsigh">
                Trade Size (Lots){" "}
                <div className="pipcalcinfo3">
                  <InfoOutlinedIcon className="pipcalcinfoicon" />
                  <span className="tooltiptext3">Enter your value</span>
                </div>
              </label>
              <TextField
                placeholder="Lots"
                type="number"
                value={lots}
                onChange={(e) => setLots(e.target.value)}
                inputProps={{
                  step: 0.1,
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                }}
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
              <label className="labelsigh">
                Deposit Currency{" "}
                <div className="pipcalcinfo4">
                  <InfoOutlinedIcon className="pipcalcinfoicon" />
                  <span className="tooltiptext4">Enter your value</span>
                </div>
              </label>
              <TextField
                InputProps={{
                  readOnly: true,
                }}
                value="USD"
                onChange={handleChange}
                sx={{
                  "& .MuiInputBase-input": {
                    // border: "1px solid #ced4da",
                    fontSize: "16px",
                    width: "100%",
                    padding: "10px 12px",
                    background: "#1D4353",
                    boxShadow: "inset 0px 0px 2px rgba(0, 0, 0, 0.25)",
                    borderRadius: "5px",
                    color: "white",
                  },
                }}
              ></TextField>
              <br />
              <TextField
                InputProps={{
                  readOnly: true,
                }}
                value={`$${pip}`}
                onChange={handleChange}
                sx={{
                  "& .MuiInputBase-input": {
                    // border: "1px solid #ced4da",
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
                  borderRadius: "5px",
                  fontSize: "16px",
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
                  fontSize: "16px",
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
                  setAmount(0);
                  setLots(0);
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

export default PipCal;
