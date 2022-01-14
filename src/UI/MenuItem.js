import React from "react";
import { Link } from "react-router-dom";
import {
 Tooltip
} from "@material-ui/core";


export default function MenuItem({
  Icon,
  subheading,
  nothead,
  active,
  onPress,
  tooltext
}) {
  const nav = () => {
    console.log("called", subheading);
    onPress(subheading);
    // return subheading;
  };

  return (
    <Tooltip title={tooltext} >
    <div
      onClick={nav}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px",
        cursor: "pointer",
        margin: "10px",
        borderRadius: "15px",
        backgroundColor: active ? "rgba(0, 128, 0, 0.25)" : "",
      }}
    >
      <Link
        to={!nothead && subheading}
        style={{
          textDecoration: "none",
          display: "flex",
          justifySelf: "center",
        }}
      >
        <Icon
          // fontSize="large"
          style={{
            fontSize: "30px",
            fill: active ? "rgba(0, 128, 0, 0.7)" : "rgba(0, 128, 0, 0.25)",
            // backgroundColor: active ? "rgba(0, 128, 0, 0.25)" : "",
          }}
        />
      </Link>
      {nothead && <span style={{ fontSize: "13px", color: active ? "white" : "black" }}>
        {subheading}
      </span>}
    </div>
    </Tooltip>
  );
}
