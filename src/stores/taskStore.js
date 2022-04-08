import { makeAutoObservable } from "mobx";

class taskStore {
  tasks = [
    {
      title: "Wash Dishes",
      description:
        "Washing dishes manually using a sponge and soap. Testing how long this can be before clipping",
      taskCategory: "",
      taskTime: "",
      taskStatus: false,
    },
    {
      title: "Shower and Get Ready",
      description: "Showering, changing and getting ready to head out",
      taskCategory: "",
      taskTime: "",
      taskStatus: false,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

const TaskStore = new taskStore();
export default TaskStore;
