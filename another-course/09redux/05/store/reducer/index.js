import counter from './counter';
import todo from './todo';
import {combineReducers} from 'redux'

export default combineReducers({counter, todo});