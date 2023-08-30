import { AiFillDelete } from "react-icons/ai";
import { IoEllipseSharp } from "react-icons/io5";

const TodoTemplate = (props) => {
  const toDoList = props.todo;
  const deleteTodo = props.deleteTodo;

  return (
    <section className="mt-4 lg:mt-8 rounded text-center w-[90%] mx-auto">
      <h2 className="text-center text-[17px] lg:text-xl font-bold mb-3">Today's Task</h2>
      {toDoList.map((todo, index) => (
        <div
          key={index}
          className="flex justify-around items-center mb-2 lg:mb-3 pl-2 bg-white rounded shadow-md"
        >
          <IoEllipseSharp className="text-[6px] lg:text-[8px]" />
          <p className="text-[15px] lg:text-base font-bold text-gray-800 w-[50%] truncate">{todo.task}</p>
          <AiFillDelete
            className="cursor-pointer text-gray-800 "
            onClick={() => deleteTodo(index)}
          />
          <p className="text-xs lg:text-base font-semibold text-gray-500">
            created at: {todo.timestamp}
          </p>
        </div>
      ))}
    </section>
  );
};

export default TodoTemplate;
