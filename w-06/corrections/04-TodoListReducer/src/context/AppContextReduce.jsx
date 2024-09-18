import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();
const useApp = () => useContext(AppContext);

const initialTodos = [{ id: 1, text: "Todo 1", completed: false }];

const reducerTodos = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "TOGGLE_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    default:
      return state;
  }
};

const initialFilter = "all";

const reducerFilter = (state, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.payload;
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [todos, setTodos] = useReducer(reducerTodos, initialTodos);
  const [filter, setFilter] = useReducer(reducerFilter, initialFilter);

  const toggleTodo = (id) => {
    setTodos({ type: "TOGGLE_TODO", payload: id });
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
