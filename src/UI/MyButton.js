import React from "react";

export default function MyButton({
  fillColor,
  children,
  hover,
  onPress,
  ...props
}) {
  // console.log(props.style);
  return (
    <span
      style={{
        margin: "2px",
        backgroundColor: fillColor ? fillColor : "#242333",
        // border: !fillColor ? "1px solid white" : "1px solid #242333",
        padding: "12px",
        fontFamily: "Arial",
        textAlign: "center",
        display: "inline-block",
        justifyContent: "center",
        height: "18px",

        maxHeight: "18px",
        alignItems: "center",
        cursor: "pointer",
        color: "white",
        boxShadow: ` 1px 1px 2px 1px ${fillColor || "#242333"}`,
        ...props.style,
      }}
      onClick={onPress}
    >
      {children}
    </span>
  );
}
