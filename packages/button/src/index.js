import React from "react";

const Button = ({ children, style = {}, ...props }) => (
  <button
    style={{
      backgroundColor: "#00b",
      color: "#fff",
      border: 0,
      padding: 10,
      margin: 0,
      borderRadius: 4,
      ...style,
    }}
    {...props}
  >
    {children}
  </button>
);

export { Button };
