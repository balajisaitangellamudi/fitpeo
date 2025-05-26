import React from "react";

const Error = (props) => {
  const { code, msg } = props;
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="text-center" style={{ minHeight: "90vh" }}>
        <h1>Error</h1>
        <h1>{code}</h1>
        <h1>{msg}</h1>
      </div>
    </div>
  );
};

export default Error;
