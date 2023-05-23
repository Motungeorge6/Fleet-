import React from "react";
import {Outlet} from "react-router-dom";

const Mainbar = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Outlet />
    </div>
  );
};

export default Mainbar;
