import React from "react";
import { Outlet } from "react-router-dom";

const Mainbar = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Mainbar;
