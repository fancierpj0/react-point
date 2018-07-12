// react有两部分组成 一部分是react 一部分是react-dom 使用的都是es6语法
// import 语法要放置到页面最顶部
import React from 'react'; //引入的react必须首字母大写
import ReactDOM,{render} from 'react-dom'; //常用的方法：render

//react元素又或则叫jsx元素 (javascript+xhtml)
render(<h1 id="a">hello world</h1>, window.root);

//jsx是一个语法糖 最后会通过babel进行转义 变成 React.createElement写法

let el = React.createElement(
  "h1"
  , {id: "a"}
  , "hello world"
);

render(el, window.root);

//其中的el是通过createElement生成的对象

/*
  React.createElement(                    {
    "h1"                                     type;'h1'
    , {id: "a"}           ---------->        ,props:{id:'a',children:'hello world'}}
    , "hello world"
  )
*/

//这最终得到的对象 也就是我们所说的【虚拟DOM】

// 1. createElement 简单实现
function ReactElement(type,props){
  this.type = type;
  this.props = props;
  //剩下的就是react元素的特性 继承自上级
}

function createElement(type,props,...children){ // 将剩余的变成数组
  if(children.length===1) children = children[0];
  return new ReactElement(type,{...props,children});
}

let myRender = (obj, container) => {
  let {type, props} = obj;
  let ele = document.createElement(type); //创建真实dom
  for(let key in props){
    if(key === 'children'){
      //children可能是数组 也可能是一个
      if(typeof props[key] === 'object'){ // 如果子元素时对象那就继续调用render
        props[key].forEach(item => {
          if(typeof item === 'object'){
            myRender(item, ele);
          }else{
            ele.appendChild(document.createTextNode(item));
          }
        });
      }else{ // 一个的话 直接插入到h1中
        ele.appendChild(document.createTextNode(props[key]));
      }
    }else if(key === 'className'){
      ele.setAttribute('class', props[key]);
    }else{
      ele.setAttribute(key, props[key]);
    }
  }
  container.appendChild(ele); //将元素插入到页面中
};

myRender(createElement(...something),window.root)