import { useRef, useState } from "react";

const AddTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");
  const inputRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    // post to server
    postTask(task);
    // console.log(task);
    inputRef.current.blur();
    setTask("");
  };

  const postTask = async (text) => {
    const res = await fetch("https://zigzag-wary-creek.glitch.me/tasks", {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        value={task}
        ref={inputRef}
        required
        type="text"
        placeholder="Add task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
