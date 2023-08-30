import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoEllipseSharp } from "react-icons/io5";
import { BsFilterLeft } from "react-icons/bs";
import userIcon from "../images/userIcon.png";
import TodoTemplate from "../templates/TodoTemplate";

const Dashboard = () => {
  const [toDoList, setToDoList] = useState([]);
  const [toDoValue, setToDoValue] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [deletedMessage, setDeletedMessage] = useState(false);

  const addTodo = () => {
    if (toDoValue.trim() !== "") {
      const newTodo = {
        task: toDoValue,
        timestamp: new Date().toLocaleString(),
      };
      setToDoList([...toDoList, newTodo]);
      setToDoValue("");
      setSuccessMessage(true);
      setTimeout(() => setSuccessMessage(false), 1000);
    }
  };

  const deleteTodo = (todoIndex) => {
    const updatedTodoList = toDoList.filter((_, i) => i !== todoIndex);
    setToDoList(updatedTodoList);
    setDeletedMessage(true);
    setTimeout(() => setDeletedMessage(false), 1000);
  };


  return (
    <section className="container max-w-full flex">
      {/* left section of dashboard */}
      <div className=" bg-green-50 h-screen w-[20%] space-y-20 lg:space-y-10 pt-6">
        <div className="flex items-center justify-center space-x-3 lg:space-x-6">
          <img
            src={userIcon}
            alt="user-icon"
            className="h-8 lg:h-12 bg-white rounded-full"
          />
          <p className="font-bold text-base lg:text-lg">Hello User &#128075;</p>
        </div>
        <p className="font-bold text-base lg:text-xl bg-green-200 h-[48px] flex items-center pl-3 lg:pl-6">
          Calendar
        </p>
        <div className="space-y-3 pl-3 lg:pl-6">
          <p className="font-bold text-base lg:text-xl">Sort</p>
          <ol>
            <li className="font-semibold flex items-center text-sm lg:text-base">
              <IoEllipseSharp className="text-green-400 text-xs lg:text-sm mr-2" />
              Day
            </li>
            <li className="font-semibold flex items-center text-sm lg:text-base">
              <IoEllipseSharp className="text-yellow-400 text-xs lg:text-sm mr-2" />
              Month
            </li>
            <li className="font-semibold flex items-center text-sm lg:text-base">
              <IoEllipseSharp className="text-blue-400 text-xs lg:text-sm mr-2" />
              Year
            </li>
          </ol>
        </div>
        <p className="pt-10 lg:pt-28">
          <BsFilterLeft className="text-4xl ml-6 text-green-400" />
        </p>
      </div>

      {/* right section of dashboard */}
      <div
        id="right_section"
        className="bg-nature bg-center bg-cover bg-no-repeat w-[80%] h-screen overflow-y-scroll"
      >
        {successMessage && (
          <p className="bg-white text-xs lg:text-base text-green-600 rounded-sm mt-3 w-[35%] lg:w-[26%] h-6 lg:h-10 flex justify-center items-center mx-auto font-bold">
            Task created successfully &#9989;
          </p>
        )}
        {deletedMessage && (
          <p className="bg-white text-xs lg:text-base text-red-600 rounded-sm mt-3 w-[35%] lg:w-[26%] h-6 lg:h-10 flex justify-center items-center mx-auto font-bold">
            Task deleted successfully &#9989;
          </p>
        )}
        <div className="flex items-center justify-center pt-6 space-x-2">
          <input
            type="text"
            placeholder="Create task"
            className="w-[50%] h-8 lg:h-10 rounded-xl outline-none px-5 bg-green-50"
            value={toDoValue}
            onChange={(e) => setToDoValue(e.target.value)}
          />
          <button
            onClick={addTodo}
            className="flex justify-center items-center mx-auto space-x-2 bg-green-400 w-[120px] lg:w-[150px] h-[30px] lg:h-[40px] rounded-full shadow-sm"
          >
            <AiOutlinePlus className="text-base lg:text-lg" />
            <p className="text-sm lg:text-base font-bold">Create task</p>
          </button>
        </div>

        <TodoTemplate todo={toDoList} deleteTodo={deleteTodo} />
      </div>
    </section>
  );
};

export default Dashboard;
