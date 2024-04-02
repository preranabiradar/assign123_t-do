import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, taskCompletion } from "../reducers/taskReducer";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    try {
      dispatch(deleteTask(id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleTaskCompletion = (id) => {
    dispatch(taskCompletion(id));
  };

  return (
    <div className="mt-4">
      {tasks?.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        <ul className="list-group">
          {tasks?.map((task) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={task.id}
            >
              {task.name}
              <span>{task.text}</span>
              <div>
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => handleTaskCompletion(task.id)}
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
