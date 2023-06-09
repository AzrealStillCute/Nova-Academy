import React, { useState } from "react";
import headerLogo from "../assets/header_logo.png";
import Button from "./Button";
import styles from "../Styles";

function Header({ isClick, setIsClick }) {
  return (
    <div className="w-full flex items-center bg-white z-10 justify-between px-8 py-3 border-b border-gray-200 relative">
      <img src={headerLogo} className=" h-14" />
      <nav className=" hidden xl:block">
        {["About", "Scholarships", "Testimonials", "Contact"].map((i) => (
          <a className={styles.anchorTag}>{i}</a>
        ))}
      </nav>
      <button onClick={() => setIsClick(!isClick)} className=" xl:hidden">
        <div
          className={` h-[0.12rem] w-6 bg-black mb-1.5 transition ease-out duration-300 ${
            isClick ? " origin-top-left rotate-[44deg]" : ""
          }`}
        ></div>
        <div
          className={` h-[0.12rem] w-4 ml-2 bg-black mb-1.5 transition ease-out duration-300 ${
            isClick ? " scale-0" : ""
          }`}
        ></div>
        <div
          className={` h-[0.12rem] w-6 bg-black transition ease-out duration-300 ${
            isClick ? " origin-bottom-left -rotate-[44deg]" : ""
          }`}
        ></div>
      </button>
      <div className=" hidden xl:block">
        <a className={styles.anchorTag}>Log In?</a>
        <Button size="md">Register</Button>
      </div>
    </div>
  );
}

export default Header;
