import React from "react";
import { Box, Button } from "@mui/material";
import AccountsMenu from "./AccountsMenu";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
function AccountBtn() {
  return (
    <Box className="BtnGrp2 addPadding">
      <AccountsMenu />
      <Button
        className="GetAccbtn"
        sx={{ color: "black" }}
        variant="outlined"
        color="primary"
        href="/"
      >
        Get a new Account <ChevronRightSharpIcon />
      </Button>
    </Box>
  );
}

export default AccountBtn;