import {
  ACCOUNT_LOAD,
  ACCOUNT_SIGN_OUT
} from './constants';

const defaultState = {
  account: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ACCOUNT_LOAD:
      const { account } = action;
      return {
        ...state,
        account
      };
    case ACCOUNT_SIGN_OUT:
      return {
        ...state,
        account: defaultState.account
      };
    default:
      return state;
  }
};
