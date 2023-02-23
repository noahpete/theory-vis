import React from "react";
import "./styles.css";

const Button = ({
  type = "button",
  variant,
  className,
  id,
  onClick,
  children,
  style,
}) => {
  return (
    <button
      type={type}
      variant={variant}
      className={className ? `btn-component ${className}` : "btn-component"}
      id={id}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
