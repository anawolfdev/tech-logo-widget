import React from "react";
import Logo from "./Logo";

export default function LogoPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0,
        background: "transparent"
      }}
    >
      <Logo />
    </div>
  );
}
