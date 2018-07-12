import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './todolist-antd/store';

import App from './App';

// import TodoList from './TodoList';

// ReactDOM.render(<TodoList/>, document.getElementById('root'));

import TodoList from './todolist-antd';

ReactDOM.render(<Provider store={store}>
  <TodoList/>
</Provider>, document.getElementById('root'));
