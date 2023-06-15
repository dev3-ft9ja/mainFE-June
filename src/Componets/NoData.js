import React from "react";
import { Link } from "react-router-dom";

const NoData = () => {
  return (
    <div className="nodatabox">
      <p>Dear Trader,</p>
      <p>Welcome to your FT9ja Dashboard.</p>
      <p>
        If you don’t have an Account yet, you can get one by clicking{" "}
        <Link className="textLink" to="/">
          here.
        </Link>
      </p>
      <p>
        If you already have an Account, select your current account in the My
        Account tab at the top-left corner of this page.
      </p>
      <p>You are welcome to get up to 10 Accounts with FT9ja!</p>
      <p style={{ marginBottom: "-18px" }}>Happy Trading</p>
      <p>
        <b>Team FT9ja</b>
      </p>
    </div>
  );
};

export default NoData;
