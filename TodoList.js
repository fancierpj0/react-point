import React from 'react';
import './style.css';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  state = this.state = {
    inputValue: ''
    , list: []
  };

  handleInputChange = (ev) => {
    // this.state.inputValue = ev.target.value;
    // console.log('this.state.inputValue:', this.state.inputValue);
    //会改变状态，但在下一次状态改变之前，会恢复为原本的在state里初始化的状态
    //比如我输入1个1，这里inputValue会变为1
    //但再输入一个2，并不会变为12，而是2
    //TODO React中的state不推荐我们直接修改，而是推荐拷贝一个副本再去操作

    // this.setState({inputValue: ev.target.value});

    //这种方式value必须缓存 不然会报错
    let value = ev.target.value;
    this.setState((prevState)=>({inputValue: value}));
  };

  handleAdd = (ev) => {
    let timestamp = new Date().getTime();

    // this.setState({
    //   list: [...this.state.list, {id:timestamp,content:this.state.inputValue}]
    //   , inputValue: ''
    // });

    this.setState((prevState)=>({
      list: [...prevState.list, {id:timestamp,content:prevState.inputValue}]
      , inputValue: ''
    }));
  };

  handleDel = (ev, id) => {
    // this.setState({
    //   list: this.state.list.filter((item) => item.id !== id)
    // });

    this.setState((prevState)=>({
      list: prevState.list.filter((item) => item.id !== id)
    }));
  };

  getTodoItems(){
    return this.state.list.map((item, index) => {
      return <TodoItem item={item} key={item.id} handleDel={this.handleDel}/>;
    })
  }

  render() {
    /* render函数返回的内容必须整体被包含在一个大的元素中 */
    {
      //单行注释
    }

    return (
      <React.Fragment>
        {/*<div>*/}

        <label htmlFor="testLabel">我是一个label</label>
        <input
          id='testLabel'
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          className='input'
        />
        <button
          onClick={this.handleAdd}
        >提交
        </button>

        <ul>
          {this.getTodoItems()}
        </ul>
        {/*</div>*/}
      </React.Fragment>
    );
  }
}
