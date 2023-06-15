import React, { useContext } from "react";
import {
  Box,
  Button,
  FormControl,
  Typography,
  FormHelperText,
  CircularProgress,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
// import axios from "../axios";
// import axiosInstance from "../axios";
import { AuthContext } from "../Context/AuthContext";
import { Helmet } from "react-helmet";

function Login() {
  const {
    loading,
    setLoading,
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleuserLogin,
  } = useContext(AuthContext);
  // const [loadingspin, setLoadingspin] = React.useState(false);

  return (
    <>
      <Helmet>
        <title>Login - FT9ja</title>
      </Helmet>
      <div className="LoginBox">
        <Box className="LoginForum" component="form" onSubmit={handleuserLogin}>
          <h1>Login</h1>
          <FormControl margin={"normal"}>
            {/* <InputLabel htmlFor="component-outlined">Email</InputLabel> */}
            <TextField
              type={"email"}
              label={"Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name={"email"}
            />
          </FormControl>

          <FormControl margin={"normal"}>
            {/* <InputLabel htmlFor="component-outlined">Password</InputLabel> */}
            <TextField
              type={"password"}
              label={"Password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name={"password"}
            />
          </FormControl>

          <Button
            style={{ marginTop: "15px", marginBottom: "5px", color: "white" }}
            variant="contained"
            type={"submit"}
            onClick={() => setLoading(true)}
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
            Login
          </Button>
          <FormHelperText id="component-helper-text">
            {error ? error : null}
          </FormHelperText>

          <Typography
            variant="body2"
            sx={{ textAlign: "center" }}
            color="error"
          >
            Dont have an account?{" "}
            <Link className="loginBtn" to="/register">
              Register
            </Link>
          </Typography>
        </Box>
      </div>
    </>
  );
}

export default Login;
