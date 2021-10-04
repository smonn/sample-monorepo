import React from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isSelected?: boolean;
}

const Button = ({
  children,
  isSelected = false,
  style = {},
  ...props
}: ButtonProps) => (
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
