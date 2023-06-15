import React from "react";
import { Box, Button, CircularProgress, Snackbar } from "@mui/material";
import axios from "../axios";
import { AccContext } from "../Context/OtherContext";
function PayoutLink() {
  const { values } = React.useContext(AccContext);
  const [showlogin, ] = values;
  // const [setShowType] = values2;
  const [disable, setdisable] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setLoading(true);
    axios.post("/payout/", { number: showlogin }).then((res) => {
      //console.log(res);
      setdisable(true);
      setLoading(false);
      setOpen(true);
    });
  };
  React.useEffect(() => {
    axios
      .get(`/checkpayoutshow/?number=${showlogin}`)
      .then((res) => {
        //console.log(res.data);
        if (res.data === true) {
          setdisable(false);
        }
      })
      .catch((err) => {
        //console.log(err);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="PayoutSection2">
      <Button
        disabled={disable}
        onClick={handleClick}
        variant="outlined"
        className="Payoutbtn"
        sx={{
          color: "white",
          cursor: "pointer",
          backgroundColor: "#359602",
          "&:hover": {
            backgroundColor: "#359602",
            cursor: "pointer",
          },
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
        Request Payout
      </Button>
      <Snackbar
        message="Request Sent"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={20000}
        onClose={() => setOpen(false)}
        open={open}
      />
      <Box className="PayoutBoxlink">
        <ol>
          <li> Payouts are processed on Fridays. </li>
          <li>
            {" "}
            Only request made before 2PM WAT on Friday will be processed that
            week.{" "}
          </li>
          <li>
            {" "}
            Payouts will be sent within 24 working hours (after 2PM WAT on
            Friday).{" "}
          </li>
          <li> Remember to close all trades before requesting for payouts. </li>
        </ol>
      </Box>
    </div>
  );
}

export default PayoutLink;
