import React from "react";
import { styled } from "@mui/material/styles";
// import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

// const AccordionSummary = styled((props) => (
//   <MuiAccordionSummary
//     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
//     {...props}
//   />
// ))(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === "dark"
//       ? "rgba(255, 255, 255, .05)"
//       : "rgba(0, 0, 0, .03)",
//   flexDirection: "row-reverse",
//   "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
//     transform: "rotate(90deg)",
//   },
//   "& .MuiAccordionSummary-content": {
//     marginLeft: theme.spacing(1),
//   },
// }));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
function LandingTable() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? false : false);
  };

  return (
    <div className="accordion">
      <Accordion sx={{ border: "none" }}>
        <MuiAccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          sx={{ backgroundColor: "#000000" }}
        >
          <Typography
            sx={{
              width: "33%",
              lineHeight: 4.5,
              flexShrink: 0,
            }}
          ></Typography>
          <Typography
            sx={{ color: "white" }}
            variant="h5"
            className="accordion__heading"
          >
            FT9ja Classic
          </Typography>
          <Typography
            sx={{ color: "white" }}
            variant="h5"
            className="accordion__heading"
          >
            FT9ja Challenge
          </Typography>
        </MuiAccordionSummary>
      </Accordion>
      <Accordion
        sx={{ border: "none" }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <MuiAccordionSummary
          sx={{ backgroundColor: "#FCFFFA" }}
          // aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography
            sx={{
              width: "33%",
              lineHeight: 4.5,
              flexShrink: 0,
              alignSelf: "center",
              fontWeight: "bold",
            }}
          >
            Evaluation
          </Typography>
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              padding: "0px 5px",
              color: "text.secondary",
            }}
          >
            1- Step <br /> 25% Profit
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            2- Step <br />
            Challenge: 10% profit target <br />
            Evaluation: 5% profit target
          </Typography>
        </MuiAccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ border: "none" }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <MuiAccordionSummary
          sx={{ backgroundColor: "#ffffff" }}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0, fontWeight: "bold" }}>
            Profit Split
          </Typography>
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              padding: "0px 5px",
            }}
          >
            Up to 80%
          </Typography>
          <Typography
            sx={{
              flexShrink: 0,
            }}
          >
            Up to 80%
          </Typography>
        </MuiAccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ border: "none" }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <MuiAccordionSummary
          sx={{ backgroundColor: "#FCFFFA" }}
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0, fontWeight: "bold" }}>
            Talent Bonus
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              width: "33%",
              flexShrink: 0,
              padding: "0px 5px",
            }}
          >
            Up to 10%
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",

              flexShrink: 0,
            }}
          >
            No
          </Typography>
        </MuiAccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ border: "none" }}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <MuiAccordionSummary
          sx={{ backgroundColor: "#ffffff" }}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            sx={{
              lineHeight: 3,
              width: "33%",
              flexShrink: 0,
              fontWeight: "bold",
            }}
          >
            Time limit
          </Typography>
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              padding: "0px 5px",
            }}
          >
            No time limit
          </Typography>
          <Typography sx={{}}>
            Challenge: 1 month <br />
            Verification: 2 months
          </Typography>
        </MuiAccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ border: "none" }}
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <MuiAccordionSummary
          sx={{ backgroundColor: "#FCFFFA" }}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0, fontWeight: "bold" }}>
            Free 2nd Chance Account
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              width: "33%",
              padding: "0px 5px",
              flexShrink: 0,
            }}
          >
            Yes
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>No</Typography>
        </MuiAccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ border: "none" }}
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <MuiAccordionSummary
          sx={{ backgroundColor: "#ffffff" }}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0, fontWeight: "bold" }}>
            Brokers
          </Typography>
          <Typography sx={{ width: "33%", padding: "0px 5px", flexShrink: 0 }}>
            ICMarkets, FXTM,Deriv
          </Typography>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            ICMarkets, FXTM
          </Typography>
        </MuiAccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ border: "none" }}
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <MuiAccordionSummary
          sx={{ backgroundColor: "#FCFFFA" }}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0, fontWeight: "bold" }}>
            Payout Frequency
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              padding: "0px 5px",
              width: "33%",
              flexShrink: 0,
            }}
          >
            Weekly or Monthly
          </Typography>
          <Typography
            sx={{ color: "text.secondary", width: "33%", flexShrink: 0 }}
          >
            Bi-weekly or Monthly
          </Typography>
        </MuiAccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ border: "none" }}
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <MuiAccordionSummary
          sx={{ backgroundColor: "#ffffff" }}
          aria-controls="panel8bh-content"
          id="panel8bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0, fontWeight: "bold" }}>
            Daily Drawdown
          </Typography>
          <Typography sx={{ width: "33%", padding: "0px 5px", flexShrink: 0 }}>
            5%
          </Typography>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>5%</Typography>
        </MuiAccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ border: "none" }}
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
      >
        <MuiAccordionSummary
          sx={{ backgroundColor: "#FCFFFA" }}
          aria-controls="panel9bh-content"
          id="panel9bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0, fontWeight: "bold" }}>
            Account Drawdown
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              padding: "0px 5px",
              width: "33%",
              flexShrink: 0,
            }}
          >
            10%
          </Typography>
          <Typography
            sx={{ color: "text.secondary", width: "33%", flexShrink: 0 }}
          >
            10%
          </Typography>
        </MuiAccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ border: "none" }}
        expanded={expanded === "panel10"}
        onChange={handleChange("panel10")}
      >
        <MuiAccordionSummary
          aria-controls="panel10bh-content"
          id="panel10bh-header"
          sx={{ backgroundColor: "#ffffff", display: "flex", gap: "5px" }}
        >
          <Typography
            sx={{
              width: "33%",
              lineHeight: 3,
              flexShrink: 0,
              alignSelf: "center",
              fontWeight: "bold",
            }}
          >
            Minimum Trading days
          </Typography>
          <Typography sx={{ width: "33%", padding: "0px 5px", flexShrink: 0 }}>
            10 days
            <li>Minimum of 2 days per week</li>
          </Typography>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            6days in each phase
            <li>Minimum of 2 days per week</li>
          </Typography>
        </MuiAccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ border: "none" }}>
        <MuiAccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          sx={{
            backgroundColor: "#FCFFFA",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              width: "33%",
              lineHeight: 4.5,
              flexShrink: 0,
            }}
          ></Typography>
          <Typography
            variant="h5"
            sx={{
              width: "33%",
              color: "#1B1A1A",
            }}
            className="accordion_grp_btn"
          >
            <Button
              href="/classic"
              variant="contained"
              className="accordion__btn"
              sx={{
                width: "100%",
                " &:hover": {
                  backgroundColor: "#359602",
                },
              }}
            >
              Select Classic
            </Button>
          </Typography>
          <Typography variant="h5" sx={{ color: "#1B1A1A", width: "33%" }}>
            <Button
              className="accordion__btn"
              href="/challenge"
              variant="contained"
              sx={{
                width: "100%",
                " &:hover": {
                  backgroundColor: "#359602",
                },
              }}
            >
              Select Challenge
            </Button>
          </Typography>
        </MuiAccordionSummary>
      </Accordion>
    </div>
  );
}

export default LandingTable;
