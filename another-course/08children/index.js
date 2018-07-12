import React from 'react';
import ReactDOM from 'react-dom';

//this.props.children 是获取组件中间的内容
//1.默认不传递是undefined
//2.传一个对象或则string
//3.传入多个就是数组类型
class Dinner extends React.Component{
  render(){
    return <div>
      {/*{Object.prototype.toString.call(this.props.children)}*/}
      {React.Children.map(this.props.children,(item,index)=>(
        <li>{item}</li>
      ))}
    </div>;
  }
}

ReactDOM.render(<Dinner>
  汉堡
  <div>汉堡</div>
  <div>汉堡</div>
</Dinner>, document.getElementById('root'));