import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { Box } from "@mui/material";
// import { PlayArrow } from "@mui/icons-material";
import axios from "../axios";

function AffiliateHIW() {
  const [isOpen, setOpen] = React.useState(false);
  const [info, setInfo] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`/gethowitworks/`)
      .then((res) => {
        //console.log(res.data);
        setInfo(res.data);
      })
      .catch((err) => {
        //console.log(err);
      });
  }, []);

  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
          fontSize: "28px",
          fontWeight: "bold",
        }}
        className="HIWheader"
      >
        How it Works
      </Box>
      <br />
      <br />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        className="HIWvideo"
      >
        <>
          <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            // youtube={{
            //   autoplay: 1,
            //   mute: 1,
            // }}
            autoplay="true"
            allow={"autoplay"}
            videoId={info.content}
            onClose={() => setOpen(false)}
            width="100%"
            controls={false}
            start={1}
            autopause={false}
          />
          <Box
            sx={{
              width: "30%",
            }}
            className="HIWvideo1"
          >
            <img
              onClick={() => setOpen(true)}
              src={info.image}
              alt=" "
              style={{ width: "100%" }}
            />
            <div onClick={() => setOpen(true)}></div>
          </Box>
        </>
        <Box
          sx={{
            width: "50%",
            marginLeft: "9px",
            fontWeight: 375,
            fontSize: "16px",
          }}
          className="HIWvideoText"
        >
          <ol>
            <li> Get your unique referral code. </li>
            <br />
            <li>
              {" "}
              Share it with people you want to refer. They should enter the code
              when then register on our website.{" "}
            </li>
            <br />
            <li>
              {" "}
              You will be paid a 10% referral commision when they purchase an
              account.{" "}
            </li>
          </ol>
        </Box>
      </Box>
    </Box>
  );
}

export default AffiliateHIW;
