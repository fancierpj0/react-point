import React from 'react';
import {connect} from 'react-redux';
import actions from '../store/action/index'; //actions 是 actionCreator组成的对象

class TodoHeader extends React.Component {
  getUnFinishCount = () => {
    return this.props.todos.filter(item => !item.isSelected).length;
  };

  render() {
    return (
      <div>
        <h3>亲 你有{this.getUnFinishCount()}件事没有完成</h3>
        <input type="text" className="form-control" onKeyUp={(e)=>{
          if(e.keyCode === 13){
            this.props.addTodo({id: Math.random(), title: e.target.value, isSelected: false});
            e.target.value = '';
          }
        }}/>
      </div>
    )
  }
}

export default connect(state => ({...state}),actions)(TodoHeader);