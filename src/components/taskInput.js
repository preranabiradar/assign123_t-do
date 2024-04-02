import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../reducers/taskReducer";

const TaskInput = () => {
  const [taskInput, setTaskInput] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      try {
        dispatch(
          addTask({ id: Math.random(), name: taskInput, isCompleted: false })
        );
        setTaskInput("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter a new task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="btn btn-primary" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
