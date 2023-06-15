import React from "react";
import { FormControl, Select, MenuItem, Box } from "@mui/material";

function DatePicker(props) {
  const handleDateChange = (event) => {
    props.setAge(event.target.value);
  };

  return (
    <Box className="Datesection">
      <FormControl sx={{ minWidth: 120 }} size="small">
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={props.age}
          label="Lots traded - Daily"
          onChange={handleDateChange}
        >
          <MenuItem value={"Current Feed"}>Current Day</MenuItem>
          <MenuItem value={"Last 7 Days"}>Last 7 Days</MenuItem>
          <MenuItem value={"Last Month"}>Last Month</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default DatePicker;
