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
import { ReactComponent as Profitgirl } from "../Assets/profitsplit.svg";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import axios from "../axios";
function ProfitSplit() {
  const [account, setAccount] = React.useState(3000);
  const [percentage, setPercentage] = React.useState("80%");
  const [frequency, setFrequency] = React.useState("1-4 weeks");
  const [amount, setAmount] = React.useState(0);
  const [pip, setPip] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const handleChangeAccount = (event) => {
    setAccount(event.target.value);
  };
  const handleChangeFrequency = (event) => {
    setFrequency(event.target.value);
    if (event.target.value === "1-4 weeks") {
      setPercentage("80%");
    }
    if (event.target.value === "4-12 weeks") {
      setPercentage("60%");
    }
    if (event.target.value === "over 12 weeks") {
      setPercentage("40%");
    }
  };
  const calculate = () => {
    setLoading(true);
    axios
      .post("/calprofitsplit/", { profit: amount, frequency: frequency })
      .then((res) => {
        //console.log(res.data);
        setLoading(false);
        setPip(res.data);
      });
  };
  const accounts = [3000, 5000, 25000];
  const duration = ["1-4 weeks", "4-12 weeks", "over 12 weeks"];
  return (
    <Box className="pipcalc">
      <Box className="pipcalc__container">
        <Box className="pipcalctexts">
          <h2>Profit Split</h2>
          <p>
            This is the payment you receive when trading the Aso account. You
            are entitled to 80% of your profit when you pass the Zuma account
            within a month of trading. If you pass the Zuma account in the
            second or third month of trading, you are entitled to 60% of your
            profit. When you pass the Zuma account after 3months of trading,
            you’re entitled to 40% of your profit. The profit split is paid
            weekly or monthly depending on your choice.
          </p>
          <br />
          <Profitgirl width="70%" />
        </Box>
        <Box className="pipcalcdevice">
          <Box className="deviceheader">Profit Split</Box>
          <Box className="devicebody">
            <FormControl className="calcform" variant="standard">
              <label className="labelsigh">
                Account size{" "}
                <div className="pipcalcinfo1">
                  <InfoOutlinedIcon className="pipcalcinfoicon" />
                  <span className="profitsplittooltiptext1">
                    Enter your value
                  </span>
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
                Stage{" "}
                <div className="pipcalcinfo2">
                  <InfoOutlinedIcon className="pipcalcinfoicon" />
                  <span className="profitsplittooltiptext2">
                    Enter your value
                  </span>
                </div>
              </label>
              <TextField
                InputProps={{
                  readOnly: true,
                }}
                value="Aso Account"
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
                Time to Aso{" "}
                <div className="pipcalcinfo3">
                  <InfoOutlinedIcon className="pipcalcinfoicon" />
                  <span className="profitsplittooltiptext3">
                    Enter your value
                  </span>
                </div>
              </label>
              <TextField
                select
                value={frequency}
                onChange={handleChangeFrequency}
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
                {duration.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <br />
              <label className="labelsigh">
                Profit{" "}
                <div className="pipcalcinfo4">
                  <InfoOutlinedIcon className="pipcalcinfoicon" />
                  <span className="profitsplittooltiptext4">
                    Enter your value
                  </span>
                </div>
              </label>
              <TextField
                placeholder="Enter your profit"
                type="number"
                inputProps={{
                  step: 0.1,
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
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
                Profit Split Percentage{" "}
                <div className="pipcalcinfo5">
                  <InfoOutlinedIcon className="pipcalcinfoicon" />
                  <span className="profitsplittooltiptext5">
                    Enter your value
                  </span>
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
                  color: "white",
                  height: "45px",
                  borderRadius: "5px",
                  alignSelf: "center",
                  marginBottom: "15%",
                  fontSize: "16px",
                  "&:hover": {
                    background: "#1D4353",
                  },
                }}
                onClick={() => {
                  setAmount(0);
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

export default ProfitSplit;
