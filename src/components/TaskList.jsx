import { useContext } from "react";
import TaskItem from "./TaskItem";
import { TasksContext } from "../App";

const TaskList = () => {
  const tasks = useContext(TasksContext);
  return (
    <ul>
      {tasks.length > 0 &&
        tasks.map((task) => <TaskItem key={task.id} task={task} />)}
    </ul>
  );
};

export default TaskList;
