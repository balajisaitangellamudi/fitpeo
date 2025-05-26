import React, { useState } from "react";
import "../../Styles/Navbar/Header.css";
import { nav_icons } from "../../data/Nav";
import { CiSearch } from "react-icons/ci";
import { RiNotification3Fill } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";

const Header = (props) => {
  const { setExpanded } = props;
  const [searchText, setSearchText] = useState("");

  console.log(searchText);

  return (
    <div className="header_container">
      <div
        className="col-12 d-flex align-items-center h-100 "
        style={{ backgroundColor: "#fff" }}
      >
        {/* Sidebar toggle and logo */}
        <div className="nav_menu" onClick={() => setExpanded((prev) => !prev)}>
          <IoMdMenu />
          <h2 className="d-flex align-items-center main_title p-0 m-0">
            <span className="logo_primary">Health</span>
            <span className="logo_secondary">care.</span>
          </h2>
        </div>

        {/* Search input and notification icon */}
        <div className="col-6" style={{ padding: "0px 32px" }}>
          <div className="input_container w-100">
            <CiSearch className="search_inputs_icons" />
            <input
              className="w-100 mb-0"
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <RiNotification3Fill
              className="search_inputs_icons"
              style={{ color: "#3734a9" }}
            />
          </div>
        </div>

        {/* Right-side nav icons */}
        <div className="ms-auto h-100 col-6 d-flex align-items-center header_section_2 pe-0 pe-xl-4">
          <ul className="d-flex justify-content-end mb-0 p-0 align-items-center gap-3 w-100">
            {nav_icons.map((item, index) => (
              <li
                key={index}
                className={`nav_icon_container ${
                  typeof item.icon === "string"
                    ? "nav_image_container p-2 bg-light"
                    : ""
                }`}
              >
                {/* Render either icon or image ... type */}
                {typeof item.icon === "string" ? (
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="nav_profile_img"
                  />
                ) : (
                  <item.icon className="nav_icon" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
