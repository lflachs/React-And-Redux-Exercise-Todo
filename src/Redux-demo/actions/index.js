import { ADD_TODO, TOGGLE_DONE } from "../constants/index";

export function addTodo(title) {
  return { type: ADD_TODO, title };
}

export function toggleDone(taskId) {
  return { type: TOGGLE_DONE, taskId };
}
