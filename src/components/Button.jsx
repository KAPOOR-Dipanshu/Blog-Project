import React from "react";

export default function Button({
    children,
    type = 'button',
    bgColor = '',
    textColor = "text-black",
    className = '',
    ...props
}) {
  return (
    <button className = {`px-4 py-2 rounded-lg ${bgColor} ${className} ${textColor}`} {...props} >
        {children}
    </button>
  );
}

