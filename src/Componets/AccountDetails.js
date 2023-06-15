import React from "react";
import { Box } from "@mui/material";
import { AccContext } from "../Context/OtherContext";
import axios from "../axios";
function AccountDetails() {
  const [info, setInfo] = React.useState([]);
  const { values, values2 } = React.useContext(AccContext);
  const [showlogin, setShowlogin] = values;
  // eslint-disable-next-line no-unused-vars
  const [showtype, setShowType] = values2;
  React.useEffect(() => {
    axios.get("/getaccdetails/").then((res) => {
      //console.log(res.data);
      if (res.data.length === 1) {
        setInfo(res.data[0].acc);
        setShowlogin(res.data[0].acc.number);
        setShowType(res.data[0].acc.typeofaccount);
      } else {
        axios.get(`/getaccdetailsbynum/?number=${showlogin}`).then((res) => {
          //console.log(res.data[0].acc);
          setInfo(res.data[0].acc);
          //console.log(res.data[0].acc.typeofaccount, setShowType);
          setShowType(res.data[0].acc.typeofaccount);
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showlogin]);
  return (
    <Box className="Accdetails">
      <Box className="AccHead">Account Details</Box>
      <p className="AccText">
        <span style={{ fontWeight: "bold" }}>Platform: </span>
        <span style={{ fontWeight: "375" }}> {info.platform}</span>
        <br />
        <span style={{ fontWeight: "bold" }}>Login: </span>
        <span style={{ fontWeight: "375" }}> {info.number}</span>
        <br />
        <span style={{ fontWeight: "bold" }}>Password: </span>
        <span style={{ fontWeight: "375" }}> {info.password}</span>
        <br />
        <span style={{ fontWeight: "bold" }}>Server: </span>
        <span style={{ fontWeight: "375" }}> {info.broker}</span>
        <br />
        <span style={{ fontWeight: "bold" }}>Account Size: </span>
        <span style={{ fontWeight: "375" }}> {info.acc_size}</span>
      </p>
    </Box>
  );
}

export default AccountDetails;
