import {createStore} from '../redux';

function counter(state={number:0},action){
  switch (action.type){
    case 'ADD':
      return {number: state.number + action.count};
    case 'MINUS':
      return {number: state.number - action.count};
  }
  return state;
}

//不同管理员管理不同部分的数据
function todo(state=[],action){
  switch (action.type){
    case 'ADDTODO':
      return [...state, action.content];
  }
  return state;
}

//combineReducers {counter:{number:0},todo:[]}
let combineReducers = (reducers) => { //

  //返回一个新的reducer
  return (state={},action) => { //第一次state={}，第二次state={counter:{...},todo:{....}}
    let obj = {}; //最终的状态
    for(let key in reducers){
      obj[key] = reducers[key](state[key],action) //obj.counter={number:0} //一个子动作会在所有子reducer中走一圈
    }
    return obj;
  };
};

let reducer = combineReducers({counter, todo});
export default createStore(reducer);