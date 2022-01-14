import React, { useState, useContext, useEffect } from "react";
import MenuItem from "./MenuItem";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AttachMoneySharpIcon from "@material-ui/icons/AttachMoneySharp";
import EditSharpIcon from "@material-ui/icons/EditSharp";
import { useLocation } from "react-router-dom";
import { UserContext } from "../App";
import jwt_decode from "jwt-decode";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import BrandLogo from "../assets/JVsea.png";

export default function SideBar() {
  const [selectedid, setselected] = useState("Dashboard");
  const location = useLocation();
  const [user, setuser] = useState("");
  const selected = location.pathname.replace("/", "");
  const action = useContext(UserContext);

  console.log("user user", selected);
  useEffect(() => {
    setuser(jwt_decode(JSON.parse(localStorage.getItem("token"))));
  }, []);

  return (
    <>
      <div
        style={{
          // background: "gray",
          display: "flex",
          flexDirection: "column",
          width: "70px",
          minHeight: "625px",
    height:"100vh",
          boxShadow: "-3px 0px 10px 4px rgba(0,0,0,0.2)",
        }}
      >
        <div>
          <img
            src={BrandLogo}
            alt="brand"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <MenuItem Icon={AccountCircleIcon} nothead subheading={user.name} tooltext="User Profile" />
        <MenuItem
          Icon={DashboardIcon}
          active={selected == "DashBoard"}
          subheading="DashBoard"
          onPress={setselected}
          tooltext="Dashboard"
        />
        <MenuItem
          Icon={AttachMoneySharpIcon}
          active={selected == "Transaction"}
          subheading="Transaction"
          onPress={setselected}
          tooltext="Transaction"
        />

        {user.Role != "admin" && (
          <MenuItem
            Icon={EditSharpIcon}
            active={selected == "Editing"}
            subheading="Editing"
            onPress={setselected}
            tooltext="Change Your Profile data"
          />
        )}
        {user.Role == "admin" && (
          <MenuItem
            Icon={MoreHoriz}
            active={selected == "Pending"}
            subheading="Pending"
            onPress={setselected}
          />
        )}
      </div>
    </>
  );
}
