import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  userRequest: ['username'],
  userSuccess: ['avatar', 'usernameGithub'],
  userFailure: null,
  // login redux
  usernameGithub: ['username'],
  countNumber: ['numC'],
  clearName: null,
});

export const LoginTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  avatar: null,
  fetching: null,
  error: null,
  usernameGit: null,
  countNum: 1,
});

/* ------------- Selectors ------------- */

export const GithubSelectors = {
  selectAvatar: state => state.github.avatar,
};

export const CountSelector = {
  count: state => state.login.countNum,
  username: state => state.login.usernameGit,
};
/* ------------- Reducers ------------- */

// request the avatar for a user
export const request = (state, { username }) =>
  state.merge({ fetching: true, username, avatar: null });

// successful avatar lookup
export const success = (state, action) => {
  const { avatar, usernameGithub } = action;
  return state.merge({
    fetching: false,
    error: null,
    avatar,
    usernameGit: usernameGithub,
  });
};

// failed to get the avatar
export const failure = state =>
  state.merge({ fetching: false, error: true, avatar: null });

export const count = (state, action) => {
  const { numberC } = action.numC;
  return state.merge({ countNum: numberC });
};

export const clear = state => state.merge({ usernameGit: null });

/* ------------- Hookup Reducers To Types ------------- */

export const loginReducer = createReducer(INITIAL_STATE, {
  [Types.USER_REQUEST]: request,
  [Types.USER_SUCCESS]: success,
  [Types.USER_FAILURE]: failure,
  [Types.COUNT_NUMBER]: count,
  [Types.CLEAR_NAME]: clear,
});
