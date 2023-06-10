import React from "react";

function Button(props) {
  let chgStyles;

  switch (props.size) {
    case "lg":
      chgStyles = "px-4 md:px-5 py-3 md:py-3.5 text-sm md:text-base mr-10 md:mr-16";
      break;
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
