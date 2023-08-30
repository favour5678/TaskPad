import React from "react";
import taskImage from "../images/taskImage.png";
import { Link } from "react-router-dom";
import taskLogo from '../images/logo.svg'

const Home = () => {
  return (
    <main className="bg-gray-50 md:h-screen max-w-full container">
      <div className="flex flex-col-reverse items-center md:flex md:flex-row md:justify-around pt-6 md:pt-20">
        <div className="md:space-y-28">
          <p className="hidden md:block text-3xl font-bold">
            Manage your Daily <br /> Tasks with
            <span className="text-green-400"> To-do</span>
          </p>
          <p className="text-gray-500 mt-5 md:mt-0 text-center md:text-left md:text-xl font-semibold tracking-wide">
            Carefully arrange, collate, and <br /> organize your tasks for the
            <br /> Day, Week, or month!
          </p>
          <Link to={'/dashboard'} className="bg-green-300 w-[200px] h-[48px] rounded-full flex justify-center items-center text-white text-lg shadow-md mx-auto mb-3 mt-10 md:mt-0">
            Get Started
          </Link>
        </div>
        <div className="flex flex-col md:items-end justify-center">
          <img src={taskLogo} alt="task-logo" className="h-[38px] md:h-[44px] md:mb-10"/>
          <p className="md:hidden text-2xl font-bold text-center mt-10 mb-6">
            Manage your Daily <br /> Tasks with
            <span className="text-green-400"> To-do</span>
          </p>
          <img
            src={taskImage}
            alt="task image"
            className="w-full h-[340px] md:h-[340px] object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;