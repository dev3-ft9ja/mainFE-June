import React from "react";
import { Box } from "@mui/material";
import DatePicker from "../Componets/DatePicker";
import GraphList from "../Componets/GraphList";
function FeedSection() {
  const [age, setAge] = React.useState("Current Feed");
  return (
    <Box className="Feedsection addPadding">
      <DatePicker age={age} setAge={setAge} />
      <GraphList age={age} />
    </Box>
  );
}

export default FeedSection;