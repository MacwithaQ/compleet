import React from "react";
import CategoriesIco from "../Icons/CategoriesIco";

const Home = () => {
  return (
    <div>
      <div className="MainPanel">
        <div className="taskCreate">
          <div className="taskDiv">
            <a className="taskTitle">Wash Dishes</a>
          </div>
          <div className="taskDiv">
            <a className="taskDescription">
              Washing dishes manually using a sponge and soap
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
