import { createStore, applyMiddleware } from 'redux';
import {createWrapper} from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReduser from './reducers';
import rootSagas  from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const initialState = {};
const middlewares = [sagaMiddleware]; 

const myStore = createStore(rootReduser, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

const store = () => myStore;
const wrapper = createWrapper(store)
sagaMiddleware.run(rootSagas);

export default wrapper;
