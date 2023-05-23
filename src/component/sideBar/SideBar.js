import React from "react";
import {NavLink} from "react-router-dom";
import {upperLinks, lowerLinks} from "./SideBarLink";
import "./Sidebar.css";
import Logo from "../assets/logo.png";
import {AppLogoIcon, DashboardIcon, HistoryIcon, PersonIcon} from "../../icons";

const SideBar = () => {
  const links = [
    {title: "Dashbaord", icon: DashboardIcon},
    {title: "Booking history", icon: HistoryIcon},
    {title: "Profile", icon: PersonIcon},
  ];
  return (
    <div className="sidebar-container">
      <div className="logo-container">
        <AppLogoIcon />
      </div>

      <div className="sidebar-links-container">
        {links.map(item => (
          <div
            key={item.title}
            className={`each-link ${
              item.title === "Dashbaord" && "active-link"
            }`}
          >
            <item.icon />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
