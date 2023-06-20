import React from "react";
//import "./button.css";

const STYLES = ["btn-primary", "btn-outline", "btn-outline-1"];

const SIZES = ["btn-medium", "btn-large", "btn-outline-1"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn btn-header ${checkButtonStyle} ${checkButtonSize}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
