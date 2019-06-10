import Resource from './api';

const normalizeTask = ({
  _id: id,
  owner,
  createdAt,
  updatedAt,
  title,
  description,
}) => ({
  id,
  owner,
  created: new Date(createdAt),
  ...createdAt !== updatedAt && { updated: new Date(updatedAt) },
  title,
  description
});

export const list = async () => {
  const tasks = await Resource.get('/tasks');
  return tasks.map(normalizeTask);
};

export const publish = async ({ title, description }) => {
  const task = await Resource.post('/tasks/create', { title, description });
  return normalizeTask(task);
};

export const edit = async (id, { title, description }) => {
  const task = await Resource.post(`/tasks/edit/${ id }`, { title, description });
  // API isn't returning the edited version of the task.
  // return normalizeTask(task);
  return normalizeTask({ ...task, title, description });
};

export const remove = async id => {
  await Resource.post(`/tasks/delete/${ id }`);
  console.log('Removed task', id);
  return;
};
