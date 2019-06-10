import {
  TASK_LIST,
  TASK_ADD,
  TASK_EDIT,
  TASK_REMOVE
} from './constants';

const defaultState = {
  list: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case TASK_LIST:
      const { tasks = [] } = action;
      return {
        ...state,
        list: tasks
      };
    case TASK_ADD:
      const { task } = action;
      return {
        ...state,
        list: [ task, ...state.list ]
      };
    case TASK_EDIT:
      return {
        ...state,
        list: state.list.map(item => item.id === action.id ? action.task : item)
      };
    case TASK_REMOVE:
      const { id } = action;
      return {
        ...state,
        list: state.list.filter(task => task.id !== id)
      };
    default:
      return state;
  }
};
