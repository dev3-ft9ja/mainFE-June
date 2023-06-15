import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";
import axios from "../axios";

function ClassicCarousel(props) {
  const [his, setHis] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`getclassicimgs`)
      .then((res) => {
        console.log(res.data);
        setHis(res.data);
      })

      .catch((err) => {
        //console.log(err);
      });
  }, []);
  return (
    his.length > 0 && (
      <Carousel
        sx={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}
        swipeable={false}
        draggable={false}
        indicators={false}
        navButtonsAlwaysVisible={false}
        navButtonsProps={{
          style: {
            backgroundColor: "#359602",
          },
        }}
        keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        // centerMode={true}
        // partialVisible={true}
        animation="slide"
      >
        {his.map((item, i) => {
          return (
            <Box
              key={i}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {item.map((item, i) => {
                return <Item key={i} item={item} />;
              })}
            </Box>
          );
        })}
      </Carousel>
    )
  );
}

function Item(props) {
  return (
    <Box
      sx={{
        width: "-webkit-fill-available",
        height: "-webkit-fill-available",
      }}
    >
      <img
        style={{
          width: "95%",
        }}
        src={props.item}
        alt=""
      />
    </Box>
  );
}

export default ClassicCarousel;
