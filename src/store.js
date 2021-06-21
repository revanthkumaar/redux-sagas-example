import {applyMiddleWare, createStore} from 'redux';
import logger from 'redux-logger'
import {createSagaMiddleware} from 'redux-saga'
import imageReducer from './imageReducer'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(imageReducer,applyMiddleware(sagaMiddleware))

export default store;