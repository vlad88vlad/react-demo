import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {helloSaga} from '../../saga/index'

import rootReducer from "../reducers/index";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(helloSaga)

export default store;