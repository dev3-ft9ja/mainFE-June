import React from "react";
import axios from "../axios";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  TextField,
  FormControl,
  Button,
  Typography,
  FormHelperText,
} from "@mui/material";
import { Helmet } from "react-helmet";
function Register() {
  let navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password1, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [broker, setBroker] = React.useState("");
  const [acc_size, setAccsize] = React.useState("");
  const [payout, setPayout] = React.useState("");
  const [error, setError] = React.useState("");
  const [referral_code, setReferral] = React.useState("");

  let handleRegister = (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      setError("Passwords do not match");
    } else {
      axios
        .post("/auth/registration/", {
          email,
          password1,
          firstname,
          lastname,
          phone,
          broker,
          acc_size,
          payout,
          password2,
          referral_code,
        })
        .then((res) => {
          //console.log(res);
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("refresh_token", res.data.refresh_token);
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${localStorage.getItem("access_token")}`;
          navigate("/dashboards");
        })
        .catch((err) => {
          //console.log(err.response.data);
          setError("Invalid Email or Password");
        });
    }
  };
  return (
    <>
      <Helmet>
        <title>Register - FT9ja</title>
      </Helmet>
      <div className="LoginBox">
        <Box
          component={"form"}
          className="LoginForum"
          display={"flex"}
          flexDirection={"column"}
          onSubmit={handleRegister}
          maxWidth={290}
          margin={"auto"}
          bgcolor={"white"}
          sx={{
            // marginTop: "10px",
            "& > :not(style)": { m: 1 },
          }}
        >
          <h1>Register</h1>
          <FormControl margin={"normal"}>
            {/* {/* <InputLabel htmlFor="component-outlined">firstname</InputLabel> */}
            <TextField
              type={"name"}
              label={"First Name"}
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              name={"firstname"}
              sx={{
                height: 50,
              }}
            />
          </FormControl>
          <FormControl margin={"normal"}>
            {/* {/* <InputLabel htmlFor="component-outlined">lastname</InputLabel> */}
            <TextField
              type={"name"}
              label={"Second Name"}
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              name={"lastname"}
              sx={{
                height: 50,
              }}
            />
          </FormControl>

          <FormControl margin={"normal"}>
            {/* {/* <InputLabel htmlFor="component-outlined">Email</InputLabel> */}
            <TextField
              type={"email"}
              label={"Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name={"email"}
              sx={{
                height: 50,
              }}
            />
          </FormControl>
          <FormControl margin={"normal"}>
            {/* {/* <InputLabel htmlFor="component-outlined">phone</InputLabel> */}
            <TextField
              type={"phone"}
              label={"Phone"}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              name={"phone"}
              sx={{
                height: 50,
              }}
            />
          </FormControl>
          <FormControl margin={"normal"}>
            {/* {/* <InputLabel htmlFor="component-outlined">Broker</InputLabel> */}
            <TextField
              type={"broker"}
              label={"Broker"}
              value={broker}
              onChange={(e) => setBroker(e.target.value)}
              name={"broker"}
              sx={{
                height: 50,
              }}
            />
          </FormControl>
          <FormControl margin={"normal"}>
            {/* {/* <InputLabel htmlFor="component-outlined">Account Size</InputLabel> */}
            <TextField
              type={"accsize"}
              label={"Account Size"}
              value={acc_size}
              onChange={(e) => setAccsize(e.target.value)}
              name={"accsize"}
              sx={{
                height: 50,
              }}
            />
          </FormControl>
          <FormControl margin={"normal"}>
            {/* {/* <InputLabel htmlFor="component-outlined">Payout</InputLabel> */}
            <TextField
              type={"payout"}
              label={"Payout"}
              value={payout}
              onChange={(e) => setPayout(e.target.value)}
              name={"payout"}
              sx={{
                height: 50,
              }}
            />
          </FormControl>
          <FormControl margin={"normal"}>
            {/* {/* <InputLabel htmlFor="component-outlined">Referral</InputLabel> */}
            <TextField
              type={"referral_code"}
              label={"Referral Code"}
              value={referral_code}
              onChange={(e) => setReferral(e.target.value)}
              name={"referral_code"}
              sx={{
                height: 50,
              }}
            />
          </FormControl>
          <FormControl margin={"normal"}>
            {/* {/* <InputLabel htmlFor="component-outlined">Password</InputLabel> */}
            <TextField
              type={"password"}
              label={"Password"}
              value={password1}
              onChange={(e) => setPassword(e.target.value)}
              name={"password"}
              sx={{
                height: 50,
              }}
            />
          </FormControl>

          <FormControl margin={"normal"}>
            {/* {/* <InputLabel htmlFor="component-outlined">Re-Password</InputLabel> */}
            <TextField
              type={"password"}
              label={"Re-Password"}
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              name={"password2"}
              sx={{
                height: 50,
              }}
            />
            <FormHelperText id="component-helper-text">
              {error ? error : null}
            </FormHelperText>
          </FormControl>
          <Button
            style={{ marginTop: "15px", marginBottom: "5px", color: "white" }}
            variant="contained"
            type={"submit"}
          >
            Register
          </Button>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            Already have an account?{" "}
            <Link to="/login" className="loginBtn">
              Login
            </Link>
          </Typography>
        </Box>
      </div>
    </>
  );
}

export default Register;
