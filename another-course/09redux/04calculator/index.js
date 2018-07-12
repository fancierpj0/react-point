import React from 'react';
import ReactDOM from 'react-dom';
import Computer from "./components/Computer";
import Counter from "./components/Counter";
import Todo from "./components/Todo";


ReactDOM.render(<div>
  <Counter/>
  <Computer/>
  <Todo/>
</div>, window.root);