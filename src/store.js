import {applyMiddleWare, createStore} from 'redux';
import logger from 'redux-logger'
import {createSagaMiddleware} from 'redux-saga'
import imageReducer from './imageReducer'
import watchFetchImage from './imageSaga'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(imageReducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchFetchImage);

export default store;