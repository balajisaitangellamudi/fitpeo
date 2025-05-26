import React from "react";

const days = [
  { label: "Mon", date: 25, times: ["10:00", "11:00", "12:00"] },
  { label: "Tues", date: 26, times: ["08:00", "09:00", "10:00"], selected: 1 },
  { label: "Wed", date: 27, times: ["12:00", null, "13:00"] },
  { label: "Thurs", date: 28, times: ["10:00", "11:00", null], selected: 1 },
  { label: "Fri", date: 29, times: [null, "14:00", "16:00"] },
  { label: "Sat", date: 30, times: ["12:00", "14:00", "15:00"] },
  {
    label: "Sun",
    date: 31,
    times: ["09:00", "10:00", "11:00"],
    disabled: true,
  },
];

const WeeklySchedule = () => {
  return (
    <div
      className="container mt-3"
      style={{
        maxWidth: "960px",
        background: "#f9fafc",
        borderRadius: "12px",
        padding: "12px 32px",
      }}
    >
      {/* Header Row */}
      <div className="row text-center">
        {days.map((day, idx) => (
          <div className="col" key={idx}>
            <div style={{ fontWeight: 500, fontSize: "14px" }}>{day.label}</div>
            <div style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
              {day.date}
            </div>
          </div>
        ))}
      </div>

      {/* Row 1 with Sat-Sun connected pill */}
      <div className="row text-center mt-3" style={{ position: "relative" }}>
        {days.map((day, idx) => (
          <div className="col" key={idx} style={{ position: "relative" }}>
            {/* Left half of pill (Sat 30 - 12:00) */}
            {idx === 5 && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: "-5px", // Adjusted to prevent overlap
                  backgroundColor: "#d6d9ff",
                  borderTopLeftRadius: "20px",
                  borderBottomLeftRadius: "20px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                }}
              >
                <span style={{ fontSize: "0.85rem", fontWeight: 500 }}>
                  12:00
                </span>
              </div>
            )}

            {/* Right half of pill (Sun 31 - 09:00) */}
            {idx === 6 && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "-5px", // Adjusted to prevent overlap
                  right: 0,
                  backgroundColor: "#d6d9ff",
                  borderTopRightRadius: "20px",
                  borderBottomRightRadius: "20px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                }}
              >
                <span style={{ fontSize: "0.85rem", fontWeight: 500 }}>
                  09:00
                </span>
              </div>
            )}

            {/* Background text (hidden on Sun because it's replaced) */}
            <div
              style={{
                height: "30px",
                lineHeight: "30px",
                position: "relative",
                // zIndex: 2,
                margin: "8px 0px",
              }}
            >
              {day.times[0] && idx !== 6 ? day.times[0] : ""}
            </div>
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="row text-center mt-2">
        {days.map((day, idx) => {
          const selected = day.selected === 1;
          const time = day.times[1];
          return (
            <div className="col" key={idx}>
              {time ? (
                <div
                  style={{
                    backgroundColor: selected ? "#4b4bf9" : "#dee2e6",
                    color: selected ? "#fff" : "#333",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    display: "inline-block",
                    margin: "8px 0px",
                  }}
                >
                  {time}
                </div>
              ) : (
                <div style={{ height: "30px", lineHeight: "30px" }}>—</div>
              )}
            </div>
          );
        })}
      </div>

      {/* Row 3 */}
      <div className="row text-center mt-2">
        {days.map((day, idx) => {
          const time = day.times[2];
          return (
            <div
              className="col"
              key={idx}
              style={{ opacity: day.disabled ? 0.4 : 1, margin: "8px 0px" }}
            >
              {time || "—"}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklySchedule;
