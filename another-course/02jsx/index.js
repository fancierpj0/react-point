//上面一节 主要是js调用html 现在我们来看看html中如何调用js
//jsx元素 和 虚拟dom的区别在哪里？ 一个是函数 一个是对象 生成与被生成
import React from 'react';
import ReactDOM from 'react-dom';
//jsx元素->React.createElement->虚拟dom对象->render方法


//1. 在react中想将js当做变量引入到jsx中需要使用{} (不仅可以作为innerHTML 也可以作为html属性的值)
// let str = 'ahhh';
//2. 在jsx中，相邻的两个jsx元素 渲染时需要外面包裹一层元素
//3. {}取值表达式 取的是有返回值的结果

//a)
// let el = <span>{str}</span>;
//b)
// function fn(str){return <h1>{str}</h1>}
// let el = <div>{fn('ahhh')}</div>;

//4. 多个元素想要在return后换行，需要加个小括号
// function fn(str){
//   return (
//     <div>
//       <h1>{str}</h1>
//       <h1>{str}</h1>
//     </div>
//   )
// }

//5. 关于注释
//在jsx中 需使用 {/**/} 进行注释

//6. 关于循环
// let lessons = [
//   {name: 'vue', price: 800}
//   , {name: 'react', price: 1000}
// ];
//
// function toLesson(item){
//   return `当前课程是${item.name} 价格是${item.price}`
// }

// let el = (
//   <ul>
//     {lessons.map((item, index) => (<li key={index}>{toLesson(item)}</li>))}
//   </ul>
// );
//7. null在react中也是一个合法的元素 表示不存在 没有
// let el = (
//   <ul>
//     {lessons.map((item, index) => (
//       item.price<1000?null:<li key={index}>{toLesson(item)}</li>)
//     )}
//   </ul>
// );

//8. 关于jsx属性
//特殊的属性: class for(label for id)
//普通属性 和 html中的一样
//style属性的值 必须是一个对象类型
// let style = {backgroundColor:'red'}
// let el = <div className='a' htmlFor="b" style={style}></div>;
//防止xss攻击
let str = `<h1>纯标签</h1>`;
// let el = <div>{str}</div>; //->会被转成字符串 而不是作为html生成
//如果你想作为innerhtml生成 可使用 dangerouslySetInnerHTML
let el = <div dangerouslySetInnerHTML={{__html:str}}></div>

//{8}->是数字
//{}中不能直接打印对象
ReactDOM.render(el, window.root);
