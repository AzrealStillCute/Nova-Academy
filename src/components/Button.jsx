import React from "react";

function Button(props) {
  let chgStyles;

  switch (props.size) {
    case "lg":
      chgStyles = "px-7 py-4 text-base mr-16";
      break;
    case "md":
      chgStyles = "px-5 py-3 text-sm";
    case "sm":
      chgStyles = "px-3 py-2 text-sm";
  }

  return (
    <button
      className={`text-white bg-sky-500 border-2 border-gray-50 font-body rounded-md hover:ring-1 ring-sky-300 transition ease-out duration-300 ${chgStyles}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
