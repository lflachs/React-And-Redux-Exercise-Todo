import { ADD_TODO, TOGGLE_DONE } from "../constants/index";

const initialState = {
  tasks: [{ id: 0, title: "Learn HTML", done: true }]
};

const rootReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: state.tasks.length, title: action.title, done: false }
        ]
      };
    case TOGGLE_DONE:
      console.log("test");
      return {
        ...state,
        tasks: state.tasks.map(task => {
          return task.id === action.taskId
            ? { ...task, done: !task.done }
            : task;
        })
      };
    default:
      return state;
  }
};

export default rootReducer;
