import React from "react";
import { Checkbox } from "@mui/material";
import PlayIcon from "../Icons/PlayIcon";
import PauseIco from "../Icons/PauseIco";

const CreatedTask = ({ task }) => {
  return (
    <div className="createdTask">
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

export default CreatedTask;
