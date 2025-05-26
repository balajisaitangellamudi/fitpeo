import React from "react";

const activityData = {
  Mon: [30, 60, 40, 20, 45],
  Tues: [40, 75, 25, 50, 35],
  Wed: [35, 55, 30, 40, 20],
  Thurs: [25, 60, 50, 35, 30],
  Fri: [70, 50, 20, 60, 55],
  Sat: [60, 40, 30, 20, 50],
  Sun: [50, 30, 65, 40, 25],
};

const barColors = ["#d6d6d6", "#00e5ff", "#4b4bf9", "#d6d6d6", "#d6d6d6"];

const ActivityChart = () => {
  return (
    <div
      style={{
        backgroundColor: "#f9fbfd",
        borderRadius: "16px",
        padding: "24px",
        width: "100%",
        margin: "0 auto",
        boxShadow: "0 4px 10px rgba(0,0,0,0.03)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ fontWeight: "bold", color: "#222", fontSize: "1.1rem" }}>
          Activity
        </h3>
        <span style={{ fontSize: "0.9rem", color: "#888" }}>
          3 appointments this week
        </span>
      </div>

      {/* Graph */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "12px",
          alignItems: "center",
          width: "100%",
        }}
      >
        {Object.entries(activityData).map(([day, heights]) => (
          <div
            key={day}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Bar Group */}
            <div
              style={{
                display: "flex",
                gap: "4px",
                alignItems: "center",
                height: "120px",
              }}
            >
              {heights.map((h, j) => (
                <div
                  key={j}
                  style={{
                    width: "6px",
                    height: `${h}px`,
                    backgroundColor: barColors[j % barColors.length],
                    borderRadius: "10px",
                  }}
                />
              ))}
            </div>

            {/* Day Label */}
            <div
              style={{
                marginTop: "6px",
                fontSize: "0.75rem",
                color: "#777",
              }}
            >
              {day}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;
