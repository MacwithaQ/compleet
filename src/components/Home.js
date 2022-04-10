import React from "react";
import { useState } from "react";
import { observer } from "mobx-react";

//Component Imports
import AddIco from "../Icons/AddIco";
import TaskStore from "../stores/taskStore";
import CreatedTask from "./CreatedTask";
import CreateTask from "./CreateTask";
//

const Home = () => {
  const [addTask, setAddTask] = useState(false);
  const taskList = TaskStore.tasks
    .filter((task) => task.taskStatus === false)
    .map((task) => <CreatedTask task={task} />);
  const handletaskAdd = () => {
    setAddTask(!addTask);
  };

  return (
    <div>
      <div className="MainPanel">
        {taskList}
        {addTask ? (
          <CreateTask handletaskAdd={handletaskAdd} />
        ) : (
          <div className="taskAdd" onClick={handletaskAdd}>
            <AddIco className="taskAddIco" />
            <a className="taskAddText">Add task</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default observer(Home);
