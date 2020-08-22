import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import Reducer from './Reducers/Counterreducer'
const store=createStore(Reducer,applyMiddleware(logger))
export default store;