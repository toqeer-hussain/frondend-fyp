import React, { useContext, useEffect, useState } from "react";
import { Colors } from "../Constant/Colors";
import MyButton from "../UI/MyButton";

import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../App";

import ApiCall from "../BackendCall";
import { LocalHospitalTwoTone } from "@material-ui/icons";

console.log(Colors.Primary);
export default function Nav({ login }) {
  const action = useContext(UserContext);

  const location = useLocation();
  const history = useHistory();
  const [loggedin, setloggedin] = useState("");

  const NavHead = location.pathname.replace("/", "");

  useEffect(() => {
    setloggedin(localStorage.getItem("token"));
  });

  console.log(NavHead);
  return (
    <div>
      <div
        style={{
          // backgroundColor: Colors.Primary,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "7px",
          position: "absolute",
          width: "100%",
        }}
      >
        <div style={{ flex: 1, paddingLeft: "50px" }}></div>
        <div>
          {loggedin && (
            <MyButton
              fillColor="#00A254"
              style={{ marginRight: "20px" }}
              onPress={() => {
                history.push("/DashBoard");
              }}
            >
              DashBoard
            </MyButton>
          )}
        </div>
        <div style={{ display: "flex" }}>
          <Link to="/Market">
            {!(NavHead == "Market") && (
              <div>
                <MyButton
                  fillColor="#00A254"
                  style={{ marginRight: "20px" }}
                  onPress={() => {
                    console.log("clicked");
                  }}
                >
                  Marketplace
                </MyButton>
              </div>
            )}
          </Link>
          {!action.login ? (
            <div style={{}} onMouseEnter={(e) => console.log("value", e)}>
              {!(NavHead == "Login" || NavHead == "admin") ? (
                <Link to="/Login">
                  <MyButton style={{ marginRight: "25px" }}>Login</MyButton>
                </Link>
              ) : (
                <Link to="/Signup">
                  <MyButton style={{ marginRight: "25px" }}>Sign Up</MyButton>
                </Link>
              )}
            </div>
          ) : (
            <MyButton
              onmo
              style={{
                marginRight: "25px",
                border: "1px solid red",
                color: "red",
              }}
              fillColor={"#f5f5f5"}
              hover
              onPress={() => {
                action.setlogin(false);
                action.setadmin(false);
                localStorage.removeItem("token");

                ApiCall.defaults.headers.common["x-access-token"] = JSON.parse(
                  localStorage.getItem("token")
                );
                history.replace("/");
              }}
            >
              Logout
            </MyButton>
          )}
        </div>
      </div>
    </div>
  );
}
