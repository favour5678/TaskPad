import { IoEllipseSharp } from "react-icons/io5";

const TodoTemplate = (props) => {
  const toDoList = props.propsToDo

  return (
    <section className="mt-10 bg-green-50 rounded w-[40%] ml-4">
      <h2 className="text-center text-xl font-bold mb-3">Today's Task</h2>
      {toDoList.map((toDo, index) => (
        <div key={index} className="flex items-center space-x-2 mb-3 pl-2">
          <IoEllipseSharp className="text-[8px]"/>
          <p className="font-bold text-green-800">{toDo}</p>
        </div>
      ))}
    </section>
  )
}

export default TodoTemplate;