import React, { useEffect, useState } from "react";
import MenuItem from "../UI/MenuItem";

import Card from "../UI/Card";
import Spacer from "../UI/Spacer";
import Search from "../UI/Search";
import Border from "../UI/Border";
import Table from "../UI/Table";
// import { BorderAll } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import { InputAdornment, TextField } from "@material-ui/core";
import SideBar from "../UI/SideBar";
import BrandDashBoard from "../Tables/Brand/DashboardTable";
import BrandDashBoard2 from "../Tables/Brand/Dashboard2";
import ApiCall from "../BackendCall";
import { TouchApp } from "@material-ui/icons";

export default function BdDashBoard() {
  const [data, setdata] = useState("");
  const [token, settoken] = useState("");
  const getdata = async () => {
    const response = await ApiCall.get("/adminpending");
    console.log("recried data", response.data);

    console.log("comission", response.data);
    setdata(response.data);
  };
  useEffect(() => {
    settoken(JSON.parse(localStorage.getItem("token")));
    getdata();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div
        style={{
          flex: 1,
          marginLeft: "60px",
          marginRight: "60px",
          marginTop: "55px",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "MyFont",
              fontWeight: "600",
              fontStyle: "bold",
              fontSize: "35px",
            }}
          >
            Dashboard
          </p>
          <p
            style={{
              fontFamily: "MyFont",
              fontWeight: "600",
              fontStyle: "normal",
              color: `#999999`,
              fontSize: "15px",
            }}
          >
            Stats Overview
          </p>
        </div>
        <Spacer space="10" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Card
            SubHeading="Total Sales"
            Heading={data.totalSale}
            Color="green"
            ICON={TouchApp}
          />{" "}
          <Card
            SubHeading="Successful Sales"
            Heading={data.succeed}
            Color="green"
            ICON={TouchApp}
          />{" "}
          <Card
            SubHeading="Revenue(Rs)"
            Heading={data.revenuecount}
            Color="green"
            ICON={TouchApp}
          />{" "}
          <Card
            SubHeading="Returns"
            Heading={data.Refund}
            Color="red"
            ICON={TouchApp}
          />
          <Card
            SubHeading="Pen.Comissions(Rs)"
            Heading={data.pendingcom}
            Color="red"
            ICON={TouchApp}
          />
        </div>
        <Spacer space="10" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontWeight: "bold", fontSize: "25px" }}>
            Recent Sales
          </div>
          <div
            style={{
              background: "green",
              color: "white",
              padding: "3px",
              alignSelf: "center",
              cursor: "pointer",
            }}
            onClick={async () => {
              // await ApiCall.get("/downloadSales");
            }}
          >
            <a
              style={{ color: "white", textDecoration: "none" }}
              href={`https://jvsea.herokuapp.com/downloadSales/?token=${token}`}
            >
              EXPORT
            </a>
          </div>
        </div>
        <Border space="5" />
        <BrandDashBoard />
        <Spacer space="10" />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: "25px" }}>
            TOP Promoters
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "Center",
              marginBottom: "5px",
            }}
          >
            {/* <TextField
              id="standard-basic"
              Heading="Brands"
              type="text"
              style={{ marginRight: "5px" }}
              label="Search"
              placeholder="Search Here"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            /> */}
            <div
              style={{
                background: "green",
                color: "white",
                padding: "3px",
                cursor: "pointer",
                // alignSelf: "center",
              }}
            >
              <a
                style={{ color: "white", textDecoration: "none" }}
                href={`https://jvsea.herokuapp.com/downloadtoppromoter/?token=${token}`}
              >
                EXPORT
              </a>
            </div>
          </div>
        </div>
        <Border space="4" />
        <BrandDashBoard2 />
      </div>
    </div>
  );
}
