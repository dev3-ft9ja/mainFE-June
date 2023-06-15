import React, { useState, useEffect } from "react";
import { categories, message } from "../constants";
import { Next } from "../Assets/icons";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { Pagination } from "../components";
import axios from "../axios";
import { Helmet } from "react-helmet";
const { payouts } = message;

// //--Mock Data--//
// const pending = [
//   // { id: 0, email: "da.desiigna@gmail.com" },
//   // { id: 1, email: "market@gmail@gmail.com" },
//   // { id: 2, email: "tolu-willy@gmail.com" },
//   // { id: 3, email: "markAnthony224@gmail.com" },
//   // { id: 4, email: "joeBidenUSA@gmail.com" },
//   // { id: 5, email: "bobmarleyprince@gmail.com" },
//   // { id: 6, email: "davido001@gmail.com" },
//   // { id: 7, email: "burnaBoy@gmail.com" },
//   // { id: 8, email: "bobmarleyprince@gmail.com" },
//   // { id: 9, email: "davido001@gmail.com" },
//   // { id: 10, email: "burnaBoy@gmail.com" },
//   // { id: 11, email: "bobmarleyprince@gmail.com" },
//   // { id: 12, email: "davido001@gmail.com" },
//   // { id: 13, email: "burnaBoy@gmail.com" },
// ];

// const approved = [
//   // {id: 4, email: "tonyLanez@gmail.com"},
//   // {id: 5, email: "williamsMike@gmail.com"},
//   // {id: 6, email: "michaelJackson@gmail.com"},
//   // {id: 7, email: "will-smith@gmail.com"},
// ];

// const declined = [
//   //   { id: 4, email: "jamesbrownafrica@gmail.com" },
//   //   { id: 5, email: "obamuyiwa@gmail.com" },
// ];

