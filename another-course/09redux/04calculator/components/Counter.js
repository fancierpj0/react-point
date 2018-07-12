import React from 'react';
import store from '../store';

export default class Counter extends React.Component{
  state = {
    n:store.getState().counter.number
  };

  componentDidMount(){
    this.un = store.subscribe(() => {
      this.setState({n: store.getState().counter.number});
    });
  }

  componentWillUnmount(){ //组件销毁时 需要将其监听的函数移除掉
    this.un();
  }

  //组件更新两种情况 属性的更新 setState
  render(){
    return (
      <div>
        <button onClick={()=>{
          store.dispatch({type:'ADD',count:1});
        }}>+</button>
        <span>{this.state.n}</span>
        <button onClick={()=>{
          store.dispatch({type:'MINUS',count:1})
        }}>-</button>
      </div>
    )
  }
}