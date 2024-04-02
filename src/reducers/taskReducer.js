import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    taskCompletion: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
    loadTasksFromStorage: (state) => {
      const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      state.tasks = savedTasks;
    },
    saveTasksToStorage: (state) => {
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const {
  addTask,
  deleteTask,
  taskCompletion,
  loadTasksFromStorage,
  saveTasksToStorage,
} = taskSlice.actions;
export default taskSlice.reducer;
