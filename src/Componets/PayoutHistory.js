import * as React from "react";
import { Box, Button } from "@mui/material";
// import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Carousel from "react-material-ui-carousel";
import axios from "../axios";
import { AccContext } from "../Context/OtherContext";
import { FileDownloadOutlined } from "@mui/icons-material";
import { saveAs } from "file-saver";

function PayoutHistory() {
  const { values } = React.useContext(AccContext);
  const [showlogin, ] = values;
  const [his, setHis] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`/payout/?number=${showlogin}`)
      .then((res) => {
        //console.log(res.data);
        setHis(res.data);
      })

      .catch((err) => {
        //console.log(err);
      });
  }, []);
  const items = his;
  if (items.length === 0) {
    return (
      <div className="PayoutSection">
        <h1>No Payout History</h1>
      </div>
    );
  }
  return (
    // <div className="PayoutSection">
    <Carousel
      autoPlay={false}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={false}
      navButtonsProps={{
        style: {
          backgroundColor: "#359602",
        },
      }}
      className="Carousel"
    >
      {items.map((item, i) => {
        return (
          <div className="PayoutSection" key={i}>
            <TableContainer sx={{ maxWidth: 360 }}>
              <Table
                sx={{ maxWidth: 360, width: "calc(0.4rem + 24.5vw)" }}
                aria-label="simple table"
              >
                <TableBody>
                  <TableRow
                    sx={{
                      border: 1,
                    }}
                  >
                    <TableCell
                      sx={{
                        border: 1,
                      }}
                      component="th"
                      scope="row"
                    >
                      Date Requested
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                      }}
                    >
                      {item.payout.date}
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{
                      border: 1,
                    }}
                  >
                    <TableCell
                      sx={{
                        border: 1,
                      }}
                      component="th"
                      scope="row"
                    >
                      Payout Type
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                      }}
                    >
                      {item.payout.paytype}
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{
                      border: 1,
                    }}
                  >
                    <TableCell
                      sx={{
                        border: 1,
                      }}
                      component="th"
                      scope="row"
                    >
                      Status
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                      }}
                    >
                      {item.payout.status}
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{
                      border: 1,
                    }}
                  >
                    <TableCell
                      sx={{
                        border: 1,
                      }}
                      component="th"
                      scope="row"
                    >
                      Payout Amount
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                      }}
                    >
                      {item.payout.amount}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Box style={{ height: "100%", width: "40%" }} className="PayoutBox">
              <Box
                className="PayoutImg"
                style={{
                  width: "55%",
                  height: "258px",
                  border: "1px solid",
                }}
              >
                <img
                  style={{ width: "100%", height: "258px" }}
                  src={item.image}
                  alt="omo e no dey o "
                />
              </Box>
              <Box className="shareText">
                <p style={{ fontSize: "13px" }}>
                  Share your FT9ja Payout Certifcate on your favorite social
                  media or groups to stand a chance to win N50,000
                </p>

                {/* <a
                  style={{ textDecoration: "none" }}
                  href={`http://127.0.0.1:8000${item.image}?force=true`}
                  download="PayoutCertificate.pdf"
                > */}
                <Button
                  className="shareBtn"
                  variant="outlined"
                  onClick={() => {
                    //console.log(item.image.split("/"));
                    saveAs(`${item.image}`, `${item.image.split("/")[4]}`);
                  }}
                  endIcon={<FileDownloadOutlined />}
                  // download="PayoutCertificate.pdf"
                  // href={`http://127.0.0.1:8000${item.image}?force=true`}
                >
                  Share
                </Button>
                {/* </a> */}
              </Box>
            </Box>
          </div>
        );
      })}
    </Carousel>
    // </div>
  );
}

export default PayoutHistory;
