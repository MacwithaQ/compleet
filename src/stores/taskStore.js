import { makeAutoObservable } from "mobx";

class taskStore {
  tasks = [
    {
      _id: 1,
      title: "Wash Dishes",
      description:
        "Washing dishes manually using a sponge and soap. Testing how long this can be before clipping",
      taskCategory: "Chore",
      taskTime: "",
      taskStatus: false,
    },
    {
      _id: 2,
      title: "Shower and Get Ready",
      description: "Showering, changing and getting ready to head out",
      taskCategory: "Personal",
      taskTime: "",
      taskStatus: false,
    },
    {
      _id: 3,
      title: "Grocery Shopping",
      description: "Shop for this week's groceries and get everything you need",
      taskCategory: "Chore",
      taskTime: "",
      taskStatus: false,
    },
  ];

  completeTask = (task) => {
    task.taskStatus = true;
  };

  deleteTask = (task) => {
    return (this.tasks = this.tasks.filter(
      (eachTask) => eachTask._id !== task._id
    ));
  };

  constructor() {
    makeAutoObservable(this);
  }
}

const TaskStore = new taskStore();
export default TaskStore;
