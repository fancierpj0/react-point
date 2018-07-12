import React from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
import {connect} from 'react-redux';
import actions from './store/actions/todo';

// @connect(
//   state => state.todo
//   , actions
// )
// export default class TodoList extends React.Component {
//   componentDidMount() {
//     this.props.load();
//   }
//
//   render() {
//     let {change, add, del, inputValue, list} = this.props;
//
//     return (
//       <div style={{marginTop: '10px', marginLeft: '10px'}}>
//         <Input
//           placeholder='todo info'
//           style={{width: '300px', marginRight: '10px'}}
//           value={inputValue}
//           onChange={change}
//         />
//         <Button type="primary" onClick={add}>提交</Button>
//         <List
//           style={{marginTo: '10px', width: '300px'}}
//           bordered
//           dataSource={list}
//           renderItem={item => (<List.Item onClick={() => del(item.id)}>{item.content}</List.Item>)}
//         />
//       </div>
//     )
//   }
// }

export default connect(
  state => state.todo
  , actions
)(function({change, add, del, inputValue, list}){
    return (
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <Input
          placeholder='todo info'
          style={{width: '300px', marginRight: '10px'}}
          value={inputValue}
          onChange={change}
        />
        <Button type="primary" onClick={add}>提交</Button>
        <List
          style={{marginTo: '10px', width: '300px'}}
          bordered
          dataSource={list}
          renderItem={item => (<List.Item onClick={() => del(item.id)}>{item.content}</List.Item>)}
        />
      </div>
    )
  }
)
