import React from "react";
import {
  Box,
  
  FormControl,
  CircularProgress,
  MenuItem,
  Button,
  TextField,
} from "@mui/material";
import axios from "../axios";
function PersonalInfo() {
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    axios.get("/profile/").then((res) => {
      //console.log(res.data);
      setFirstname(res.data.user.firstname);
      setLastname(res.data.user.lastname);
      setGender(res.data.gender);
      setDob(res.data.dob);
    });
  }, []);
  const UpdatePersonalInformation = () => {
    setLoading(true);
    axios
      .patch("/profile/", {
        dob: dob,
        gender: gender,
      })
      .then((res) => {
        //console.log(res.data);
        setLoading(false);
      });
  };

  const [gender, setGender] = React.useState("");
  const genders = ["Male", "Female"];
  const handleChangeGender = (event) => {
    setGender(event.target.value);
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
          fontSize: "24px !important",
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          minHeight: "55px",
          backgroundColor: "white",
          borderRadius: "5px 5px 0px 0px",
          lineHeight: "60px",
          fontWeight: 494,
        }}
      >
        Personal Information
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
        <div className="ProfileInfoDetails1" style={{ width: "45%" }}>
          <label style={{ paddingBottom: "10px" }}>First name*</label>
          <br />
          <br />
          <TextField
            style={{ width: "100%" }}
            InputProps={{
              readOnly: true,
            }}
            value={firstname}
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
          />
        </div>
        <div className="ProfileInfoDetails1" style={{ width: "45%" }}>
          <label className="label">Last name* </label>
          <br />
          <br />
          <TextField
            InputProps={{
              readOnly: true,
            }}
            value={lastname}
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
          />
        </div>
      </FormControl>
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
        className="ProfileInfoDetails"
        variant="standard"
      >
        <div className="ProfileInfoDetails1" style={{ width: "45%" }}>
          <label className="label">Date of Birth* </label>
          <br />
          <br />
          <TextField
            type="date"
            format="yyyy/MM/dd"
            style={{ width: "100%" }}
            value={dob}
            onChange={(e) => setDob(e.target.value)}
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
          />
        </div>
        <div className="ProfileInfoDetails1" style={{ width: "45%" }}>
          <label className="label">Gender</label>
          <br />
          <br />
          <TextField
            select
            value={gender}
            onChange={handleChangeGender}
            style={{ width: "100%" }}
            sx={{
              "& .MuiInputBase-input": {
                // border: "1px solid #ced4da",

                background: "#FFFFFF",
                border: "0.5px solid rgba(0, 0, 0, 0.2)",
                boxShadow: "inset 0px 0px 2px rgba(0, 0, 0, 0.25)",
                borderRadius: "5px",
                height: "13px !important",
                width: "100%",
                fontSize: "16px !important",
              },
            }}
          >
            {genders.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
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
            width: "90px",
            background: "#359602",
            color: "white",
            height: "45px",
            borderRadius: "5px",
            alignSelf: "center",
            "&:hover": {
              background: "#359602",
            },
            marginBottom: "5%",
            fontSize: "16px !important",
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
          Update
        </Button>
      </Box>
    </Box>
  );
}

export default PersonalInfo;
