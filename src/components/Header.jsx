import React, { useState } from "react";
import headerLogo from "../assets/header_logo.png";
import styles from "../Styles";
import Button from "./Button";

function Header() {

    const [ isClick , setIsClick ] = useState(false)

  return (
    <div className=" flex justify-between items-center py-2 px-5 border-b border-b-gray-200">
      <img src={headerLogo} className=" h-11 md:h-12" />
      <div className="hidden lg:block">
        <a href="#"className={`${styles.regularText} ${styles.hoverText} mx-5`}>About</a>
        <a href="#"className={`${styles.regularText} ${styles.hoverText} mx-5`}>Programs</a>
        <a href="#"className={`${styles.regularText} ${styles.hoverText} mx-5`}>Testimonials</a>
        <a href="#"className={`${styles.regularText} ${styles.hoverText} mx-5`}>Contact</a>
      </div>
      <div className={`lg:hidden absolute z-10 right-5 top-16 flex flex-col justify-center border border-gray-200 bg-white rounded-lg pt-3 px-5 pb-5 w-52 transition ease-out duration-300
        ${ isClick ? " translate-y-3 opacity-100" : "opacity-0"}`}>
        <a href="#"className={`${styles.regularText} ${styles.hoverText} py-3 border-b border-b-gray-200`}>About</a>
        <a href="#"className={`${styles.regularText} ${styles.hoverText} py-3 border-b border-b-gray-200`}>Programs</a>
        <a href="#"className={`${styles.regularText} ${styles.hoverText} py-3 border-b border-b-gray-200`}>Testimonials</a>
        <a href="#"className={`${styles.regularText} ${styles.hoverText} py-3 mb-3 border-b border-b-gray-200`}>Contact</a>
        <Button size="sm">Register</Button>
        <a href="#" className={`${styles.regularText} ${styles.hoverText} mt-3 w-full text-center`}>log In?</a>
      </div>
      <button onClick={() => setIsClick(!isClick)} className=' justify-self-end lg:hidden'>
          <div className={` h-0.5 bg-black w-6 mb-1.5 rounded-sm transition-all ease-out duration-300 ${ isClick ? " origin-top-right -rotate-45" : ""}`} ></div>
          <div className={` h-0.5 bg-black w-4 ml-2 mb-1.5 rounded-sm transition-all ease-out duration-500 ${ isClick ? " scale-0" : ""}`}></div>
          <div className={` h-0.5 bg-black w-6 rounded-sm transition-all ease-out duration-300 ${ isClick ? " origin-bottom-right rotate-45" : ""}`} ></div>
        </button>
      <div className="hidden lg:block justify-self-end">
        <a href="#" className={`${styles.regularText} ${styles.hoverText} mr-5`}>log In?</a>
        <Button size="sm">Register</Button>
      </div>
    </div>
  );
}

export default Header;
