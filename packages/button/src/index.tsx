import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

export interface ButtonProperties
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isSelected?: boolean;
}

const Button: FC<ButtonProperties> = ({
  children,
  isSelected = false,
  style = {},
  ...rest
}) => (
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
    {...rest}
  >
    {children}
  </button>
);

export { Button };
