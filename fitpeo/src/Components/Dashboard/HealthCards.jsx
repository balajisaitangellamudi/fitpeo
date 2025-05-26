export function HealthCards(props) {
  const { imgUrl, title, date, percentage } = props;
  return (
    <>
      <div className="p-2">
        <div
          style={{
            backgroundColor: "#f6faff",
            padding: "24px",
            borderRadius: "16px",
          }}
        >
          {/* img && title */}
          <div className="d-flex gap-2 align-items-center">
            <div style={{ height: "52px", width: "52px" }}>
              <img
                className=""
                src={imgUrl}
                style={{ maxHeight: "100%", maxWidth: "100%" }}
                alt={`${title}_img`}
              />
            </div>
            <h5 className="mb-0 fw-bold">{title}</h5>
          </div>

          <p>{date}</p>

          <div
            style={{
              height: "12px",
              backgroundColor: "#dde2f9",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                width: `${percentage}%`,
                backgroundColor:
                  percentage >= 80
                    ? "red"
                    : percentage >= 75
                    ? "orange"
                    : "green",
                height: "100%",
                borderRadius: "8px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
