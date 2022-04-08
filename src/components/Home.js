import React from "react";
import { Checkbox } from "@mui/material";
import PlayIcon from "../Icons/PlayIcon";
import PauseIco from "../Icons/PauseIco";

const Home = () => {
  return (
    <div>
      <div className="MainPanel">
        <div className="taskCreate">
          <div className="taskDetails">
            <div className="taskDiv">
              <a className="taskTitle">Wash Dishes</a>
            </div>
            <div className="taskDiv">
              <a className="taskDescription">
                Washing dishes manually using a sponge and soap. Testing how
                long this can be before clipping
              </a>
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
      </div>
    </div>
  );
};

export default Home;
