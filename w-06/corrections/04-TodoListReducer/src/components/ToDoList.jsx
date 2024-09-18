import ToDoItem from "./ToDoItem";
import { useApp } from "../context/AppContextReduce";

const ToDoList = () => {
  const { filteredTodos, toggleTodo } = useApp();
  return (
    <ul>
      {filteredTodos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default ToDoList;
