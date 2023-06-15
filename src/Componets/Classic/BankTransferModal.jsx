import React, { useState } from "react";
import Box from "@mui/material/Box";
import axios from "../../axios";
import { Button, Modal, Typography, Snackbar } from "@mui/material";
import Bank  from "../../Assets/Bank.png";
import AddCircle from "../../Assets/add-circle.svg"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

var fs = require("fs");
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const mainContainer = {
  justifyContent: "center",
  alignItems: "center",
};

const content = {
  title: "Bank Transfer",
  body: "Please make a direct bank transfer to the account number below and upload a copy of your receipt for confirmation. ",
};

const informationFields = [
  { id: "acc", label: "Account Number" },
  { id: "bank", label: "Bank Name" },
  { id: "email", label: "Email Address" },
];

const accNumber = 3075036936;
const bankName = "FirstBank";
const emailAddress = "traders@ft9ja.com";

const getInformation = (id) => {
  if (id === "acc") return accNumber;
  if (id === "bank") return bankName;
  if (id === "email") return emailAddress;
};

const BankTransferModal = ({ open, handleClose, amount }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = (id) => {
    navigator.clipboard
      .writeText(getInformation(id))
      .then(() => {
        setCopied(true);
      })
      .catch(() => {
        alert("something went wrong");
      });
  };

  const copyStatus = (id, copied) => {
    if (id === "acc" && copied === "acc") return "Copied";
    if (id === "bank" && copied === "bank") return "Copied";
    if (id === "email" && copied === "email") return "Copied";

    return "Copy";
  };

  //--Toast messages--//
  const showUploadSuccess = (message) => {
    toast.success(message, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  const showUploadFailed = (message) =>  {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  function handleFileUpload(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let formdata = new FormData();
    formdata.append("image", file);

    if (file) {
      // Do something with the uploaded file, such as sending it to a server using AJAX or fetch
      console.log("File uploaded:", file);
      setIsUploading(true)
      //--Upload file to server--//
      axios.post("receipts/", formdata).then((res) => {
        console.log(res);
        setIsUploading(true);

        if (res.data.message === "File uploaded successfully") {
          showUploadSuccess(res.data.message);
          setIsUploading(false)
        } else {
          showUploadFailed(res.data.message);
        }
      }).catch((error) => {
          console.error(error);
          showUploadFailed("An error occurred while uploading the file.");
      });

      setFile(null); // Clear the file input field
    }
  }

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <ToastContainer />
      <Modal
        open={open}
        onClose={handleClose}
        amount={amount}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={mainContainer}>
            <Box
              sx={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 5,
              }}
            >
              <img src={Bank} alt={""} />
              <Typography
                id="modal-modal-title"
                sx={{ textAlign: "center" }}
                variant="h6"
                component="h2"
              >
                <Box sx={{ marginLeft: 1 }}>{content.title}</Box>
              </Typography>
            </Box>
            <Box>
              <Typography
                id="modal-modal-description"
                sx={{ textAlign: "center" }}
              >
                {content.body}
              </Typography>
              <Box sx={{ my: 2 }}>
                <Typography
                  sx={{
                    bgcolor: "rgba(247, 126, 39, 0.05)",
                    p: 2,
                    textAlign: "center",
                  }}
                >
                  Amount to pay : {amount} naira
                </Typography>
              </Box>

              {informationFields.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid lightgray",
                    padding: "3px 0",
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="subtitle1" sx={{}}>
                      <Box fontWeight="fontWeightBold">{item.label}</Box>
                    </Typography>
                    <Typography variant="subtitle1" sx={{}}>
                      <Box fontSize={14}>{getInformation(item.id)}</Box>
                    </Typography>
                  </Box>
                  <Button
                    onClick={() => handleCopyClick(item.id)}
                    sx={{
                      border: "1px solid lightgray",
                      padding: 1,
                      borderRadius: 2,
                    }}
                  >
                    {copyStatus(item.id, copied)}
                  </Button>
                </Box>
              ))}

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 3,
                }}
              >
                {!file ? (
                  <>
                    <label htmlFor="file-upload">
                      <Button
                        sx={{
                          background: "#AD5D23",
                          display: "flex",
                          flexDirection: "row",
                        }}
                        component="span"
                      >
                        <Typography
                          sx={{ color: "white", textAlign: "center" }}
                        >
                          <Box fontSize={16}>{!isUploading ? "Upload Receipt" : "Uploading..."}</Box>
                        </Typography>
                        {!isUploading && (
                          <img
                            src={AddCircle}
                            alt="icon"
                            style={{ height: 20, marginLeft: 5 }}
                          />
                        )}
                      </Button>
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      style={{ display: "none" }}
                      onChange={handleFileUpload}
                    />
                  </>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <a
                      href={URL.createObjectURL(file)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{ "& a:hover": { textDecoration: "none" } }}
                      >
                        {file.name}
                      </Typography>
                    </a>
                    <Button type="submit" disabled={!file}>
                      Submit
                    </Button>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
      <Snackbar
        message="Copied to clibboard"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={20000}
        onClose={() => setCopied(false)}
        open={copied}
      />
    </div>
  );
};

export default BankTransferModal;
