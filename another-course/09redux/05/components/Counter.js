import React from 'react';
import * as actions from '../store/action/counter';
import {connect} from 'react-redux';

//利用react-redux 需要导出一个连接后的组件

export default class Counter extends React.Component {
  // state = {
  //   n: store.getState().counter.num
  // };
  //
  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({n: store.getState().counter.num});
  //   })
  // }

  render() {
    return (
      <div>
        <button onClick={() => {
          // store.dispatch(actions.add(10));
          this.props.add(1);
        }}>+
        </button>
        {/*{store.getState().counter.num}*/}
        {this.props.num}
        <button onClick={() => {
          // store.dispatch(actions.minus(10));
          this.props.minus(2);
        }}>-
        </button>
      </div>
    )
  }
}

// connect执行时有两个参数
// 1.mapStateToProps 将redux中的状态作为属性放到Counter上
// 2.mapDispatchToProps 将dispatch映射成Counter上属性
// 3.这两个个函数的返回值会作为当前组件的属性
let mapStateToProps = (state) => { //这个函数的参数是state
  // return {n1: state.counter.num};
  //{...state.counter} => {number:0}
  return {...state.counter}
};
let mapDispatchToProps = (dispatch) => { //这个函数接收的参数是dispatch
  return {
    add:(count)=>{
      dispatch(actions.add(count));
    }
    ,minus:(count)=>{
      dispatch(actions.minus(count));
    }
  }
};
// export default connect(mapStateToProps,mapDispatchToProps)(Counter); //第二次执行的参数是当前组件

//connect中的mapDispatchToProps可以传入一个actionCreator对象
//这样和上面的缺点在于不能改名了 （必须和actionCreator的定义保持一致）
export default connect(state=>({...state.counter}),actions)(Counter);

let bindActionCreators = (actions) => { // 为什么可以直接传入一个actions，在内部会调用这个函数进行包装
  return (dispatch) => {
    let obj = {};
    for(let key in actions){
      obj[key] = (...args)=>{
        dispatch(actions[key](...args));
      }
    }
    return obj;
  };
};