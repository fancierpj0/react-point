//TODO 实现发布订阅【已完成】

function createStore(reducer){
  let state; //此时默认还是undefined
  function dispatch(action){ //派发
    state = reducer(state,action);
    listeners.forEach(cb => cb());
  }

  let listeners = []; //存放所有的监听函数
  let subscribe = (fn) => {
    listeners.push(fn);
    return () => { //取消绑定的函数，调用可以删除此次注册的函数
      listeners = listeners.filter(item => item !== fn);
    };
  };

  dispatch({}); //目的是用用户的状态覆盖掉自身的状态
  let getState = () => JSON.parse(JSON.stringify(state)); //用户可操作的拷贝状态
  return {getState, dispatch,subscribe};
}

const CHANGE_TITLE = 'change_title';
function reducer(state = {title:'标题'},action){
  switch (action.type){
    case CHANGE_TITLE: // {type:CHANGE_TITLE,content:'xxx'}
      return {...state,title:action.content}
      break;
  }
  return state; //默认状态会返回
}

let store = createStore(reducer);
function render(){
  document.querySelector('.title').innerHTML = store.getState().title;
}

render();
// setTimeout(function () {
//   store.dispatch({type:CHANGE_TITLE,content:'ahhh'});
//   render(); //每次dispatch后都要手动render
//   //-->So 需要发布订阅
// }, 2000);


store.subscribe(render);
//返回的是解绑该订阅的函数 So 我们能只订阅一次
let unSubscribe =  store.subscribe(function(){
  alert(1);
});

setTimeout(function () {
  store.dispatch({type:CHANGE_TITLE,content:'ahhh'});
  render();
  unSubscribe();
}, 2000);