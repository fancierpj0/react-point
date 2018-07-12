import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// let school = {name:'ahhh',age:111};
// function Build(str){
//   return <p>{school.name}{school.age}</p>
// }
// ReactDOM.render(<div>{Build()}</div>, document.getElementById('root'));
//↑ 调来调去 很烦躁

//组件：复用、组合、可维护

//1. 组件声明有两种方式 一种叫函数声明 一种叫类声明

//2. Q:react 如何区分是组件还是jsx元素 组件名开头大写

//3. react组件可以和jsx混用  因为组件就是返回jsx

/* ===属性=== */

//组件可以通过属性给组件传递值
// let school1 = {name:'ahhh',age:111};
// let school2 = {name:'ahhh2',age:222};
// function Build(props){ //props={school:{},...}
//   console.log(props)
//   // return <p>{props.school&&props.school.name}{props.school&&props.school.age}</p>
//   return <p>{props.name}{props.age}</p>
// }

//4. 一个数据对象可以在jsx中使用`{...}`解构出来作为一个个prop被包装进props传给组件
// ReactDOM.render(
//   <div>
//     {/*<Build school={school}></Build>*/}
//     {/*<Build school={schoo2}></Build>*/}
//     <Build {...school1}></Build>
//     <Build {...school2}></Build>
//   </div>
//   , window.root);


//5. 类组件
//默认属性
//属性校验
//都是静态的
class School extends React.Component{ // this.setState()
  static propTypes = { //静态属性
    age:PropTypes.number
  };
  static defaultProps = {
    age:'100'
  };

  constructor(props){ //在构造函数中拿到属性
    super(props);
    // console.log(props)
  }
  render(){ //此render 决定组件长什么样子 render的返回值只能有一个根元素
    console.log(this.props.age); //8
    return (
      <div>
        {JSON.stringify(this.props)}
      </div>
    )
  }
}

// School.propTypes = {age:PropTypes.string}; //等同于在类中 static propTypes
//此render 将虚拟dom转换成真实dom
ReactDOM.render(<School name={'ahh'} age={8}/>,window.root);

/* ===状态=== */
//6. 属性是由外界传递的，外面不能改属性，只有状态时属于组件自己的
//什么是复合组件？ 我们可以将多个组件进行组合 例如调用两次Counter组件
//结构非常复杂时 可以把组件分离开
//复合组件 有父子关系 父的数据传递给子的数据

class Counter extends React.Component{
  constructor(){
    super();
    this.state = {count:{number:1}}
  }

  handleClick = () => {
    this.setState({
      count: {number: this.state.number + 1}
    });
  };
  render(){
    return (
      <p>{this.state.count.number}</p>
    )
  }
}

// 受控组件 非受控组件 （受控状态）
// 受控组件（受状态控制的组件），必须要有onChange方法，否则不能使用
// 受控组件可以赋予默认值（官方推荐使用 受控组件）
class Input extends React.Component{
  constructor(){
    super();
    // this.state = {val:''}
    this.state = {a:'',b:''}
  }

  // handleChange = (e) => { //e是事件源
  //   let val = e.target.value;
  //   this.setState({val});
  // };

  handleChane(key,e){
    //处理多个输入框的值映射到状态
    this.setState({
      [key]:e.target.value
    })
  }

  render(){
    return <div>
      {/*<input type="text" value={this.state.val} onChange={this.handleChange}/>*/}
      {/*{this.state.val}*/}

      {/*2)多input的情况*/}
      <input type="text" value={this.state.a} onChange={e=>{
        this.handleChange('a',e)
      }}/>
      <input type="text" value={this.state.b} onChange={e=>{
        this.handleChange('b',e)
      }}/>
    </div>
  }
}

ReactDOM.render(<Input/>, window.root);

//非受控组件
//ref

/* Recat属性传递 */
//一层层传递
//单向数据流

//a)父传子 通过属性
//b)子传父 通过父亲传递给儿子一个函数，儿子调用父亲的函数，将值传递给父亲,父亲更新值，刷新视图

