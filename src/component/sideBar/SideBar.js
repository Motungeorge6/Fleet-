import React from "react";
import { NavLink } from "react-router-dom";
import { upperLinks, lowerLinks } from "./SideBarLink";
import "./Sidebar.css";
import Logo from "../assets/logo.png";

const SideBar = () => {
  return (
    <>
      <div
        style={{
          background: "#ECF1F8",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          width: "272px",
          justifyContent: "space-between",
          padding: "20px 0",
        }}
      >
        {/* <img src={Logo} /> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {upperLinks.map((link) => {
            const { id, url, text } = link;
            return (
              <div className="sidebar-links">
                <NavLink
                  to={url}
                  style={{
                    textDecoration: "none",

                    margin: "auto",
                  }}
                  className={({ isActive }) =>
                    `sidebar-links ${
                      isActive ? "activeClassName" : "sidebar-links"
                    }`
                  }
                >
                  {text}
                </NavLink>
              </div>
            );
          })}
        </div>
        <div
          style={{
            color: "white",
            fontSize: "24px",
            height: "63px",
            width: "270px",

            justifyContent: "space-between",
            gap: "0.5rem",
            display: "flex",
          }}
        >
          {lowerLinks.map((link) => {
            const { id, url, text } = link;
            return (
              <div>
                <NavLink
                  to={url}
                  style={{
                    textDecoration: "none",

                    fontSize: "24px",
                  }}
                  className={({ isActive }) =>
                    `sidebar-links ${
                      isActive ? "activeClassName" : "sidebar-links"
                    }`
                  }
                >
                  {text}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideBar;
