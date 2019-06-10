import {
  ACCOUNT_LOAD,
  ACCOUNT_SIGN_OUT,
  AUTHENTICATION_LOADING
} from './constants';

import * as AuthenticationService from 'services/authentication';

export const signIn = dispatch => async data => {
  dispatch({ type: AUTHENTICATION_LOADING, loading: true });
  const account = await AuthenticationService.signIn(data);
  dispatch({ type: ACCOUNT_LOAD, account });
  dispatch({ type: AUTHENTICATION_LOADING, loading: false });
};

export const signUp = dispatch => async data => {
  dispatch({ type: AUTHENTICATION_LOADING, loading: true });
  const account = await AuthenticationService.signUp(data);
  dispatch({ type: ACCOUNT_LOAD, account });
  dispatch({ type: AUTHENTICATION_LOADING, loading: false });
};

export const loadAccount = dispatch => async () => {
  dispatch({ type: AUTHENTICATION_LOADING, loading: true });
  const account = await AuthenticationService.load();
  dispatch({ type: ACCOUNT_LOAD, account });
  dispatch({ type: AUTHENTICATION_LOADING, loading: false });
};

export const signOut = dispatch => async () => {
  dispatch({ type: AUTHENTICATION_LOADING, loading: true });
  await AuthenticationService.signOut();
  dispatch({ type: ACCOUNT_SIGN_OUT });
  dispatch({ type: AUTHENTICATION_LOADING, loading: false });
};
