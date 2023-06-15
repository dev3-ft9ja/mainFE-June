import { Button } from "@mui/material";
import React from "react";
import { useMediaQuery } from "@mui/material";
import Hero from "../Assets/heroft9ja.png";
// import { ReactComponent as Hero } from "../Assets/heroft9ja.png";

function AffiliateFoot() {
  const mobile = useMediaQuery("(max-width:650px)");
  var handleClick = () => {
    window.open("https://ft9jahero.herokuapp.com/", "_blank");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: mobile ? "column" : "row",
        border: "1px solid rgba(0, 0, 0, 0.8)",
        borderRadius: "10px",
        width: mobile ? "60%" : "70%",
        paddingTop: "20px",
        paddingBottom: "20px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingRight: mobile ? "40px" : "20px",
        paddingLeft: mobile ? "40px" : "20px",
        justifyContent: "space-between",
      }}
      className="AffiliateFoot"
    >
      <div
        className="AffiliateFootText"
        style={{
          display: "flex",
          flexDirection: "column",
          width: mobile ? "100%" : "50%",
          justifyContent: "center",
          padding: mobile ? "20px 0px" : "0px 30px",
        }}
      >
        <p
          className="AffiliateFootp"
          style={{
            fontSize: "16px",
            // marginLeft: "10px",
            // marginRight: "10px",
            fontWeight: "bold",
            textAlign: mobile ? "center" : "left",
          }}
        >
          Top Affiliates Earn up to N500,000 Monthly. Want to learn how? Become
          an FT9ja Hero. FT9ja Hero is FT9ja Ambassador Program.{" "}
        </p>
        <Button
          sx={{
            background: "#359602",
            color: "white",
            marginBottom: "10px",
            paddingTop: mobile ? "10px" : "5px",
            paddingBottom: mobile ? "10px" : "5px",
            borderRadius: "5px",
            width: "120px",
            alignSelf: mobile ? "center" : "left",
            "&:hover": {
              background: "#359602",
            },
          }}
          variant={"outlined"}
          onClick={handleClick}
        >
          Learn More
        </Button>
      </div>
      <div
        className="AffiliateFootblank"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: mobile ? "center" : "right",
          justifyContent: mobile ? "center" : "right",
          // background: "#D9D9D9",
        }}
      >
        <div
          style={{
            // background: "#D9D9D9",
            width: mobile ? "180px" : "200px",
            height: mobile ? "180px" : "200px",
          }}
        >
          <img
            style={{
              // background: "#D9D9D9",
              width: mobile ? "180px" : "200px",
              height: mobile ? "180px" : "200px",
            }}
            src={Hero}
            alt={""}
          />
        </div>
      </div>
    </div>
  );
}

export default AffiliateFoot;
