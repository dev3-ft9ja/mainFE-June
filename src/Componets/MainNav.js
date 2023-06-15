import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import img from "../images/logo.png";
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function MainNav() {
  const mobile = useMediaQuery("(max-width:600px)");
  const [nav, setNav] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    if (nav === true) {
      document.body.style.overflow = "hidden";
    }
    if (nav === false) {
      document.body.style.overflow = "";
    }
  }, [nav]);

  // const desktop = {
  //   fontWeight: "494",
  //   borderRadius: "5px",
  //   minHeight: "0px",
  //   m: 1,
  //   backgroundColor: "#FEFEFE",
  //   textTransform: "none",
  //   color: " rgba(0, 0, 0, 0.8)",
  //   "&.Mui-selected": {
  //     backgroundColor: "#359602",
  //     color: "white",
  //   },
  // };
  // function TabPanel(props) {
  //   const { children, value, index, ...other } = props;
  //   return (
  //     <div
  //       role="tabpanel"
  //       hidden={value !== index}
  //       id={`simple-tabpanel-${index}`}
  //       aria-labelledby={`simple-tab-${index}`}
  //       {...other}
  //     >
  //       {value === index && (
  //         <Box sx={{ textAlign: "-webkit-center" }}>{children}</Box>
  //       )}
  //     </div>
  //   );
  // }
  // function a11yProps(index) {
  //   return {
  //     id: `simple-tab-${index}`,
  //     "aria-controls": `simple-tabpanel-${index}`,
  //   };
  // }
  return (
    <>
      <div className="addPadding">
        {mobile ? (
          <Box className="MobileContainer">
            <Link className="LogoImage" to="/dashboards">
              <img src={img} alt={""} style={{ width: "95px", height: "60px" }} />
            </Link>
            {nav ? (
              <Button onClick={() => setNav(false)}>
                <CloseIcon sx={{ color: "#359602", fontSize: "40px" }} />
              </Button>
            ) : (
              <Button onClick={() => setNav(true)}>
                <MenuIcon sx={{ color: "#359602", fontSize: "40px" }} />
              </Button>
            )}
          </Box>
        ) : (
          <Box className="NavContainer">
            <Link className="LogoImage" to="/dashboards">
              <img src={img} alt={""} className="NavImage" />
            </Link>

            <Box className="TabGrp1">
              <Link
                to="/dashboards"
                className={`Tab1 ${
                  location.pathname === "/dashboards" && "NavActive"
                }`}
              >
                Dashboard
              </Link>
              <Link
                to="/affiliate"
                className={`Tab01 ${
                  location.pathname === "/affiliate" && "NavActive"
                }`}
              >
                Affiliate
              </Link>
              <Link
                to="/apps"
                className={`Tab1 ${
                  location.pathname === "/apps" && "NavActive"
                }`}
              >
                Apps
              </Link>
              <Link
                to="/profile"
                className={`Tab01 ${
                  location.pathname === "/profile" && "NavActive"
                }`}
              >
                Profile
              </Link>
              
            </Box>
          </Box>
        )}
      </div>
      {nav && (
        <>
          <div className="bgTransparent"></div>
          <Box className="MobileMenu">
            <Box className="MobileMenuItems">
              <Link
                onClick={() => setNav(false)}
                className={`MMItem ${
                  location.pathname === "/dashboards" && "MMItemActive"
                }`}
                to="/dashboards"
              >
                Dashboard
              </Link>
              <Link
                onClick={() => setNav(false)}
                className={`MMItem1 ${
                  location.pathname === "/affiliate" && "MMItemActive"
                }`}
                to="/affiliate"
              >
                Affiliate
              </Link>
              <Link
                onClick={() => setNav(false)}
                className={`MMItem ${
                  location.pathname === "/apps" && "MMItemActive"
                }`}
                to="/apps"
              >
                Apps
              </Link>
              <Link
                onClick={() => setNav(false)}
                className={`MMItem1 ${
                  location.pathname === "/profile" && "MMItemActive"
                }`}
                to="/profile"
              >
                Profile
              </Link>
            </Box>
          </Box>
        </>
      )}
    </>
  );
}

export default MainNav;
