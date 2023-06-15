import React, { useContext } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import MainDashGraph from "../Componets/MainDashGraph";
import AsoDashboard from "./AsoDashboard";
import Payout from "./Payout";
import { AccContext } from "../Context/OtherContext";
// import MainDashGraphNodata from "../Componets/MainDashGraphNodata";
import PayoutNodata from "../Componets/PayoutNodata";
import AsoDashboardNodata from "../Componets/AsoDashboardNodata";
import { useMediaQuery } from "@mui/material";
function AccGrpBtn() {
  const [value, setValue] = React.useState(0);
  const { values, values2 } = useContext(AccContext);
  const [showlogin] = values;
  const [showtype] = values2;
  const mobile = useMediaQuery("(max-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const sel = {
    m: 0.3,
    "&.Mui-selected": {
      backgroundColor: "#1D4353",
      color: "white",
    },
    color: "black",
    backgroundColor: "white",
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ textAlign: "-webkit-center" }}>{children}</Box>
        )}
      </div>
    );
  }
  return (
    <Box className="Accounts">
      <Tabs
        scrollButtons={false}
        className="AccBtn"
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
        orientation={mobile ? "horizontal" : "vertical"}
      >
        <Tab className="Accs" sx={sel} label={showtype}></Tab>
        <Tab className="Accs" sx={sel} label="Payout"></Tab>
      </Tabs>
      <TabPanel value={value} index={0}>
        {showtype === "zuma" ? (
          <MainDashGraph />
        ) : showtype === "aso" ||
          showtype === "challenge" ||
          showtype === "verification" ? (
          <AsoDashboard />
        ) : showtype === "Select Account" ? (
          <AsoDashboardNodata />
        ) : (
          <AsoDashboard />
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {showlogin ? <Payout /> : <PayoutNodata />}
      </TabPanel>
    </Box>
  );
}

export default AccGrpBtn;
