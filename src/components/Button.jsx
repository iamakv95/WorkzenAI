import React from "react";

const Button = ({ title, containerClass, titleClass, iconClass, icon }) => {
  return (
    <button
      className={`${containerClass} flex items-center border rounded-full`}
    >
      <p className={`${titleClass}`}>{title}</p>
      {icon && <span className={`${iconClass} ml-2`}>{icon}</span>}
    </button>
  );
};

export default Button;
