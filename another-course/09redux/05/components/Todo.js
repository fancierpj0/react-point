import React from 'react';
import store from '../store';
import actions from '../store/action/todo';
import {connect} from 'react-redux';

class Todo extends React.Component {
  // state = {
  //   todos:store.getState().todo
  // };
  // componentDidMount(){
  //   store.subscribe(() => {
  //     this.setState({todos: store.getState().todo})
  //   });
  // }

  render() {
    return (
      <div>
        <input type="text" onKeyUp={(e) => {
          if (e.keyCode == 13) {
            // store.dispatch(actions.addTodo(e.target.value))
            store.dispatch(this.props.addTodo(e.target.value));
            e.target.value = '';
          }
        }}/>

        {/*{this.store.todos.map((item, index) => (*/}
          {/*<li key={index}>{item}</li>*/}
        {/*))}*/}

        {this.props.todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
    )
  }
}

// {counter:{number:0},todo:[]}
export default connect(state=>({todos:state.todo}),actions)(Todo)