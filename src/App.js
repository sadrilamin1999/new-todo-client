import { createContext, useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

export const TasksContext = createContext();
const App = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://zigzag-wary-creek.glitch.me/tasks");
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <TasksContext.Provider value={tasks}>
      <AddTask />
      <TaskList />
    </TasksContext.Provider>
  );
};

export default App;
