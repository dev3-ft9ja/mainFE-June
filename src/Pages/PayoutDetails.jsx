import React, { useState, useEffect } from "react";
import { text, effect } from "../style";
import { detailFields, statusOptions } from "../constants";
import { useLocation } from "react-router-dom";
//--Required Dependencies--//
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import axios from "../axios";

// const info = {
//   user: "da.desiigna@gmail.com",
//   loginId: "42523242",
//   account: "Aso",
// };

const PayoutDetails = () => {
  const [declinedPayment, setDeclinedPayment] = useState(false);
  const [ticketDate, setTicketDate] = useState(new Date());
  const [info, setInfo] = useState({});
  const [user, setUser] = useState("");
  const [login, setLogin] = useState("");
  const [paytype, setPaytype] = useState("");
  const [status, setStatus] = useState("approved");
  const location = useLocation();
  const [amount, setAmount] = useState(0);
  const [reason, setReason] = useState("input your reason");
  const handleStatus = (item) => {
    //console.log("omk", item);
    setStatus(item.value);
    const { value } = item;
    if (value === "declined") setDeclinedPayment(true);
    if (value === "approved") setDeclinedPayment(false);

    //console.log("omk");
  };
  const getData = (id, data) => {
    //console.log(data);
    if (id === "user") return user;
    if (id === "loginId") return login;
    if (id === "account") return paytype;
  };
  useEffect(() => {
    //console.log(location.state._id);
    axios
      .post(`/admingetdetails/`, { _id: location.state._id })
      .then((res) => {
        setInfo(res.data);
        //console.log(res.data);
        setUser(res.data.useracc.user);
        setLogin(res.data.useracc.acc.number);
        setPaytype(res.data.paytype);
        setAmount(res.data.amount);
        setStatus(res.data.status);
        if (res.data.reason === "") {
          setReason("input your reason");
        } else {
          setReason(res.data.reason);
        }
        // setReason(res.data.reason);
        if (res.data.status === "declined") setDeclinedPayment(true);
      })
      .catch((err) => {
        //console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClick = () => {
    //console.log(amount, status);
    if (status === "declined" && reason === "input your reason") {
    }
    axios
      .post(`/adminchangedetails/`, {
        _id: location.state._id,
        amount: amount,
        status: status,
        reason: reason,
      })
      .then((res) => {
        //console.log(res);
      })
      .catch((err) => {
        //console.log(err);
      });
    if (status === "approved") {
      axios
        .post(`/generatepayoutimage/`, {
          _id: location.state._id,
          amount: amount,
        })
        .then((res) => {
          //console.log(res);
        })
        .catch((err) => {
          //console.log(err);
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-gray-200 p-2 w-1/2 flex flex-col items-center">
        <div className="bg-white w-full p-5 px-10">
          <div className="flex flex-row justify-end mb-10">
            <Link to="/payouts">
              <button className={`${effect.button}`}>
                <div className="p-2 px-5 border rounded flex flex-row">
                  <p>Return</p>
                </div>
              </button>
            </Link>
          </div>
          {detailFields.map((item, index) => (
            <div
              className={`flex flex-row mb-2 ${
                item.type === "multiline-input" ? "items-start" : "items-center"
              }
                 `}
              key={index}
            >
              {item.id === "reason" && declinedPayment ? (
                <p className={`text-sm mr-10 w-[20%]`}>{item.label}: </p>
              ) : (
                <p
                  className={`text-sm mr-10 w-[20%] ${
                    item.id === "reason" && declinedPayment && "text-red-500"
                  }`}
                >
                  {item.id === "reason" ? "" : `${item.label} :`}{" "}
                </p>
              )}

              {item.type === "box" && (
                <div
                  className={`border rounded w-[50%] justify-center h-10 flex flex-col px-3`}
                >
                  <p className={`${text.input}`}>{getData(item.id, info)}</p>
                </div>
              )}

              {item.type === "multiline-input" && declinedPayment && (
                <input
                  className="border rounded p-1 w-[50%] h-40"
                  onChange={(e) => {
                    setReason(e.target.value);
                  }}
                  value={reason}
                />
              )}

              {item.type === "dropdown" && (
                <Dropdown
                  options={statusOptions}
                  value={status}
                  onChange={(item) => handleStatus(item)}
                  placeholder="Select status"
                  className={`w-[50%] ${text.input}`}
                />
              )}

              {item.type === "date-picker" && (
                <div className="border rounded p-1 w-[50%] h-10 px-3 flex flex-col justify-center">
                  <DatePicker
                    selected={ticketDate}
                    onChange={(date) => setTicketDate(date)}
                    className={`${text.input}`}
                  />
                </div>
              )}

              {item.type === "input" && (
                <input
                  onChange={(e) => setAmount(e.target.value)}
                  className="border rounded w-[50%] h-10  px-3"
                  value={amount}
                />
              )}
            </div>
          ))}

          <div className="flex flex-row mt-10">
            <button
              onClick={handleClick}
              className={`bg-smallButton p-2 px-8 rounded-[10px] ${effect.smallButton}`}
            >
              <p className={`text-white ${effect.smallButtonText}`}>Save</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayoutDetails;
