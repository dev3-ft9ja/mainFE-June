import React, { useEffect } from "react";
import { CssBaseline } from "@mui/material";
// import AppsNav from "../Componets/AppsNav";

import { AccProvider } from "../Context/OtherContext";
import PipCal from "../Componets/PipCal";
import TalentBonus from "../Componets/TalentBonus";
import ProfitSplit from "../Componets/ProfitSplit";
import DrawdownCalc from "../Componets/DrawdownCalc";
import CompoundCal from "../Componets/CompoundCal";
import MainNav from "../Componets/MainNav";
import { Helmet } from "react-helmet";
// import { useMediaQuery } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";

function Apps() {
  const [searchParams] = useSearchParams();
  let navigate = useNavigate();
  useEffect(() => {
    document.title = "Apps - FT9ja";
  }, []);

  React.useEffect(() => {
    var token = searchParams.get("token");
    var refresh = searchParams.get("refresh_token");
    const checktoken = localStorage.getItem("access_token");

    if (token) {
      localStorage.setItem("access_token", token);
    }

    if (refresh) {
      localStorage.setItem("refresh_token", refresh);
    }

    if (token !== null) {
      //console.log("token is not null");
      return navigate("/apps");
    }
    if (!checktoken) {
      window.location.href = "https://old.ft9ja.com/login";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const mobile = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Helmet>
        <title>Apps - FT9ja</title>
        <meta
          name="description"
          content="FT9ja Pip Calculator. FT9ja Talent Bonus Calculator. FT9ja Profit Split Calculator. FT9ja Drawdown Calculator. FT9ja Compounding Profits Calculator."
        />
      </Helmet>
      <AccProvider>
        <div>
          <header>
            <MainNav />
          </header>
          <br />
          <CssBaseline />
          <PipCal />
          <br />
          <TalentBonus />
          <br />
          <ProfitSplit />
          <br />
          <DrawdownCalc />
          <br />
          <CompoundCal />
        </div>
      </AccProvider>
    </>
  );
}

export default Apps;
