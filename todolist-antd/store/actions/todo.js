import * as types from '../action-types';

export default {
  add(payload) {
    return {type: types.ADD, payload}
  }
  ,change(ev){
    return {type:types.INPUT_CHANGE,payload:ev.target.value}
  }
  ,del(payload){
    return {type:types.DEL,payload}
  }
  ,_load(payload){
    return {type:types.LOAD,payload}
  }
  ,load(){
    return {type:types.LOAD_ASYNC}
  }
}
