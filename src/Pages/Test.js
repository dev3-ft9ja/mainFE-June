// import React from "react";
// import PropTypes from "prop-types";
// import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import Button from "@material-ui/core/Button";
// import Dialog from "@material-ui/core/Dialog";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import DialogActions from "@material-ui/core/DialogActions";
// import { makeStyles } from "@material-ui/core/styles";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import IconButton from "@mui/material/IconButton";
// import FirstPageIcon from "@mui/icons-material/FirstPage";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import LastPageIcon from "@mui/icons-material/LastPage";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import axios from "../axios";
// import { info } from "sass";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     [theme.breakpoints.down("xs")]: {
//       alignItems: "flex-end", // push the dialog to bottom
//     },
//   },
//   paper: {
//     // make the content full width
//     [theme.breakpoints.down("xs")]: {
//       margin: 0,
//       maxWidth: "100%",
//       width: "100%",
//       borderRadius: "40px 40px 0px 0px",
//     },
//   },
// }));

// function createData(name, calories) {
//   return { name, calories };
// }

// const rows = [
//   createData("Refree", <ArrowForwardIosIcon />),
//   createData("Stage", <ArrowForwardIosIcon />),
//   createData("Account", <ArrowForwardIosIcon />),
//   createData("Status", <ArrowForwardIosIcon />),
// ];

// const useDialog = () => {
//   const [open, setOpen] = React.useState(false);
//   const [titles, setTitle] = React.useState("");
//   const [info, setInfo] = React.useState([]);
//   const openDialog = (row) => {
//     //console.log(row);
//     setTitle(row.name);
//     setOpen(true);
//     axios
//       .get(`/referrals/`)
//       .then((res) => {
//         //console.log(res.data);
//         setInfo(res.data);
//       })
//       .catch((err) => {
//         //console.log(err);
//       });
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   const submitData = (id, email) => {
//     // post method to submit data:
//     //console.log(id, email);
//     setOpen(false);
//   };
//   const props = {
//     open,
//     handleClose,
//     titles,
//     info,
//   };
//   return [openDialog, props];
// };
// export default function CustomPaginationActionsTable() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   const classes = useStyles();
//   const [val, setVal] = React.useState("");
//   const [openDialog, dialogProps] = useDialog();

//   const MyDialog = ({ open, info, handleClose, submitData, titles }) => {
//     //  //console.log(submitData, "data", titles, "title");
//     return (
//       <div>
//         <Dialog
//           open={open}
//           classes={{ container: classes.root, paper: classes.paper }}
//         >
//           <DialogTitle style={{ textAlign: "center" }}>{titles}</DialogTitle>
//           {info.map((data, index) => (
//             <DialogContent key={index}>
//               <div
//                 key={index}
//                 style={{ display: "flex", justifyContent: "space-between" }}
//               >
//                 <div>{data.person_referred}</div>
//               </div>
//             </DialogContent>
//           ))}
//           <Button onClick={handleClose}>Close</Button>
//         </Dialog>
//       </div>
//     );
//   };
//   return (
//     <TableContainer>
//       <Table aria-label="custom pagination table">
//         <TableBody>
//           {(rowsPerPage > 0
//             ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//             : rows
//           ).map((row) => (
//             <TableRow key={row.name}>
//               <TableCell
//                 align="left"
//                 sx={{
//                   border: "1px solid ",
//                   textAlign: "left",
//                 }}
//                 width={0.1}
//                 className="affTable"
//               >
//                 {row.name}
//               </TableCell>
//               <TableCell
//                 sx={{
//                   border: "1px solid ",
//                   textAlign: "right",
//                 }}
//                 // width={1}
//                 className="affTable"
//                 onClick={(e) => openDialog(row)}
//               >
//                 {row.calories}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>

//       <MyDialog {...dialogProps}></MyDialog>
//     </TableContainer>
//   );
// }
