import React from 'react';
import './style.css';

export default class TodoList extends React.Component {
  constructor(props) {
    //调用父类的构造函数
    super(props);
    this.state = {
      inputValue: ''
      , list: []
    };
  }

  handleInputChange = (ev) => {
    // this.state.inputValue = ev.target.value;
    // console.log('this.state.inputValue:', this.state.inputValue);
    //会改变状态，但在下一次状态改变之前，会恢复为原本的在state里初始化的状态
    //比如我输入1个1，这里inputValue会变为1
    //但再输入一个2，并不会变为12，而是2
    //TODO React中的state不推荐我们直接修改，而是推荐拷贝一个副本再去操作

    this.setState({inputValue: ev.target.value});
  };

  handleAdd = (ev) => {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
      , inputValue: ''
    });
  };

  handleDel = (ev, id) => {
    this.setState({
      list: this.state.list.filter((item, index) => index !== id)
    });
  };

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
          {
            this.state.list.map((item, index) => {
              return (
                <li
                  key={index}
                  dangerouslySetInnerHTML={{__html:item}}
                >
                  {
                    //TODO 如果一个元素使用dangerouslySetInnerHTML来设置内部的html，那么不要在元素内部再使用jsx，这样会报错
                    //invariant.js:42 Uncaught Error: Can only set one of `children` or `props.dangerouslySetInnerHTML`.
                  }
                  {/*{item}*/}
                  {/*<button onClick={(ev) => this.handleDel(ev, index)}>删除</button>*/}
                </li>
              )
            })
          }
        </ul>
        {/*</div>*/}
      </React.Fragment>
    );
  }
}
