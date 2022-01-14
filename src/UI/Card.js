import React from "react";
import Hex from "colornames";

export default function Card({ Heading, SubHeading, Color, ICON, image }) {
  console.log("image", ICON);
  return (
    <div
      style={{
        display: "inline-flex",
        // background: Color,
        // flex: 1,
        // marginRight: "10px",
        // color: "red",
        backgroundColor: "white",
        borderLeftColor: Hex(Color) + "B3",
        borderLeftWidth: "2px",
        borderLeftStyle: "solid",
        flexDirection: "column",
        justifyContent: "center",

        // border: "10px solid green",

        padding: "8px",

        paddingLeft: "25px",
        // fontWeight: "600",
        marginTop: "40px",
        paddingRight: "60px",
        boxShadow: ` 1px 1px 10px 7px ${Hex("gray") + "1A"}`,
        // borderRadius: "15px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            borderRadius: "50%",
            backgroundColor: Hex(Color) + "40",
            padding: "8px",
            justifySelf: "center",
            display: "flex",
          }}
        >
          <ICON style={{ fill: Hex(Color) + "B3" }} />
        </div>
        <div style={{ padding: "10px" }}>
          <div
            style={{
              // fontSize: "22px",
              fontFamily: "MyFont",
              fontWeight: "600",
              fontStyle: "normal",
              color: `${Hex("black")}`,
            }}
          >
            {Heading}
          </div>
          <div
            style={{
              fontSize: "10px",
              color: `${Hex("gray")}CC`,
              fontFamily: "MyFont",
              fontWeight: "600",
              fontFamily: "Gilroy",
            }}
          >
            {SubHeading}
          </div>
        </div>
      </div>
    </div>
  );
}
