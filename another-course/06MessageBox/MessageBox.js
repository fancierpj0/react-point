import React from 'react';
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";

export default class MessageBox extends React.PureComponent{
  constructor(){
    super();
    this.state = {messages:[]};
  }

  addMessage = (message) => { // message是儿子传递过来的，实现子父传递
    let messageItem = {...message, id: Math.random(), createAt: Date.now()};
    // this.state.messages.push(messageItem);
    // this.setState({messages:this.state.messages}); //这种添加方式如果使用的是PureComponent 就不会更新(因为不会改变原有的引用地址，而purecomponent对比的就是地址)
    let messages = [...this.state.messages,messageItem];
    this.setState({messages},()=>{
      // 或则在这里保存
      // this.state
    });
    localStorage.setItem('messages', JSON.stringify(messages));
  };

  deleteMessage = (id) => { //根据id进行删除
    let messages = this.state.messages.filter(item => item.id != id);
    this.setState({messages});//->此方法是异步的，要保存的话用messages
    localStorage.setItem('messages', JSON.stringify(messages));
  };

  componentDidMount(){
    //willMount 的 setState是同步的 相比在didMount中获取数据 只会获取一次，但是已废弃
    let messages = JSON.parse(localStorage.getItem('messages'))||[];
    this.setState({messages});
  }

  render(){
    return (
      <div className='container'>
        <div className="row">
          <div className="col-md-6  col-md-offset-3">
            <div className="panel panel-danger">
              <div className="panel-heading">
                <h1 className='text-center h3'>留言板</h1>
              </div>
              <div className="panel-body">
                <MessageList messages={this.state.messages} delete={this.deleteMessage}/>
              </div>
              <div className="panel-footer">
                <MessageForm add={this.addMessage}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}