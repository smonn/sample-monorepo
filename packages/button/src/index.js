import React from "react";

const Button = ({ children, isSelected = false, style = {}, ...props }) => (
  <button
    style={{
      backgroundColor: isSelected ? "#00c" : "#00f",
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
