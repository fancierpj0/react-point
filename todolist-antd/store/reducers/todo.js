import * as types from '../action-types';

const initState = {
  inputValue: ''
  , list: []
};

//reducer 可以接收state，但是绝不能在直接接收到的state上进行修改，而应该是返回一个新的state
export default (state = initState, action) => {
  switch (action.type) {
    case types.INPUT_CHANGE:
      return {...state, inputValue: action.payload};
    case types.ADD:
      return {...state,inputValue:'', list: [...state.list,{id:new Date().getTime(),content:state.inputValue}]};
    case types.DEL:
      let ret = state.list.filter((item) => item.id !== action.payload);
      return {...state, list: ret};
    case types.LOAD:
      console.log('action:',action);
      return {...state, list: action.payload};
    default:
      break;
  }

  return state;
};
