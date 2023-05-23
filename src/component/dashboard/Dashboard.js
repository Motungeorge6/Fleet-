import React from "react";
import Mainbar from "../mainBar/Mainbar";
import SideBar from "../sideBar/SideBar";
import {Outlet} from "react-router-dom";

const Dashboard = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        overflow: "hidden",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          width: "270px",
          height: "100vh",
          display: "flex",
        }}
      >
        <SideBar />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          width: "calc(100vw - 270px)",
        }}
      >
        <Mainbar />
      </div>
    </div>
  );
};

export default Dashboard;
