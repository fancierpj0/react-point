function createStore(reducer) {
  let state; //此时默认还是undefined
  function dispatch(action) { //派发
    state = reducer(state, action);
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
  return {getState, dispatch, subscribe};
}

export {createStore};