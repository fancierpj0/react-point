// 一般整合的文件 只需要渲染
import React from 'react';
import ReactDOM from 'react-dom';
//根组件 我们将它进行渲染即可
import MessageBox from "./MessageBox";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<MessageBox/>, window.root);