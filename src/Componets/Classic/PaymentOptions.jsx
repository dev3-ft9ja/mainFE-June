import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Typography, Grid } from "@material-ui/core";
import { Button } from "@mui/material";
import BankTransfer from "../../Assets/BankTransfer.png";
import Paystack from "../../Assets/Paystack.png";
import Paypal from "../../Assets/Paypal.png";
import Cancel from "../../Assets/cancel.png";

import { usePaystackPayment } from "react-paystack";
// import Modal from "@mui/material/Modal";


import { BankTransferModal, PayPalModal } from "./";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    padding: theme.spacing(4),
  },
  title: {
    textAlign: "center",
    marginBottom: theme.spacing(2),
  },
  cancelButton: {
    position: "relative",
    bottom: theme.spacing(1),
    left: theme.spacing(55),
    backgroundColor: "#D9D9D9",
    width: 29,
    height: 29,
  },
  cancelIcon: {
    width: 10,
    height: 10,
  },
  options: {
    flexGrow: 1,
    // marginTop: 20,
    marginTop: 40,
    width: "100%",
    padding: 20,
  },
  button: {
    boxShadow:
      "0px 1px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0), 0px 1px 10px 0px rgba(0,0,0,0)",
    "&:hover": {
      transform: "scale(1.1)",
    },
    backgroundColor: "white",
    height: 150,
    width: "100%",
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      flexDirection: "column",
    },
    [theme.breakpoints.up("sm")]: {
      width: "90%",
      flexDirection: "row",
      justifyContent: "center",
    },
  },
  gridItem: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "30%",
      margin: 10,
    },
  },
}));

const paymentMethods = [
  { id: "paystack", icon: Paystack },
  { id: "paypal", icon: Paypal },
  { id: "bank", icon: BankTransfer },
];

const message = {
  title: "Fund your account",
  body: "Kindly note that not all payment options may be accessible depending on your location.",
};

const onSuccess = (reference) => {
  //console.log(reference);
};

const onClose = () => {
  //console.log("closed");
};

const PaymentOptions = ({ email, amount, closeOptions }) => {
  const [openBankModal, setOpenBankModal] = useState(false);
  const [openPayPalModal, setOpenPayPalModal] = useState(false);
  const classes = useStyles();

  //--Paystack const--//
  const publicKey = "pk_live_45cb4ea56402832c4859a716fafa44439ef2c6a5";
  const reference = new Date().getTime().toString();
  const config = { reference, email, amount, publicKey };

  const initializePayment = usePaystackPayment(config);

  let bank_amount = amount / 100;
  let usd_amount = Math.trunc(bank_amount/700);

  const handlePaymentMethod = (item) => {
    //console.log(item);
    if (item.id === "paystack") initializePayment(onSuccess, onClose);
    if (item.id === "bank") setOpenBankModal(true);
    if (item.id === "paypal") setOpenPayPalModal(true);
  };

  return (
    <div className={classes.root}>
      <Button
        onClick={() => closeOptions(false)}
        className={classes.cancelButton}
      >
        <img src={Cancel} alt={""} className={classes.cancelIcon} />
      </Button>
      <Typography variant="h3" className={classes.title}>
        {message.title}
      </Typography>
      <Divider />
      <Typography>{message.body}</Typography>

      <div className={classes.options}>
        <Grid container className={classes.gridContainer}>
          {paymentMethods.map((item, index) => (
            <Grid item key={index} className={classes.gridItem}>
              <Button
                onClick={() => handlePaymentMethod(item)}
                className={classes.button}
              >
                <img src={item.icon} alt={""}/>
              </Button>
            </Grid>
          ))}
        </Grid>
        <BankTransferModal
          open={openBankModal}
          handleClose={() => setOpenBankModal(false)}
          amount={bank_amount}
        />

        <PayPalModal
          open={openPayPalModal}
          handleClose={() => setOpenPayPalModal(false)}
          amount={usd_amount}
        />


      </div>
    </div>
  );
};

export default PaymentOptions;
