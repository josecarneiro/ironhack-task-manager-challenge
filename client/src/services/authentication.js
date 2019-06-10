import Resource from './api';

const normalizeAccount = ({
  _id: id,
  username,
  createdAt
}) => ({
  id,
  username,
  created: new Date(createdAt)
});

export const signIn = async ({ username, password }) => {
  const account = await Resource.post('/login', { username, password });
  return normalizeAccount(account);
};

export const signUp = async ({ username, password }) => {
  const data = await Resource.post('/signup', { username, password });
  if (data.message) {
    console.log(data.message);
    throw new Error('Error signing up.');
  } else {
    return normalizeAccount(data);
  }
};

export const signOut = async () => {
  await Resource.post('/logout');
  return;
};

export const load = async () => {
  try {
    const account = await Resource.get('/loggedin');
    return normalizeAccount(account);
  } catch (error) {
    // 403 Status means user isn't logged in,
    // shouldn't throw an error
    if (error.response.status !== 403) throw error;
  }
};
