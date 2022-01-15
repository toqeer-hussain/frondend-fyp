import React, { useEffect, useState } from "react";
import MenuItem from "../UI/MenuItem";
import Hex from "colornames";
import Card from "../UI/Card";
import Spacer from "../UI/Spacer";
import Search from "../UI/Search";
import Border from "../UI/Border";
import Table from "../UI/Table";
// import { BorderAll } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import { InputAdornment, TextField } from "@material-ui/core";
import SideBar from "../UI/SideBar";
import ProDashboard from "../Tables/Promoter/ProDashboard";
import ProDashboard2 from "../Tables/Promoter/Dashboard2";
import { AddShoppingCart, TouchApp } from "@material-ui/icons";
import ApiCall from "../BackendCall";

export default function ProDashBoard() {
  const [data, setdata] = useState({});
  const [token, settoken] = useState("");
  const getdata = async () => {
    const response = await ApiCall.get("/prostat");
    console.log("data recired", response.data);
    setdata(response.data);
  };

  useEffect(() => {
    settoken(JSON.parse(localStorage.getItem("token")));
    getdata();
  }, []);
  console.log("promoter");
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
            DashBoad
          </p>
          <p
            style={{
              fontFamily: "MyFont",
              fontWeight: "600",
              fontStyle: "normal",
              color: `${Hex("gray")}CC`,
              fontSize: "15px",
            }}
          >
            Dashboard for Promoter
          </p>
        </div>
        {/* <Spacer space="10" /> */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Card
            SubHeading="Total Click"
            Heading={data.click}
            Color="green"
            ICON={TouchApp}
          />
          <Card
            SubHeading="Total Sales"
            Heading={data.totalsale}
            Color="green"
            ICON={TouchApp}
          />
          <Card
            SubHeading="Revenue(Rs)"
            Heading={data.revenuecount}
            Color="green"
            ICON={TouchApp}
          />
          <Card
            SubHeading="Returns"
            Heading={data.Refund}
            Color="red"
            ICON={TouchApp}
          />
          <Card
            SubHeading="Pen.Comissions(RS)"
            Heading={data.pendingcom || 0}
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
            }}
          >
            <a
              style={{ color: "white", textDecoration: "none" }}
              href={`http://localhost:3000/downloadpromoterSale/?token=${token}`}
            >
              EXPORT
            </a>
          </div>
        </div>
        <Border space="5" />
        <ProDashboard />
        <Spacer space="10" />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: "25px" }}>TOP Brands</div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "Center",
              marginBottom: "5px",
            }}
          >
            <div
              style={{
                background: "green",
                color: "white",
                padding: "3px",

                textDecoration: "none",
                // alignSelf: "center",
              }}
            >
              <a
                style={{ color: "white", textDecoration: "none" }}
                href={`http://localhost:3000/downloadtopbrand/?token=${token}`}
              >
                EXPORT
              </a>
            </div>
          </div>
        </div>
        <Border space="4" />
        <ProDashboard2 />
      </div>
    </div>
  );
}
