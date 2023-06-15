import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import { ShareSocial } from "react-share-social";
import { Player } from "@lottiefiles/react-lottie-player";
// import payoutCertificateDemoImage from "../../images/payout-cert-demo.png";
import axios from "../../axios";
import { AccContext } from "../../Context/OtherContext";
import ReactPaginate from "react-paginate";

const useStyles = makeStyles((theme) => ({
  historyContainer: {
    marginTop: 20,
    backgroundColor: "rgba(217, 217, 217, 0.2)",
    width: "80%",
    display: "flex",
    flexDirection: "column",
  },
  historyHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  historyItemContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  item: {
    width: "20%",
    borderBottom: "1px solid lightgray",
    paddingTop: 10,
    paddingBottom: 10,
    cursor: "pointer",
  },
  header: {
    fontWeight: "bold",
    color: "black",
  },
  // eslint-disable-next-line no-dupe-keys
  historyItemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  imageShareContainer: {
    padding: 10,
    border: "1px solid lightgray",
    borderRadius: 5,
    width: "80%",
    marginTop: 20,
  },
  imageContainer: {
    width: 350,
    height: 400,
    backgroundColor: "lightgray",
    marginTop: 30,
    marginBottom: 20,
  },
  bodyMessage: {
    width: "80%",
  },
  loadingContainer: {
    width: 350,
  },
  extraSpacing: {
    marginBottom: 40,
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
    '& ul': {
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'center',
      '& li': {
        margin: '0 0.5rem',
        '& a': {
          padding: '0.5rem',
          borderRadius: '50%',
          transition: 'all 0.3s ease-in-out',
          '&.selected': {
            color: '#fff',
          },
        },
      },
    },
  },
}));

const historyHeaderLabels = [
  { id: 0, label: "Date" },
  { id: 1, label: "Payout Type" },
  { id: 2, label: "Status" },
  { id: 3, label: "Amount" },
];

// const paymentHistoryMock = [
//   { date: "01/01/2022", payoutType: "Aso", status: "Approved", amount: 100000 },
//   {
//     date: "01/02/2022",
//     payoutType: "Zuma",
//     status: "Approved",
//     amount: 200000,
//   },
//   { date: "01/03/2022", payoutType: "Aso", status: "Approved", amount: 50000 },
//   { date: "01/04/2022", payoutType: "Zuma", status: "Approved", amount: 15000 },
//   { date: "01/05/2022", payoutType: "Aso", status: "Pending", amount: 25000 },
// ];

//--test data--//
const mockData = [
  { id: 0, image: null, payout: { amount: 5000, date: '2023-01-18', id: 83, paytype: 'zuma', 
  reason: 'not valid', status: 'declined'}, useracc: {id: 3, user: 'admin@mail.com', acc: null, payout: 'monthly'}
  },
  { id: 1, image: null, payout: { amount: 5000, date: '2023-01-18', id: 84, paytype: 'aso', 
  reason: 'not valid', status: 'declined'}, useracc: {id: 3, user: 'admin@mail.com', acc: null, payout: 'monthly'}
  },
   { id: 2, image: null, payout: { amount: 5000, date: '2023-01-18', id: 85, paytype: 'aso', 
  reason: 'not valid', status: 'declined'}, useracc: {id: 3, user: 'admin@mail.com', acc: null, payout: 'monthly'}
  },
  { id: 3, image: null, payout: { amount: 5000, date: '2023-01-18', id: 86, paytype: 'zuma', 
  reason: 'not valid', status: 'declined'}, useracc: {id: 3, user: 'admin@mail.com', acc: null, payout: 'monthly'}
  },
  { id: 4, image: null, payout: { amount: 5000, date: '2023-01-18', id: 87, paytype: 'zuma', 
  reason: 'not valid', status: 'declined'}, useracc: {id: 3, user: 'admin@mail.com', acc: null, payout: 'monthly'}
  },
  { id: 5, image: null, payout: { amount: 5000, date: '2023-01-18', id: 88, paytype: 'zuma', 
  reason: 'not valid', status: 'declined'}, useracc: {id: 3, user: 'admin@mail.com', acc: null, payout: 'monthly'}
  },
  { id: 6, image: null, payout: { amount: 5000, date: '2023-01-18', id: 89, paytype: 'zuma', 
  reason: 'not valid', status: 'declined'}, useracc: {id: 3, user: 'admin@mail.com', acc: null, payout: 'monthly'}
  },
  { id: 7, image: null, payout: { amount: 5000, date: '2023-01-18', id: 90, paytype: 'zuma', 
  reason: 'not valid', status: 'declined'}, useracc: {id: 3, user: 'admin@mail.com', acc: null, payout: 'monthly'}
  },
  { id: 8, image: null, payout: { amount: 5000, date: '2023-01-18', id: 91, paytype: 'zuma', 
  reason: 'not valid', status: 'declined'}, useracc: {id: 3, user: 'admin@mail.com', acc: null, payout: 'monthly'}
  },
  { id: 9, image: null, payout: { amount: 5000, date: '2023-01-18', id: 92, paytype: 'zuma', 
  reason: 'not valid', status: 'declined'}, useracc: {id: 3, user: 'admin@mail.com', acc: null, payout: 'monthly'}
  },
];

