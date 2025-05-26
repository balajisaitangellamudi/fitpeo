import React, { useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import "../../Styles/Navbar/Navbar.css";
import Header from "./Header";
const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* side menu  */}
      <aside>
        <Sidebar setExpanded={setExpanded} expanded={expanded} />
      </aside>

      <div className={`layout ${expanded ? "layout_hover" : ""}`}>
        <main className="d-flex main_container mx-auto w-100">
          {/* Header Nav */}
          <Header setExpanded={setExpanded} />

          {/* <div className="p-xl-4 pt-xl-2 mx-xl-1 pb-0 pt-4 px-3 mx-auto w-100"> */}
          <div className="col-12 pt-2 overflow-hidde">
            <Outlet />
          </div>
        </main>
      </div>

      {/* background ligh black for mobile view overlay */}
      {expanded && <div className="overlay d-block d-xl-none"></div>}
    </>
  );
};

export default NavBar;
