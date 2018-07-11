import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  state = {

  };

  static defaultProps = {

  };

  static propTypes = {
    item:PropTypes.object.isRequired
    ,handleDel:PropTypes.func.isRequired
  };

  /**
   * 一个组件要从父组件接收参数
   *
   * 只要父组件的render函数被【重新】执行了，子组件的这个生命周期函数就会被执行
   * ,意思是如果这个组件是第一次存在于父组件中，不会执行
   * 如果这个组件之前已经存在于父组件中，才会执行
   *
   * 注意，并不是子组件接收的props发生改变才会执行，而是父组件重新调用render时就会执行，因为React只要父组件重新render，子组件也务必会重新render，
   * ，而什么时候会认render呢？
   * 只要父组件的一个状态发生改变就会render
   * ，So一个子组件render可能并不是因为它所接受的参数变化而render，而可能是被牵连的
   *
   * */

  componentWillReceiveProps(){
    console.log('child componentWillReceiveProps');
  }

  render() {
    let {handleDel, item} = this.props;

    return (
      <React.Fragment>

        {/*
          <li
            key={index}
            dangerouslySetInnerHTML={{__html:item}}
          >
            {
              //TODO 如果一个元素使用dangerouslySetInnerHTML来设置内部的html，那么不要在元素内部再使用jsx，这样会报错
              //invariant.js:42 Uncaught Error: Can only set one of `children` or `props.dangerouslySetInnerHTML`.
            }
          </li>
        */}

        <li>
          {item.content}
          <button onClick={(ev) => handleDel(ev, item.id)}>删除</button>
        </li>
      </React.Fragment>
    )
  }
}

// TodoItem.defaultProps = {
//
// };

// TodoItem.propTypes = {
//   item:PropTypes.object.isRequired
//   ,handleDel:PropTypes.func.isRequired
// };

export default TodoItem;
