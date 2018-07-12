import {createStore} from 'redux';
import reducer from './reducer';

let store = createStore(reducer);
window._store = store; //方便调试

export default store;