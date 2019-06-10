import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import authentication from './authentication/reducers';
import tasks from './tasks/reducers';

export default history => combineReducers({
  router: connectRouter(history),
  authentication,
  tasks
});
