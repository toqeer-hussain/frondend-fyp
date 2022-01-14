import React, { useEffect, useState } from "react";
import Border from "../UI/Border";
import Card from "../UI/Card";
import MenuItem from "../UI/MenuItem";
import SideBar from "../UI/SideBar";
import Spacer from "../UI/Spacer";
import Table from "../UI/Table";

import ProTransaction from "../Tables/Brand/BrandTransaction";
// import ProDashBoard from "./ProDashboard";

import ApiCall from "../BackendCall";
import { TouchApp } from "@material-ui/icons";
const getdate = (value) => {
  if (value) {
    console.log("what is vlaue", value);
    var today = new Date(value);
    today.setDate(today.getDate() + 15);
    return (
      today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
    );
  } else {
    return undefined;
  }
};
export default function Transaction() {
  const [data, setdata] = useState({});
  const getdata = async () => {
    const response = await ApiCall.get("/protransstat");
    console.log("data for promote", response.data);
    setdata(response.data);
  };
  useEffect(() => {
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
            Transaction
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
            Transaction of Promoter
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Card
            SubHeading="Com. Recieveds (RS)"
            Heading={`${data.sum || "0"}`}
            Color="green"
            ICON={TouchApp}
          />
          <Card
            SubHeading="Com. Pending (RS)"
            Heading={`${data.pendingrevenue || "0"}`}
            Color="red"
            ICON={TouchApp}
          />

          <Card
            SubHeading="Next Payout"
            Heading={getdate(data.next) || "-"}
            Color="green"
            ICON={TouchApp}
          />
        </div>
        <Spacer space="10" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontWeight: "bold", fontSize: "25px" }}>
            Recent Transaction
          </div>
          <div
            style={{
              background: "green",
              color: "white",
              padding: "3px",
              alignSelf: "center",
            }}
          >
            EXPORT
          </div>
        </div>
        <Border space="5" />
        <ProTransaction />
        <Spacer space="10" />
      </div>
    </div>
  );
}
