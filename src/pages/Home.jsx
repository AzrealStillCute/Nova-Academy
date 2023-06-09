import React from "react";
import styles from "../Styles";
import heroPhoto from "../assets/hero_photo.jpg";
import students from "../assets/students.png";
import activeStudents from "../assets/active_students.png";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";

function Home() {
  return (
    <div
      className={` max-w-7xl mx-auto flex flex-col xl:flex-row xl:justify-between items-center mt-20`}
    >
      <div className=" w-3/4 xl:w-[30rem]">
        <h1 className=" font-heading text-center xl:text-left font-extrabold text-6xl capitalize">
          Set your goals make it happen with us
        </h1>
        <p className=" text-lg text-center xl:text-left text-gray-500 my-9">
          Turn your goals into reality at nova academy, where we empower
          students to achieve greatness
        </p>
        <div className=" flex justify-center xl:justify-start">
          <Button size="lg">Get Started</Button>
          <button className=" text-base text-sky-500 hover:underline flex items-center">
            <FontAwesomeIcon icon={faPlayCircle} className=" mr-2 text-2xl" />
            Watch Video
          </button>
        </div>
      </div>
      <div className="relative">
        <img src={heroPhoto} className=" rounded-lg aspect-square w-[32rem]" />
        <img
          src={students}
          className=" absolute h-20 shadow-lg top-5 -left-14 rounded-lg rotate-3"
        />
        <img
          src={activeStudents}
          className=" absolute h-24 shadow-3xlco -top-5 right-5 rounded-lg rotate-3"
        />
      </div>
    </div>
  );
}

export default Home;
