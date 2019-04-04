import { call, put, takeLatest } from 'redux-saga/effects';
import { path } from 'ramda';
import LoginActions, { LoginTypes } from './LoginRedux';
import API from './LoginApi';

const api = API.create();

export function* getUserNameGithub(action) {
  const { username } = action;
  // make the call to the api
  const response = yield call(api.getUser, username);

  if (response.ok) {
    const firstUser = path(['data', 'items'], response)[0];
    const avatar = firstUser.avatar_url;
    const usernameGithub = firstUser.login;
    // do data conversion here if needed
    yield put(LoginActions.userSuccess(avatar, usernameGithub));
  } else {
    yield put(LoginActions.userFailure());
  }
}

export default [takeLatest(LoginTypes.USERNAME_GITHUB, getUserNameGithub)];
