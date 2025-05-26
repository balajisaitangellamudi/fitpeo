export function Cards(props) {
  const { items, index, sameColor } = props;
  return (
    <div
      key={index}
      className={`${index != 0 ? "flex-grow-1" : " "}`}
      style={{
        padding: "24px",
        color: index != 0 || sameColor ? "#3734a9" : "#fff",
        backgroundColor: index != 0 || sameColor ? "#dde2f9" : "#3734a9",
        width: "fit-content",
        borderRadius: "24px",
      }}
    >
      <div className="d-flex justify-content-between align-items-center gap-3">
        {items.title && (
          <p
            style={{
              fontSize: "18px",
              fontWeight: "600",
              margin: "0px 0px 8px",
            }}
          >
            {items.title}
          </p>
        )}

        {items.url && (
          <div
            style={{
              height: "24px",
              width:
                (items.url && items?.url.includes("eye") && "35px") || "26px",
            }}
          >
            <img
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              src={items.url}
              alt={items.title}
            />{" "}
          </div>
        )}
      </div>
      {items.time && (
        <p className="mb-0" style={{ lineHeight: "normal" }}>
          {items.time}
        </p>
      )}
      {items.doctor && <p className="mb-0">{items.doctor}</p>}
    </div>
  );
}
