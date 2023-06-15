import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import NoData from "./NoData";
function AsoDashboard() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const sx = {
    "&.Mui-selected": {
      backgroundColor: "#359602",
      color: "white",
      borderBottom: "None",
    },
    minHeight: "32px",
    fontWeight: "bold",
    color: "#000",
    border: "1pt solid black",
    borderTop: "0px solid #fff",
    borderBottom: "0.5px solid rgba(0, 0, 0, 0.8)",
    borderLeft: "0.5px solid rgba(0, 0, 0, 0.8)",
    borderRight: "0.5px solid rgba(0, 0, 0, 0.8)",
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

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box className="MainGraph">
      <Box className="Nav2">
        <Tabs
          sx={{ height: "23px" }}
          variant="scrollable"
          scrollButtons={false}
          className="TabGrp2"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <Tab
            sx={sx}
            style={{ borderRight: "None" }}
            className="Tab2"
            {...a11yProps(0)}
            label="Progress"
          />
          <Tab
            sx={sx}
            style={{ borderRight: "None" }}
            className="Tab2"
            {...a11yProps(1)}
            label="Daily DrawDown"
          />
          <Tab
            sx={sx}
            style={{ borderRight: "None" }}
            className="Tab2"
            {...a11yProps(2)}
            label="Minimum Trading Days"
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <NoData />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NoData />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <NoData />
      </TabPanel>
    </Box>
  );
}

export default AsoDashboard;