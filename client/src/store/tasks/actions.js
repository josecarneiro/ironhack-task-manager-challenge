import {
  TASK_LIST,
  TASK_ADD,
  TASK_EDIT,
  TASK_REMOVE
} from './constants';

import * as TaskService from 'services/task';

import { store } from 'store';

export const listTasks = dispatch => async () => {
  const hasLoadedTasks = !!store.getState().tasks.list.length;
  if (!hasLoadedTasks) {
    const tasks = await TaskService.list();
    dispatch({ type: TASK_LIST, tasks });
  }
};

export const loadTask = dispatch => async id => {
  await listTasks(dispatch)();
  const tasks = store.getState().tasks.list;
  const task = tasks.find(item => item.id === id);
  if (!task) throw new Error('Task not found.');
  return task;
};

export const addTask = dispatch => async ({ title, description }) => {
  const task = await TaskService.publish({ title, description });
  dispatch({ type: TASK_ADD, task });
};

export const editTask = dispatch => async (id, { title, description }) => {
  const task = await TaskService.edit(id, { title, description });
  dispatch({ type: TASK_EDIT, id, task });
};

export const removeTask = dispatch => async id => {
  await TaskService.remove(id);
  dispatch({ type: TASK_REMOVE, id });
};
