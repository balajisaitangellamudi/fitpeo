import React from "react";
import "../../Styles/Navbar/Sidebar.css";
import { FaAnglesRight } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import { side_nav_links } from "../../data/Nav";
const Sidebar = (props) => {
  const { setExpanded, expanded } = props;
  console.log("side bar", expanded);

  return (
    <div className={`aside ${expanded ? "d-block" : "d-none"} d-xl-block`}>
      {/* logo or Name */}

      <h2 className="d-flex align-items-center main_title">
        <span className="logo_primary">Health</span>
        <span className="logo_secondary ">care.</span>

        {/* Back Icon (Toggle) */}
        <span
          className="ms-auto back_icons d-block d-xl-none"
          onClick={() => setExpanded((prev) => !prev)}
        >
          <FaAnglesRight
            className={`toggle_icon ${expanded ? "rotate_icon" : ""}`}
          />
        </span>
      </h2>

      {/* nav links */}
      {side_nav_links &&
        Object.keys(side_nav_links).map((section, index) => (
          <div key={index} className="side_nav_section">
            <h6 className="section-title text-muted mb-2">{section}</h6>
            <ul className="list-unstyled">
              {side_nav_links[section].map((linkItem, idx) => (
                <li
                  key={idx}
                  className="nav-item d-flex align-items-center mb-2"
                >
                  <NavLink
                    to={linkItem.link}
                    className={({ isActive, isPending }) =>
                      `nav_sub_headings ${
                        isPending
                          ? "nav_pending"
                          : isActive
                          ? "nav_active"
                          : "nav_links"
                      }`
                    }
                  >
                    <linkItem.icon className="me-3 fs-4" />
                    {linkItem.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Sidebar;
