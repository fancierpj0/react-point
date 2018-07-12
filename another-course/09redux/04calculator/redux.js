function createStore(reducer){
  let state //默认undefined
    , listeners = []
    , dispatch
    , getState
    , subscribe;

  dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(cb => cb());
  };

  dispatch({}); //初始化redux默认状态

  getState = JSON.parse(JSON.stringify(state));

  subscribe = (cb)=> {
    listeners.push(cb);
    return ()=>{
      listeners = listeners.filter((item) => item !== cb);
    }
  };

  return {getState,dispatch,subscribe}
}

export default createStore;
export {createStore}