const History = () => {
  const classes = useStyles();
  const { values } = React.useContext(AccContext);
  const [showlogin] = values;
  const [his, setHis] = React.useState([]);
  const [payoutImage, setPayoutImage] = useState(
    "https://i.pinimg.com/originals/10/b2/f6/10b2f6d95195994fca386842dae53bb2.png"
  );
  // eslint-disable-next-line no-unused-vars
  const [paymentPending, setPaymentPending] = useState(true); //--> State can be added to context

  //--Pagination state--//
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [pageCount, setPageCount] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const calculateTotalPages = (totalItems) => {
    const maxItemsPerPage = itemsPerPage;
    return Math.ceil(totalItems / maxItemsPerPage);
  };

  
  const HandleClick = (id) => {
    //console.log(id);
    axios
      .post("/getpayoutimage/", { _id: id })
      .then((res) => {
        //console.log(res.data.imgurl);
        if (res.data === " ") {
          setPayoutImage(
            "https://i.pinimg.com/originals/10/b2/f6/10b2f6d95195994fca386842dae53bb2.png"
          );
        }
        setPayoutImage(res.data.imgurl);
      })

      .catch((err) => {
        //console.log(err);
      });
  };

  useEffect(() => {
    /** check if payment is pending */
    //--> api function call
    //--> if payment == approved then setPaymentPending(false)

    setIsLoading(true)
    axios
      .get(`/payout/?number=${showlogin}`)
      .then((res) => {
        // console.log(res.data);
        setHis(res.data); //--Store history from api to state
        //setHis(mockData);
        const totalPageCount = calculateTotalPages(res.data.length);
        setPageCount(totalPageCount);
        setIsLoading(false);
      })

      .catch((err) => {
        //console.log(err);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const items = his;
  if (items.length === 0 && !isLoading) {
    return (
      <div className="PayoutSection">
        <h1>No Payout History</h1>
      </div>
    );
  }

  return (
    <>

      {isLoading && (
        <div className='flex flex-row items-center justify-center h-64'>
          <Player
            autoplay={true}
            loop={true}
            src={'https://lottie.host/c64f6b06-df2e-49de-8363-d79a6cc9b6b8/fv7RcmBDbK.json'}
            className="w-60"
          />
        </div>
      )}
      {!isLoading && (
        <div className={classes.historyContainer}>
          <div className={classes.historyHeaderContainer}>
            {historyHeaderLabels.map((item, index) => (
              <Grid item className={classes.item} key={index}>
                <Typography variant="subtitle1" fontWeight={"bold"}>
                  {item.label}
                </Typography>
              </Grid>
            ))}
          </div>

          {items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
            .map((item, index) => (
              <div
                onClick={() => HandleClick(item.id)}
                className={classes.historyHeaderContainer}
                key={index}
              >
                <Grid item className={classes.item}>
                  <Typography variant="subtitle2">{item.payout.date}</Typography>
                </Grid>
                <Grid item className={classes.item}>
                  <Typography variant="subtitle2">
                    {item.payout.paytype.toUpperCase()}
                  </Typography>
                </Grid>
                <Grid item className={classes.item}>
                  <Box
                    sx={{
                      backgroundColor:
                        item.payout.status !== "approved" ? "#FFA07A" : "#0080001A",
                      width: "50%",
                      borderRadius: 5,
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      style={{
                        color:
                          item.payout.status === "approved" ? "#359602" : "black",
                      }}
                    >
                      {item.payout.status.toUpperCase()}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item className={classes.item}>
                  <Typography variant="subtitle2">N{item.payout.amount}</Typography>
                </Grid>
              </div>
            ))}

          <div className={classes.pagination}>
            <ReactPaginate
              previousLabel={<Button >Previous</Button>}
              nextLabel={<Button>Next</Button>}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              activeClassName={'active'}
            />
          </div>
        </div>
      )}

      <div className={classes.imageShareContainer}>
        {paymentPending ? (
          <>
            <img
              src={payoutImage}
              alt="Receipt"
              className={classes.imageContainer}
            />

            <div className={classes.bodyMessage}>
              <Typography variable="subtitle2">
                Share your FT9ja Payout Certificate on your favorite social
                media or groups to stand a chance to win N50,000
              </Typography>
            </div>

            <ShareSocial
              url="www.ft9ja-payout-cert/3492.png"
              socialTypes={["facebook", "twitter", "reddit", "linkedin"]}
            />
          </>
        ) : (
          <>
            <div className={classes.loadingContainer}>
              <Player
                autoplay={true}
                loop={true}
                controls={true}
                src={
                  "https://assets8.lottiefiles.com/packages/lf20_5eil5ze3.json"
                }
              />
            </div>
            <div className={classes.bodyMessage}>
              <Typography variable="subtitle2">
                We are currently processing your payout. Kindly check back
                within 24 hours
              </Typography>
            </div>
            <div className={classes.extraSpacing} />
          </>
        )}
      </div>
    </>
  );
};

export default History;
