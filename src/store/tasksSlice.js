import { createSlice } from '@reduxjs/toolkit';
import { TASK_STATUS } from '../constants';
import { createId } from '../helpers';


const initialState = {
  items: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.items = Array.isArray(action.payload) ? action.payload : [];
    },
    addTask: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ title, description = '', status, dueDate }) => ({
        payload: {
          id: createId(),
          title: title.trim(),
          description: description.trim(),
          status: status || TASK_STATUS.PENDING,
          dueDate,
          createdAt: new Date().toISOString(),
        },
      }),
    },
    updateTask: (state, action) => {
      const { id, ...changes } = action.payload;
      const index = state.items.findIndex((task) => task.id === id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...changes };
      }
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter((task) => task.id !== action.payload);
    },
  },
});

export const { setTasks, addTask, updateTask, deleteTask } = tasksSlice.actions;

export const selectAllTasks = (state) => state.tasks.items;
export const selectTaskCounts = (state) => {
  const counts = {
    [TASK_STATUS.PENDING]: 0,
    [TASK_STATUS.IN_PROGRESS]: 0,
    [TASK_STATUS.COMPLETED]: 0,
    total: state.tasks.items.length,
  };
  for (const task of state.tasks.items) {
    if (counts[task.status] !== undefined) counts[task.status] += 1;
  }
  return counts;
};

export default tasksSlice.reducer;
