import { all } from 'redux-saga/effects';
import userWatcher from '../../AppScreen/LoginScreen/LoginSagas';

export default function* root() {
  yield all([
    // get user name github on login scree
    ...userWatcher,
  ]);
}
