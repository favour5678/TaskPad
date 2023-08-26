import React, { useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoEllipseSharp } from "react-icons/io5";
import { BsFilterLeft } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { BsFillPlusCircleFill } from "react-icons/bs";
import userIcon from "../images/userIcon.png";
import TodoTemplate from "../templates/TodoTemplate";

const Dashboard = () => {
  const [toDoList, setToDoList] = useState([])
  const [toDoValue, setToDoValue] = useState('')
  
  console.log(toDoValue);

  return (
    <section className="container max-w-full h-screen flex">
      {/* left section of dashboard */}
      <div className="bg-green-50 w-[20%] h-full space-y-10 pt-6">
        <div className="flex items-center justify-center space-x-6">
          <img
            src={userIcon}
            alt="user-icon"
            className="h-12 bg-white rounded-full"
          />
          <p className="font-bold text-lg">Hello User &#128075;</p>
        </div>
        <button className="flex justify-center items-center mx-auto space-x-4 bg-green-400 w-[230px] h-[48px] rounded-full shadow-sm">
          <AiOutlinePlus className="text-xl" />
          <p className="text-lg font-bold">Create task</p>
        </button>
        <p className="font-bold text-xl bg-green-200 h-[48px] flex items-center pl-6">
          Calendar
        </p>
        <div className="space-y-3 pl-6">
          <p className="font-bold text-xl">Sort</p>
          <ol>
            <li className="font-semibold flex items-center">
              <IoEllipseSharp className="text-green-400 text-sm mr-2" />
              Day
            </li>
            <li className="font-semibold flex items-center">
              <IoEllipseSharp className="text-yellow-400 text-sm mr-2" />
              Month
            </li>
            <li className="font-semibold flex items-center">
              <IoEllipseSharp className="text-blue-400 text-sm mr-2" />
              Year
            </li>
          </ol>
        </div>
        <p className="pt-28">
          <BsFilterLeft className="text-4xl ml-6 text-green-400" />
        </p>
      </div>

      {/* right section of dashboard */}
      <div className="bg-nature bg-center bg-cover bg-no-repeat  w-[80%] h-screen">
        <div className="flex mx-auto items-center bg-green-50 rounded-full w-4/5 h-11 mt-6">
          <input
            type="text"
            placeholder="Hello, User"
            className="w-full outline-none h-full bg-transparent px-6"
          />
          <div className="flex space-x-4 pr-4">
            <BiSearch className="text-xl cursor-pointer" />
            <IoMdSettings className="text-xl cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center justify-center pt-6 space-x-2">
          <input
            type="text"
            placeholder="I want to ......."
            className="w-[40%] h-10 rounded-xl outline-none px-5 bg-green-50"
            value={toDoValue}
            onChange={(e) => setToDoValue(e.target.value)}
          />
          <button className="outline-none" >
            <BsFillPlusCircleFill className="text-2xl" />
          </button>
        </div>
        <TodoTemplate />
        {/* <TodoTemplate propsToDo={toDoList}/> */}
      </div>
    </section>
  );
};

export default Dashboard;
