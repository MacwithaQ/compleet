import React, { useState } from "react";
import { Checkbox } from "@mui/material";
import { observer } from "mobx-react";
// Audio FX
import UIfx from "uifx";
import checkFX from "../media/checkFX.wav";
// Import Icons and Stores
import PlayIcon from "../Icons/PlayIcon";
import PauseIco from "../Icons/PauseIco";
import MiniCategoryIco from "../Icons/MiniCategoryIco";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import TaskStore from "../stores/taskStore";

const CreatedTask = ({ task }) => {
  // Plays checkFX sound for done tasks
  const checkSound = new UIfx(checkFX, {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100,
  });

  const handleClickCheck = () => {
    //* */ note: inserting delay this way -> setTimeout(() => { }, 1000)
    checkSound.play();
    setTimeout(() => {
      TaskStore.completeTask(task);
    }, 300);
  };

  const handleClickDelete = () => {
    console.log(task.id_);
    TaskStore.deleteTask(task);
  };

  return (
    <div className={"createdTask"}>
      <div className="taskDetails">
        <div className="taskDiv">
          <a className="taskTitle">{task.title}</a>
        </div>
        <div className="taskDiv">
          <a className="taskDescription">{task.description}</a>
        </div>
        <div>
          <MiniCategoryIco className="taskCategoryIcon" />
          <a className="taskCategoryTitle">{task.taskCategory}</a>
        </div>
      </div>
      <div className="taskActions">
        <a className="timer">00:00:00</a>
        <PauseIco className="clickableTaskAction" />
        <PlayIcon className="clickableTaskAction" />
        <Checkbox
          onClick={handleClickCheck}
          sx={{
            color: "#96D900",
            "&.Mui-checked": {
              color: "#96D900",
            },
          }}
          size="large"
          defaultChecked={false}
          className="clickableTaskAction"
        />
        <FontAwesomeIcon
          className="deleteIcon fa-1x"
          icon={faCircleMinus}
          onClick={handleClickDelete}
        />
      </div>
    </div>
  );
};

export default observer(CreatedTask);
