import AddToDo from "./components/AddToDo";
import FilterComponent from "./components/FilterComponent";
import ToDoList from "./components/ToDoList";
import { AppProvider } from "./context/AppContextReduce";

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <AppProvider>
        <AddToDo />
        <FilterComponent />
        <ToDoList />
      </AppProvider>
    </div>
  );
};

export default App;
