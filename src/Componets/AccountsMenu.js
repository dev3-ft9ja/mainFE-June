import React, { useState } from "react";
import { Menu, MenuItem, Button, Box } from "@mui/material";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import axios from "../axios";
import { AccContext } from "../Context/OtherContext";

function AccountsMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [accounts, setAccounts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const { values, values2 } = React.useContext(AccContext);
  // eslint-disable-next-line no-unused-vars
  const [showlogin, setShowlogin] = values;
  // const [setShowType] = values2;

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    //console.log(accounts);
    setAnchorEl(event.currentTarget);
    axios
      .get("/getaccnumbers/")
      .then((res) => {
        //console.log(res);
        setAccounts(res.data);
      })
      .catch((err) => {
        //console.log(err);
      });
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleShowLogin = (e) => {
    setShowlogin(e.currentTarget.value);
    //console.log(e.currentTarget.value);
  };

  return (
    <div>
      <Box onClick={handleClick} className="AccMenuGrp">
        <Button
          sx={{
            color: "white",
            border: "1pt solid white",
            height: "inherit",
            fontWeight: "bold",
            textTransform: "capitalize",
            backgroundColor: "#1D4353",
            "&.MuiButton-root:hover": {
              backgroundColor: "#1D4353",
              border: "1pt solid white",
            },
          }}
          className="AccMenuBtn"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="outlined"
        >
          My Accounts
        </Button>
        <ArrowDropDownSharpIcon
          sx={{
            border: "1pt solid",
            color: "white",
            borderColor: "white",
            height: "initial",
            backgroundColor: "#1D4353",
            borderRadius: "2px",
          }}
        />
      </Box>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {accounts.length < 1 ? (
          <div>
            <MenuItem value={"No Accounts"}>No Accounts</MenuItem>
          </div>
        ) : (
          accounts.map((account, index) => (
            <MenuItem
              onClick={(e) => {
                handleShowLogin(e);
                handleClose();
              }}
              key={index}
              value={account}
            >
              {account}
            </MenuItem>
          ))
        )}
      </Menu>
    </div>
  );
}

export default AccountsMenu;
