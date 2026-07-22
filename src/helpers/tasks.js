import { TASK_STATUS, SORT_DIRECTION } from '../constants';

export const sortByDueDate = (tasks, direction) =>
  [...tasks].sort((a, b) => {
    const left = a.dueDate || '';
    const right = b.dueDate || '';
    if (left === right) return 0;
    const order = left < right ? -1 : 1;
    return direction === SORT_DIRECTION.ASC ? order : -order;
  });

export const isOverdue = (task) => {
  if (!task.dueDate || task.status === TASK_STATUS.COMPLETED) return false;
  const due = new Date(task.dueDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return due < today;
};

export const validateTask = (values) => {
  const errors = {};
  if (!values.title.trim()) errors.title = 'Title is required.';
  if (!values.dueDate) errors.dueDate = 'Due date is required.';
  return errors;
};
