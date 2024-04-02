import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store/store";
import TaskInput from "./components/taskInput";
import TaskList from "./components/taskList";
import {
  loadTasksFromStorage,
  saveTasksToStorage,
} from "./reducers/taskReducer";

import "./App.css";

const App = () => {
  useEffect(() => {
    store.dispatch(loadTasksFromStorage());
  }, []);

  useEffect(() => {
    store.dispatch(saveTasksToStorage());
  }, [store.getState().tasks]);

  return (
    <Provider store={store}>
      <div className="container">
        <h1 className="mt-4">To-Do App</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
