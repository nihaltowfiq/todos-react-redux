import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

// === 22:30min

function App() {
  return (
    <div className="app">
      <h1 className="badge-secondary text-center">To Do App - Redux</h1>
      <ToDoInput />
      <ToDoList />
    </div>
  );
}

export default App;
