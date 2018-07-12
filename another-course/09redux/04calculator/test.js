let createStore = require('./redux');

function reducer(state={number:0},action){
  switch (action.type){
    case 'ADD':
      return {number:state.number+action.b}
  }
  return state;
}

let store = createStore(reducer);
store.dispatch({type: 'ADD', b: 1});
let unsubscribe = store.subscribe(function () {
  console.log(store.getState());
});
console.log(store.getState());