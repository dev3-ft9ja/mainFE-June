import React from "react";
import { GraphContext } from "../Context/GraphContext";
function IndiDates() {
  let values = React.useContext(GraphContext);
  return (
    <div
      style={{
        marginLeft: "3%",
        fontFamily: "Author",
        fontSize: "calc(1.3rem + 0.5vw)",
      }}
    >
      {values[0].date.split(" ")[0]}
    </div>
  );
}

export default IndiDates;
