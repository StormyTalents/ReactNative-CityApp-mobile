import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import {persistStore} from "redux-persist";
import reducer from "../Reducers";
import sagas from '../Sagas';
import Reactotron from './ReactotronConfig';
export default function ConfigureStore(onCompletion: () => void): any {
  // console.log('ConfigureStore');
  /* ------------- Redux Configuration ------------- */

  const middleware = [];
  const enhancers = [];
  /* ------------- Saga Middleware ------------- */
  const sagaMonitor = Reactotron.createSagaMonitor();
  const sagaMiddleware = createSagaMiddleware({sagaMonitor});
  const reactortonEnhancer = Reactotron.createEnhancer();
  middleware.push(sagaMiddleware);
  enhancers.push(reactortonEnhancer);

  /* ------------- Assemble Middleware ------------- */
  enhancers.push(applyMiddleware(...middleware));
  // mount it on the Store
  const store = createStore(reducer, compose(...enhancers));

  persistStore(store, onCompletion);
  sagaMiddleware.run(sagas);
  return store;
}