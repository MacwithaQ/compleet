import React, { useState } from "react";
import TaskStore from "../stores/taskStore";

const CreateTask = ({ handletaskAdd }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    taskCategory: "",
    taskTime: "",
    taskStatus: false,
  });

  const handleOnChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleAddTask = () => {
    TaskStore.tasks.push(task);
    handletaskAdd();
  };

  return (
    <div>
      <div className="taskCreate">
        <div className="taskCreateDetails">
          <div className="taskDiv">
            <input
              name="title"
              className="taskTitleCreate"
              type="text"
              placeholder="Task title"
              onChange={handleOnChange}
            />
          </div>
          <div className="taskDiv">
            <input
              name="description"
              className="taskDescriptionCreate"
              type="text"
              placeholder="Task description"
              onChange={handleOnChange}
            />
          </div>
        </div>
      </div>
      <div className="addTaskButtonsSection">
        <div className="addTaskButton" onClick={handleAddTask}>
          Add task
        </div>
        <div className="cancelButton" onClick={handletaskAdd}>
          Cancel
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
