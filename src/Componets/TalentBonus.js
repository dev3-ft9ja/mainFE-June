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
import { ReactComponent as Talentgirl } from "../Assets/talent.svg";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import axios from "../axios";
function TalentBonus() {
  const [account, setAccount] = React.useState(3000);
  const [frequency, setFrequency] = React.useState("Monthly");
  const [amount, setAmount] = React.useState(0);
  const [pip, setPip] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const handleChangeAccount = (event) => {
    setAccount(event.target.value);
  };
  const handleChangeFrequency = (event) => {
    setFrequency(event.target.value);
  };
  const calculate = () => {
    setLoading(true);
    axios
      .post("/caltalentbonus/", { profit: amount, frequency: frequency })
      .then((res) => {
        //console.log(res.data);
        setLoading(false);
        setPip(res.data);
      });
  };
  const accounts = [3000, 5000, 25000];
  const duration = ["Monthly", "Weekly"];
  return (
    <Box className="pipcalc">
      <Box className="pipcalc__container">
        <Box className="pipcalctexts">
          <h2>Talent Bonus</h2>
          <p>
            This is the payment you receive when trading the Zuma account. The
            talent bonus is paid weekly or monthly depending on your choice. If
            you select the weekly payout frequency, you are paid 5% of your
            profit every week. If you select the monthly payout frequency, you
            are paid 10% of your profit at the end of the month.
          </p>
          <br />
          <Talentgirl width="70%" />
        </Box>
        <Box className="pipcalcdevice">
          <Box className="deviceheader">Talent Bonus</Box>
          <Box className="devicebody">
            <FormControl className="calcform" variant="standard">
              <label className="labelsigh">
                Account size{" "}
                <div className="pipcalcinfo1">
                  <InfoOutlinedIcon className="pipcalcinfoicon" />
                  <span className="talenttooltiptext1">Enter your value</span>
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
                Payout frequency{" "}
                <div className="pipcalcinfo2">
                  <InfoOutlinedIcon className="pipcalcinfoicon" />
                  <span className="talenttooltiptext2">Enter your value</span>
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
                Stage{" "}
                <div className="pipcalcinfo3">
                  <InfoOutlinedIcon className="pipcalcinfoicon" />
                  <span className="talenttooltiptext3">Enter your value</span>
                </div>
              </label>
              <TextField
                InputProps={{
                  readOnly: true,
                }}
                value="Zuma Account"
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
                Profit{" "}
                <div className="pipcalcinfo4">
                  <InfoOutlinedIcon className="pipcalcinfoicon" />
                  <span className="talenttooltiptext4">Enter your value</span>
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
                  fontSize: "16px",
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

export default TalentBonus;
