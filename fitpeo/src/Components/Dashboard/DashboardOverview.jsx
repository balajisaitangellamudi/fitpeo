import React from "react";
import "../../Styles/Navbar/Dashboard.css";
import { IoIosArrowDown, IoIosHeart } from "react-icons/io";
import humanBody from "../../assets/human_body.png";
import { IoScanOutline } from "react-icons/io5";
import { GiLeg } from "react-icons/gi";
import { TbArrowBigLeftFilled, TbArrowBigRightFilled } from "react-icons/tb";
import WeeklySchedule from "./WeeklySchedule";
import ActivityChart from "./ActivityChart";

import { FaArrowRightLong } from "react-icons/fa6";
import { upcomingSchedule } from "../../data/UpcomingSchedule";
import { appointemnts } from "../../data/Appointments";
import { workingLevel } from "./WorkingLevel";
import { formatDay } from "../../Utils/Helper";
import { HealthCards } from "./HealthCards";
import { Cards } from "./Cards";

const DashboardOverview = () => {
  return (
    <>
      <div className="col-12 d-block d-xl-flex">
        {/* section-1 */}
        <div className="col-12 col-xl-6">
          {/* Heading */}
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="main_heading">Dashboard</h2>
            <p className="mb-0 px-2 d-flex sub_headings">
              This Week
              <span className="ms-2 ">
                <IoIosArrowDown />
              </span>
            </p>
          </div>

          {/* human body section  */}

          <div className="col-12 d-flex flex-wrap">
            <div className="col-12 col-xl-6">
              <div className="main_card m-3">
                <div className="position-relative d-flex justify-content-center">
                  <img
                    src={humanBody}
                    alt="human body img"
                    // style={{
                    //   minHeight: "300px",
                    //   maxHeight: "450px",
                    //   minWidth: "240px",
                    // }}
                  />
                </div>
              </div>
            </div>

            {/* working level  */}
            <div className="col-12 col-xl-6">
              {workingLevel &&
                workingLevel.map((items, index) => (
                  <div key={index} style={{ paddingRight: "15px" }}>
                    <HealthCards
                      imgUrl={items.url}
                      title={items.title}
                      date={items.date}
                      percentage={items.percentage}
                    />
                  </div>
                ))}

              <div className="d-flex justify-content-end px-3">
                <p className="float-right mb-0 py-3 px-2 d-flex sub_headings">
                  Details
                  <span className="ms-2 ">
                    <FaArrowRightLong />
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* activity cahary */}
          <div style={{ padding: "24px" }}>
            <ActivityChart />
          </div>
        </div>

        <div className="col-12 col-xl-6 dash_section_2 pb-3">
          <div className="d-flex justify-content-between align-items-center px-4">
            <h4 className="main_heading mb-0 px-0">October 2021</h4>

            <div style={{ fontSize: "22px", color: "#3734a9" }}>
              <TbArrowBigLeftFilled className="me-1" />
              <TbArrowBigRightFilled className="ms-1" />
            </div>
          </div>

          {/* schedule */}
          <WeeklySchedule />

          {/* appointments */}
          <div className="d-flex gap-3" style={{ padding: "12px 32px" }}>
            {appointemnts &&
              appointemnts.map((items, index) => (
                <Cards items={items} index={index} />
              ))}
          </div>

          {/* Upcoming schedule */}
          <h2 className="main_heading" style={{ padding: "42px 32px 25px" }}>
            The Upcoming Schedule
          </h2>

          {upcomingSchedule &&
            Object.keys(upcomingSchedule).map((items, index) => (
              <div key={index}>
                <h4 style={{ padding: "10px 32px", color: "#262b43" }}>
                  {formatDay(items)}
                </h4>
                <div
                  key={index}
                  className="d-flex gap-3"
                  style={{ padding: "12px 32px" }}
                >
                  {upcomingSchedule[items].map((subItems, i) => (
                    <Cards items={subItems} index={i} sameColor={true} />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default DashboardOverview;
