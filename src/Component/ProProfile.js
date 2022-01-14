import { TextField } from "@material-ui/core";
import React from "react";
import Hex from "colornames";
import Border from "../UI/Border";
import Card from "../UI/Card";
import MenuItem from "../UI/MenuItem";
import SideBar from "../UI/SideBar";
import Spacer from "../UI/Spacer";
import ApiCall from "../BackendCall";
import PromoterProfile from "./PromoterProfile";
import Probankdetail from "./Probankdetail";
export default function Profile() {
  console.log("it is promoter profile");
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
            Profile
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
            Profile for Promoter
          </p>
        </div>
        <Spacer space="10" />

        <PromoterProfile />
        <Spacer space="20" />

        <div style={{ fontWeight: "bold", fontSize: "25px" }}>Bank Detail</div>

        <Border space="5" />
        <Spacer space="10" />
        <Probankdetail />
      </div>
    </div>
  );
}
