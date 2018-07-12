import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider';
// 再渲染slider时要提供的一些必备的参数
// 2秒动一次
// speed 每隔.5s动一张
import a from './01.jpg';
import b from './02.jpg';
import c from './03.jpg';
let items = [{src: a}, {src: b}, {src: c}];
ReactDOM.render(<Slider
  delay={2}
  speed={0.5}
  autoplay={true}
  dots={true}
  arrows={true}
  items={items}
/>, document.getElementById('root'));