import React from "react";
import { useState } from "react";

//Component Imports
import AddIco from "../Icons/AddIco";
import TaskStore from "../stores/taskStore";
import CreatedTask from "./CreatedTask";
import CreateTask from "./CreateTask";
//

const Home = () => {
  const [addTask, setAddTask] = useState(false);
  const taskList = TaskStore.tasks.map((task) => <CreatedTask task={task} />);
  const handletaskAdd = () => {
    //* */ note: inserting delay this way -> setTimeout(() => { }, 1000)
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

export default Home;
