import React, { useState, useEffect } from "react";
import MenuItem from "../UI/MenuItem";

import Card from "../UI/Card";
import Spacer from "../UI/Spacer";
import Search from "../UI/Search";
import Border from "../UI/Border";
import Table from "../UI/Table";
import BrandList from "../UI/BrandList";
import PromoterList from "../UI/PromoterList";
import Blockeduser from "../UI/Blockeduser";

// import { BorderAll } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import { InputAdornment, TextField } from "@material-ui/core";
import SideBar from "../UI/SideBar";
import ApiCall from "../BackendCall";
import { TouchApp } from "@material-ui/icons";

export default function AdminDashBoard() {
  const [current, setcurrent] = useState("Brand");
  const [data, setdata] = useState({});

  const getdata = async () => {
    const response = await ApiCall.get("/adminstat");
    console.log("data for admin", response.data);
    setdata(response.data);
  };

  useEffect(() => {
    console.log("admin dadhboard clled");
    getdata();
  }, []);

  const selectiontable = () => {
    if (current == "Brand") return <BrandList />;
    else if (current == "Blocked Users") return <Blockeduser />;
    else return <PromoterList />;
  };
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
            Heading={data.totalsale || "0"}
            Color="green"
            ICON={TouchApp}
          />
          <Card
            SubHeading="Successful Sales"
            Heading={data.totalsucceed || "0"}
            Color="green"
            ICON={TouchApp}
          />
          <Card
            SubHeading="Returns"
            Heading={data.Refund || "0"}
            Color="red"
            ICON={TouchApp}
          />
          <Card
            SubHeading="Revenue(Rs)"
            Heading={data.revenuecount || "0"}
            Color="green"
            ICON={TouchApp}
          />
          <Card
            SubHeading="Earnings(Rs)"
            Heading={data.profit || "0"}
            Color="green"
            ICON={TouchApp}
          />
        </div>
        <Spacer space="10" />
        <div style={{ display: "flex" }}>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              background: "#242333",
              padding: "8px",
              marginRight: "3px",
              background: current == "Brand" ? "#242333" : "gray",
              color: current == "Brand" ? "white" : "#242333",
            }}
            onClick={() => setcurrent("Brand")}
          >
            Brand
          </div>
          <div
            onClick={() => setcurrent("Promoters")}
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              background: "#242333",
              padding: "8px",
              marginRight: "3px",
              background: current == "Promoters" ? "#242333" : "gray",
              color: current == "Promoters" ? "white" : "#242333",
            }}
          >
            Promoters
          </div>
          <div
            onClick={() => setcurrent("Blocked Users")}
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              background: current == "Blocked Users" ? "#242333" : "gray",
              color: current == "Blocked Users" ? "white" : "#242333",
              padding: "8px",
            }}
          >
            Blocked Users
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              marginBottom: "5px",
            }}
          ></div>
        </div>
        <Border space="4" />
        {selectiontable()}
      </div>
    </div>
  );
}
