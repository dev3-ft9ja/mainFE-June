import React from "react";
import { Box, Button, Checkbox, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import ClassicCarousel from "../Componets/ClassicCarousel";
import { checkboxClasses } from "@mui/material/Checkbox";
import axios from "../axios";
import { PaymentOptions } from "../Componets/Classic";
import { Helmet } from "react-helmet";
// import { PaystackButton } from "react-paystack";
function Classic() {
  const [size, setSize] = React.useState("");
  const [broker, setBroker] = React.useState("");
  const [payout, setPayout] = React.useState("");
  const [clicked, setClicked] = React.useState(false);
  const [show, setShow] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [showPaymentOptions, setShowPaymentOptions] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const token = localStorage.getItem("access_token");
  let newsize = size * 1;
  // const publicKey = "pk_live_45cb4ea56402832c4859a716fafa44439ef2c6a5";
  //console.log(size);
  if (size === "25000") {
    //console.log("25000 omo");
    newsize = 180000;
  } else if (size === "5000") {
    //console.log("5000 omo");
    newsize = 45000;
  } else if (size === "3000") {
    //console.log("5000 omo");
    newsize = 30000;
  } else {
    newsize = size;
  }
  // const componentProps = {
  //   amount: newsize * 100,
  //   email,
  //   publicKey,
  //   text: "Pay With Paystack",
  //   onSuccess: () => alert("Thanks for doing business with us!"),
  //   onClose: () =>
  //     alert("Are you sure you don't want to complete your purchase?"),
  // };
  const makeAccount = () => {
    //console.log(size, broker, payout);
    setLoading(true);
    // setShowPaymentOptions(true);
    axios
      .post("/getnewacc/", {
        acc_size: size,
        broker: broker,
        payout: payout,
        typeofaccount: "zuma",
      })
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setShowPaymentOptions(true);
      });
  };
  React.useEffect(() => {
    if (size && broker && payout && clicked) {
      setShow(false);
    } else {
      setShow(true);
    }
    axios.get("/profile/").then((res) => {
      setEmail(res.data.user.email);
    });
  }, [broker, clicked, payout, size]);

  return (
    <>
      <Helmet>
        <title>Classic - FT9ja</title>
      </Helmet>
      <Box>
        <Box className="Landing">
          <Box
            sx={{
              paddingY: 2,
              paddingLeft: 1,
            }}
          >
            {token ? (
              <Button
                className="Btn"
                sx={{
                  position: "absolute",
                  float: "right",
                  fontSize: 18,
                  textTransform: "none",
                  background: "#359602",
                  " &:hover": {
                    backgroundColor: "#359602",
                  },
                }}
                variant="contained"
                href="/dashboards"
              >
                Dashboard
              </Button>
            ) : (
              <Button
                className="Btn"
                sx={{
                  float: "right",
                  fontSize: 18,
                  textTransform: "none",
                  background: "#359602",
                  " &:hover": {
                    backgroundColor: "#359602",
                  },
                }}
                variant="contained"
                href="/login"
              >
                Login
              </Button>
            )}
          </Box>
          <Box className="Landingheader">
            <h1>FT9ja Classic</h1>
            <p className="landp">
            Signing up takes less than a minute. Select an Account Size and start trading within 24 hours
            </p>
            <Button
              className="landbtn"
              sx={{
                background: "#359602",
                " &:hover": {
                  backgroundColor: "#359602",
                },
                textTransform: "none",
              }}
              variant="contained"
            >
              Let’s start
            </Button>
          </Box>
          <br />
          <br />
          <ClassicCarousel />
          <br />
          <Box>
            <Box
              sx={{
                width: "100%",
                height: "191px",
                borderTop: "1px solid #E5E5E5",
                borderBottom: "1px solid #E5E5E5",
              }}
              className="sections"
            >
              <Box sx={{ marginLeft: "7%" }}>
                <p className="classicp">(1) Choose Account Size</p>
                <br />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "58%",
                  }}
                  className="classicbtns"
                >
                  <Button
                    onClick={() => {
                      //console.log("clicked");
                      setSize("3000");
                    }}
                    variant="contained"
                    sx={{
                      background: size === "3000" ? "#359602" : "#3596021a",
                      color: size === "3000" ? "#fff" : "#000",
                    }}
                  >
                    $3000
                  </Button>
                  <Button
                    onClick={() => {
                      //console.log("clicked");
                      setSize("5000");
                    }}
                    variant="contained"
                    sx={{
                      background: size === "5000" ? "#359602" : "#3596021a",
                      color: size === "5000" ? "#fff" : "#000",
                    }}
                  >
                    $5000
                  </Button>
                  <Button
                    onClick={() => {
                      //console.log("clicked");
                      setSize("25000");
                    }}
                    variant="contained"
                    sx={{
                      background: size === "25000" ? "#359602" : "#3596021a",
                      color: size === "25000" ? "#fff" : "#000",
                    }}
                  >
                    $25,000
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "191px",
                borderTop: "1px solid #E5E5E5",
                borderBottom: "1px solid #E5E5E5",
              }}
              className="sections"
            >
              <Box sx={{ marginLeft: "7%" }}>
                <p className="classicp">(2) Choose a Broker</p>
                <br />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "58%",
                  }}
                  className="classicbtns"
                >
                  <Button
                    onClick={() => {
                      //console.log("clicked");
                      setBroker("IC Markets");
                    }}
                    variant="contained"
                    sx={{
                      background:
                        broker === "IC Markets" ? "#359602" : "#3596021a",
                      color: broker === "IC Markets" ? "#fff" : "#000",
                    }}
                  >
                    IC Markets
                  </Button>
                  <Button
                    onClick={() => {
                      //console.log("clicked");
                      setBroker("Deriv");
                    }}
                    variant="contained"
                    sx={{
                      background: broker === "Deriv" ? "#359602" : "#3596021a",
                      color: broker === "Deriv" ? "#fff" : "#000",
                    }}
                  >
                    Deriv
                  </Button>
                  <Button
                    onClick={() => {
                      //console.log("clicked");
                      setBroker("FXTM");
                    }}
                    variant="contained"
                    sx={{
                      background: broker === "FXTM" ? "#359602" : "#3596021a",
                      color: broker === "FXTM" ? "#fff" : "#000",
                    }}
                  >
                    FXTM
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "191px",
                borderTop: "1px solid #E5E5E5",
                borderBottom: "1px solid #E5E5E5",
              }}
              className="sections"
            >
              <Box sx={{ marginLeft: "7%" }}>
                <p className="classicp">(3) Payout Frequent</p>
                <br />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "58%",
                  }}
                  className="classicbtns"
                >
                  <Button
                    onClick={() => {
                      //console.log("clicked");
                      setPayout("Monthly");
                    }}
                    sx={{
                      background:
                        payout === "Monthly" ? "#359602" : "#3596021a",
                      color: payout === "Monthly" ? "#fff" : "#000",
                    }}
                    variant="contained"
                  >
                    Monthly
                  </Button>
                  <Button
                    onClick={() => {
                      //console.log("clicked");
                      setPayout("Weekly");
                    }}
                    sx={{
                      background: payout === "Weekly" ? "#359602" : "#3596021a",
                      color: payout === "Weekly" ? "#fff" : "#000",
                    }}
                    variant="contained"
                  >
                    Weekly
                  </Button>
                  <Button
                    style={{
                      visibility: "hidden",
                    }}
                    variant="contained"
                  >
                    Weekly
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box className="agreement">
              {" "}
              <Checkbox
                className="checkbox"
                sx={{
                  [`&, &.${checkboxClasses.checked}`]: {
                    color: "#359602",
                  },
                }}
                onChange={(e) => {
                  setClicked(e.target.checked);
                }}
              />{" "}
              I have read and agreed with the{" "}
              <a className={"textLink"} href="/terms" target={"_blank"}>
                rules and terms
              </a>
            </Box>
            <br />
            <br />
            <br />
            <Box
              sx={{
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            >
              <Button
                onClick={makeAccount}
                disabled={show}
                className="agreementbtn"
                sx={{
                  " &:hover": {
                    backgroundColor: "#359602",
                  },
                  marginBottom: "10%",
                }}
                variant="contained"
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
                Proceed to Payment
              </Button>
              <br />
              {showPaymentOptions && (
                <PaymentOptions
                  email={email}
                  amount={newsize * 100}
                  closeOptions={setShowPaymentOptions}
                />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Classic;
