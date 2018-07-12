import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// react-redux 提供了一个Provider组件，这里需要将store传入
import store from './store';
import {Provider} from 'react-redux';
import App from './components/App';

ReactDOM.render(<Provider store={store}>
  <App/>
</Provider>, window.root);