import React from 'react';
import MessageItem from "./MessageItem";

export default class MessageList extends React.Component{
  render(){
    return (
      <ul className="list-group">
        {/*this.state = {messages:[{id:1,content:'今天吃药了吗？',auth:'ahhh',createAt:Date.now()}]};*/}
        {this.props.messages.map((item,index)=>(
          <MessageItem key={index} {...item} del={this.props.delete}/>
        ))}
      </ul>
    )
  }
}