import React from 'react';
import ReactDOM from 'react-dom';

//声明周期
//【初始化】：只会走一次
                      //React.PureComponent，如果集成自PureComponent，状态更新时，它会比较新老状态是否相等 但比较的是地址(<-注意)
class Counter extends React.Component{
  //初始化:1. defaultProps
  static  defaultProps = {

  };

  //初始化:2. constructor
  constructor(){
    super();
    this.state={number:0}
  }

  //初始化:3. componentWillMount
  componentWillMount(){ // 取本地的数据 同步的方式：采用渲染之前获取数据，只渲染一次 --> 16.3中已宣布废弃
    // localStorage.getItem('a') //->localStorage是同步的！
    console.log('组件将要加载');
  }

  handleClick = () => {
    //组件运行时:@情景一 1.更新状态
    this.setState({number: this.state.number + 1});
  };

  //组件运行时:2. shouldComponentUpdate 决定是否重新渲染页面
  shouldComponentUpdate(nextProps,nextState){ //代表的是下一次的属性 和 下一次的状态
    console.log('nextState:',nextState); //不会阻止状态更新，只会阻止页面刷新
    if(nextState.number===this.state.number) return false; //<-一样的话就不更新 一种优化
    // this.setState({})//会卡死
    return nextState.number%2; //返回false就不再会调用render方法了
  }

  //组件运行时:3. 组件将要更新
  componentWillUpdate(){
    console.log('组件将要更新');
  }


  //初始化|组件运行时:4. render
  render(){
    console.log('render');
    return (
      <div>
        <p>{this.state.number}</p>
        <ChildCounter n={this.state.number}></ChildCounter>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }

  //初始化:5. componentDidMount
  componentDidMount(){
    console.log('组件挂载完成');
  }

  //组件运行时:5. componentDidUpdate
  componentDidUpdate(){
    console.log('组件更新完毕')
  }
}

class ChildCounter extends React.Component{
  componentWillMount(){
    console.log('child componentWillMount')
  }

  //组件运行时:@情景二 1.父组件改变传参，子组件将接收新的属性
  componentWillReceiveProps(newProps){ // 第一次不会执行
    console.log('child componentWillReciveProps')
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('child nextProps:',nextProps,nextProps.n%3);
    return nextProps.n%3;
  }

  render(){
    console.log('child-render');
    return <div>
      {this.props.n}
    </div>
  }
  componentDidMount(){
    console.log('child componentDidMount')
  }
}
ReactDOM.render(<Counter name="计数器"/>, document.getElementById('root'));