import React from "react";
import { Box, CssBaseline } from "@mui/material";
import AccountBtn from "../Componets/AccountBtn";
import MainNav from "../Componets/MainNav";
import AccountDetails from "../Componets/AccountDetails";
import FeedSection from "../Componets/FeedSection";
import Accounts from "../Componets/Accounts";
import { AccProvider } from "../Context/OtherContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
function ZumaDashboard() {
  const [searchParams] = useSearchParams();
  let navigate = useNavigate();
  React.useEffect(() => {
    var token = searchParams.get("token");
    var refresh = searchParams.get("refresh_token");
    if (token) {
      localStorage.setItem("access_token", token);
    }

    if (refresh) {
      localStorage.setItem("refresh_token", refresh);
    }

    if (token !== null) {
      //console.log("token is not null");
      return navigate("/dashboards");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Helmet>
        <title>Dashboard - FT9ja</title>
      </Helmet>
      <AccProvider>
        <div>
          <header>
            <MainNav />
          </header>
          <br />
          <CssBaseline />
          <AccountBtn />
          <br />
          <Box>
            <Box
              sx={{ display: "flex", flexWrap: "nowrap", width: "100%" }}
              className="dashmain addPadding"
            >
              <Accounts />
              <AccountDetails />
            </Box>
            <br />
            <FeedSection />
          </Box>
        </div>
      </AccProvider>
    </>
  );
}

export default ZumaDashboard;
