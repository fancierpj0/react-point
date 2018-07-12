import React from 'react';

export default class MessageItem extends React.Component{
  render(){
    let {auth, id, content, createAt} = this.props;
    return (
      <li className="list-group-item">
        留言人:{auth} 内容:{content}
        <button className="btn btn-danger btn-xs pull-right" onClick={()=>{this.props.del(id)}}>&times;</button>
        <span className="pull-right">时间:{new Date(createAt).toLocaleString()}</span>
      </li>
    )
  }
}