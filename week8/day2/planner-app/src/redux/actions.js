// Action Types
export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const SET_SELECTED_DAY = "SET_SELECTED_DAY";

// Action Creators
export const setSelectedDay = (day) => ({
  type: SET_SELECTED_DAY,
  payload: day,
});

export const addTask = (day, task) => ({
  type: ADD_TASK,
  payload: { day, task },
});

export const editTask = (day, taskId, newText) => ({
  type: EDIT_TASK,
  payload: { day, taskId, newText },
});

export const deleteTask = (day, taskId) => ({
  type: DELETE_TASK,
  payload: { day, taskId },
});
