import React from 'react';
import './style.css'
import {CSSTransition} from 'react-transition-group';

export default class App extends React.Component {
  state = {
    show: true
  };

  render() {
    return (
      <React.Fragment>
        {/*<div className={this.state.show ? 'show' : 'hide'}>hello,ahhh</div>*/}

        {/*
          CSSTransition 的classNames 属性有s!!，是添加的类名的前缀，默认就为fade
          timeout:动画的持续时间
          unmountOnExit:退出动画结束后会移除dom（注意并不是display：none）
          onEntered钩子(入场动画结束后触发) 可以放一个函数 函数接收一个参数 ，为包裹的的元素的dom

          appear 定义页面刷新时（或首次进入一个页面时）执行的动画（会触发onEntered钩子函数）
          appear 会根据 .fade-active{} .fade-appear-active{} 来执行
        */}
        <CSSTransition
          in={this.state.show}
          timeout={1500}
          classNames='fade'
          unmountOnExit
          onEntered={(el)=>{el.style.color='blue'}}
          appear={true}
        >
          <div>hello</div>
        </CSSTransition>

        <button onClick={() => this.setState({show: !this.state.show})}>toggle</button>
      </React.Fragment>
    );
  }
}
