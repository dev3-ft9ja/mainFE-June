import React from "react";
import { TextField, IconButton, Snackbar } from "@mui/material";
import axios from "../axios";
// import { AccContext } from "../Context/OtherContext";
import { FileCopy } from "@mui/icons-material";

function Refcodein() {
  const [open, setOpen] = React.useState(false);
  const [refcode, setRefcode] = React.useState("12345678");
  React.useEffect(() => {
    axios
      .get(`/profile/`)
      .then((res) => {
        //console.log(res.data.referral_code);
        setRefcode(res.data.referral_code);
        // if (res.data === false) {
        //   setdisable(true);
        // }
      })
      .catch((err) => {
        //console.log(err);
      });
  }, []);
  const handleClick = () => {
    navigator.clipboard
      .writeText(refcode)
      .then(() => {
        setOpen(true);
      })
      .catch(() => {
        alert("something went wrong");
      });
  };
  return (
    <div className="AffiCode">
      <TextField
        InputProps={{
          readOnly: true,
        }}
        value={refcode}
        className="Refcodefield"
        sx={{
          "& .MuiInputBase-input": {
            background: "#FFFFFF",
            border: "0.5px solid rgba(0, 0, 0, 0.2)",
            boxShadow: "inset 0px 0px 2px rgba(0, 0, 0, 0.25)",
            borderRadius: "5px",
            height: "13px",
            fontSize: "14px",
          },
        }}
      />
      <IconButton onClick={handleClick}>
        <FileCopy sx={{ fontSize: "calc(1.1vw + .9vh + .9vmin)" }} />
      </IconButton>
      <Snackbar
        message="Copied to clibboard"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={20000}
        onClose={() => setOpen(false)}
        open={open}
      />
    </div>
  );
}

export default Refcodein;
