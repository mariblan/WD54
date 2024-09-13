import { createContext, useContext, useState } from "react";

const AppContext = createContext();
const useApp = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed" && todo.completed) return true;
    if (filter === "active" && !todo.completed) return true;
    return false;
  });

  return (
    <AppContext.Provider
      value={{ todos, setTodos, filter, setFilter, toggleTodo, filteredTodos }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useApp };