const Payout = () => {
  const [approved, setApproved] = useState([]);
  const [declined, setDeclined] = useState([]);
  const [pending, setPending] = useState([]);

  useEffect(() => {
    axios
      .get(`/adminpending/`)
      .then((res) => {
        setPending(res.data);
        //console.log(res.data);
      })
      .catch((err) => {
        //console.log(err);
      });
    axios
      .get(`/adminapproved/`)
      .then((res) => {
        setApproved(res.data);
        //console.log(res.data);
      })
      .catch((err) => {
        //console.log(err);
      });
    axios
      .get(`/admindeclined/`)
      .then((res) => {
        setDeclined(res.data);
        //console.log(res.data);
      })
      .catch((err) => {
        //console.log(err);
      });
  }, []);

  const itemsPerPage = 5;

  //--Pending payments state--//
  const [currentPendingIndex, setCurrentPendingIndex] = useState(0);
  const [currentPendingPage, setCurrentPendingPage] = useState(1);
  //--Approved payments state--//
  const [currentApprovedIndex, setCurrentApprovedIndex] = useState(0);
  const [currentApprovedPage, setCurrentApprovedPage] = useState(1);
  //--Declined payments state--//
  const [currentDeclinedIndex, setCurrentDeclinedIndex] = useState(0);
  const [currentDeclinedPage, setCurrentDeclinedPage] = useState(1);

  //--Functions--//

  const handlePendingNext = () => {
    setCurrentPendingIndex(currentPendingIndex + itemsPerPage);
    setCurrentPendingPage(currentPendingPage + 1);
  };
  const handlePendingPrev = () => {
    setCurrentPendingIndex(currentPendingIndex - itemsPerPage);
    setCurrentPendingPage(currentPendingPage - 1);
  };

  const handleApprovedNext = () => {
    setCurrentApprovedIndex(currentApprovedIndex + itemsPerPage);
    setCurrentApprovedPage(currentApprovedPage + 1);
  };

  const handleApprovedPrev = () => {
    setCurrentApprovedIndex(currentApprovedIndex - itemsPerPage);
    setCurrentApprovedPage(currentApprovedPage - 1);
  };

  const handleDeclinedNext = () => {
    setCurrentDeclinedIndex(currentDeclinedIndex + itemsPerPage);
    setCurrentDeclinedPage(currentDeclinedPage + 1);
  };

  const handleDeclinedPrev = () => {
    setCurrentDeclinedIndex(currentDeclinedIndex - itemsPerPage);
    setCurrentDeclinedPage(currentDeclinedPage - 1);
  };

  const calculateTotalPages = (totalItems) => {
    const maxItemsPerPage = itemsPerPage;
    return Math.ceil(totalItems / maxItemsPerPage);
  };

  //--Pending--//
  const pendingList = pending.slice(
    currentPendingIndex,
    currentPendingIndex + itemsPerPage
  );
  const totalPendingPages = calculateTotalPages(pending.length);

  //--Approved--//
  const approvedList = approved.slice(
    currentApprovedIndex,
    currentApprovedIndex + itemsPerPage
  );
  const totalApprovedPages = calculateTotalPages(approved.length);

  //--Declined--//
  const declinedList = declined.slice(
    currentDeclinedIndex,
    currentDeclinedIndex + itemsPerPage
  );
  const totalDeclinedPages = calculateTotalPages(declinedList.length);

  return (
    <>
      <Helmet>
        <title>Payout - FT9ja</title>
      </Helmet>
      <div className="flex flex-col px-10">
        <div className="flex flex-col h-screen">
          <div className="flex flex-row">
            <Link to="/v1/secure/2022/ftadmin">
              <button className="flex flex-row items-center">
                <div className="mr-3">
                  <AiOutlineMenu style={{ color: "gray" }} />
                </div>
                <div className="py-4">
                  <p className="text-sm font-bold">Menu</p>
                </div>
              </button>
            </Link>
          </div>

          <div className="my-4">
            <p className="text-lg font-bold">Payouts</p>
          </div>

          <div className="flex flex-col sm:flex-row">
            {categories.map((item, index) => (
              <div
                className={`w-1/3 ${index === 0 ? "pl-0" : "px-3"}`}
                key={index}
              >
                <div className="bg-white w-full border">
                  <div
                    className={`${item.bg} p-5 flex flex-col items-center justify-center`}
                  >
                    <p className="text-base text-white">{item.title}</p>
                  </div>

                  <div className="flex flex-col">
                    {item.id === "pending" && (
                      <>
                        {pendingList.map(
                          (item, index) =>
                            pendingList.length !== 0 && (
                              <Link
                                key={index}
                                to="/payout-details"
                                state={item}
                              >
                                <button
                                  className="hover:bg-gray-100 w-full"
                                  key={index}
                                >
                                  <div className="p-4 flex flex-row border-b items-center justify-between">
                                    <div className="flex flex-row">
                                      <p className="text-sm mr-5">
                                        {currentPendingIndex + index + 1}.
                                      </p>
                                      <p className="text-sm">{item.email}</p>
                                    </div>
                                    <img
                                      src={Next}
                                      alt={""}
                                      className="w-[13px] h-[13px]"
                                    />
                                  </div>
                                </button>
                              </Link>
                            )
                        )}

                        {pendingList.length !== 0 ? (
                          <Pagination
                            pages={totalPendingPages}
                            currentPage={currentPendingPage}
                            handleNext={handlePendingNext}
                            handlePrev={handlePendingPrev}
                            currentIndex={currentPendingIndex}
                          />
                        ) : (
                          <div className="p-5 flex flex-col items-center">
                            <p>{payouts.emptyRecord}</p>
                          </div>
                        )}
                      </>
                    )}

                    {item.id === "approved" && (
                      <>
                        {approvedList.map(
                          (item, index) =>
                            approvedList.length !== 0 && (
                              <Link
                                key={index}
                                to="/payout-details"
                                state={item}
                              >
                                <button
                                  className="hover:bg-gray-100 w-full"
                                  key={index}
                                >
                                  <div className="p-4 flex flex-row border-b items-center justify-between">
                                    <div className="flex flex-row">
                                      <p className="text-sm mr-5">
                                        {currentApprovedIndex + index + 1}.
                                      </p>
                                      <p className="text-sm">{item.email}</p>
                                    </div>
                                    <img
                                      src={Next}
                                      alt={""}
                                      className="w-[13px] h-[13px]"
                                    />
                                  </div>
                                </button>
                              </Link>
                            )
                        )}

                        {approvedList.length !== 0 ? (
                          <Pagination
                            pages={totalApprovedPages}
                            currentPage={currentApprovedPage}
                            handleNext={handleApprovedNext}
                            handlePrev={handleApprovedPrev}
                            currentIndex={currentApprovedIndex}
                          />
                        ) : (
                          <div className="p-5 flex flex-col items-center">
                            <p>{payouts.emptyRecord}</p>
                          </div>
                        )}
                      </>
                    )}

                    {item.id === "declined" && (
                      <>
                        {declinedList.map(
                          (item, index) =>
                            declinedList.length !== 0 && (
                              <Link
                                key={index}
                                to="/payout-details"
                                state={item}
                              >
                                <button
                                  className="hover:bg-gray-100 w-full"
                                  key={index}
                                >
                                  <div className="p-4 flex flex-row border-b items-center justify-between">
                                    <div className="flex flex-row">
                                      <p className="text-sm mr-5">
                                        {index + 1}.
                                      </p>
                                      <p className="text-sm">{item.email}</p>
                                    </div>
                                    <img
                                      src={Next}
                                      alt={""}
                                      className="w-[13px] h-[13px]"
                                    />
                                  </div>
                                </button>
                              </Link>
                            )
                        )}

                        {declinedList.length !== 0 ? (
                          <Pagination
                            pages={totalDeclinedPages}
                            currentPage={currentDeclinedPage}
                            handleNext={handleDeclinedNext}
                            handlePrev={handleDeclinedPrev}
                            currentIndex={currentDeclinedIndex}
                          />
                        ) : (
                          <div className="p-5 flex flex-col items-center">
                            <p>{payouts.emptyRecord}</p>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Payout;
