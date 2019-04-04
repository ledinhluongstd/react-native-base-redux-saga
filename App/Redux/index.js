import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas';
import { navReducer } from './NavigationRedux';
import { loginReducer } from '../../AppScreen/LoginScreen/LoginRedux';

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  // navigation state
  nav: navReducer,
  // screen state
  login: loginReducer,
});

export default () => {
  const configStore = configureStore(reducers, rootSaga);
  const { store, sagaMiddleware } = configStore;
  let sagasManager = configStore;

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = reducers;
      store.replaceReducer(nextRootReducer);

      const newYieldedSagas = rootSaga.default;
      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas);
      });
    });
  }

  return store;
};
