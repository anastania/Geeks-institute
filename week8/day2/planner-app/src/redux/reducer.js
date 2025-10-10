import { ADD_TASK, EDIT_TASK, DELETE_TASK, SET_SELECTED_DAY } from "./actions";

const initialState = {
  selectedDay: new Date().toISOString().split("T")[0], // YYYY-MM-DD
  tasksByDay: {}, // Example: { "2025-10-09": [ { id: 1, text: "Task" } ] }
};

export const plannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_DAY:
      return { ...state, selectedDay: action.payload };

    case ADD_TASK: {
      const { day, task } = action.payload;
      const existingTasks = state.tasksByDay[day] || [];
      return {
        ...state,
        tasksByDay: {
          ...state.tasksByDay,
          [day]: [...existingTasks, { id: Date.now(), text: task }],
        },
      };
    }

    case EDIT_TASK: {
      const { day, taskId, newText } = action.payload;
      const updatedTasks = state.tasksByDay[day].map((t) =>
        t.id === taskId ? { ...t, text: newText } : t
      );
      return {
        ...state,
        tasksByDay: { ...state.tasksByDay, [day]: updatedTasks },
      };
    }

    case DELETE_TASK: {
      const { day, taskId } = action.payload;
      const filteredTasks = state.tasksByDay[day].filter((t) => t.id !== taskId);
      return {
        ...state,
        tasksByDay: { ...state.tasksByDay, [day]: filteredTasks },
      };
    }

    default:
      return state;
  }
};
