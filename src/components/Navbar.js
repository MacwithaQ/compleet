import React from "react";
import Logo from "../Icons/Logo";
import CategoriesIco from "../Icons/CategoriesIco";
import DailyPlannerIco from "../Icons/DailyPlannerIco";
import CalendarIco from "../Icons/CalendarIco";
import SettingsIco from "../Icons/SettingsIco";

const Navbar = () => {
  return (
    <div className="navBar">
      <div>
        <Logo className="logo" />
      </div>
      <div className="navTab">
        <div className="navTabIcon">
          <CategoriesIco />
          <a>Categories</a>
        </div>
        <div className="navTabIcon">
          <DailyPlannerIco />
          <a>Daily Planner</a>
        </div>
        <div className="navTabIcon">
          <CalendarIco />
          <a>Calendar</a>
        </div>
        <div className="navTabIcon">
          <SettingsIco />
          <a>Settings</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
