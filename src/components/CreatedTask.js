import React, { useState } from "react";
import { Checkbox } from "@mui/material";
import { observer } from "mobx-react";
// Audio FX
import UIfx from "uifx";
import checkFX from "../media/checkFX.wav";
// Import Icons and Stores
import PlayIcon from "../Icons/PlayIcon";
import PauseIco from "../Icons/PauseIco";
import TaskStore from "../stores/taskStore";

const CreatedTask = ({ task }) => {
  // Plays checkFX sound for done tasks
  const checkSound = new UIfx(checkFX, {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100,
  });
  const handleClick = () => {
    //* */ note: inserting delay this way -> setTimeout(() => { }, 1000)
    checkSound.play();
    setTimeout(() => {
      task.taskStatus = true;
    }, 400);
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
      </div>
      <div className="taskActions">
        <a className="timer">00:00:00</a>
        <PauseIco className="clickableTaskAction" />
        <PlayIcon className="clickableTaskAction" />
        <Checkbox
          onClick={handleClick}
          sx={{
            color: "#96D900",
            "&.Mui-checked": {
              color: "#96D900",
            },
          }}
          size="large"
          className="clickableTaskAction"
        />
      </div>
    </div>
  );
};

export default observer(CreatedTask);
