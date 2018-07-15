[toc]

## 安装
```
npm i -g create-react-app
create-react-app 你的项目名
```

## React fiber

React fiber 指 React16.x

## React环境搭建
```
npm -g create-react-app
create-react-app 你的项目名
```
### node
LTS 版本 Long Term Support，长期维护的版本

## noscript
当用户浏览器禁script的时候

`<noscript></nocsript>`中的内容会被显示

## registerServiceWorker.js
PWA progressive web application （手机端app）

第一次访问需要联网，第二次再访问之前访问过的网页不再需要网络（会存储在浏览器之内）
```
//需要支持https协议的服务器配合
//在index.js中引入
import registerServiceWorker from './registerServiceWorker'
```
### manifest.json
定义存储与桌面上的快捷方式的图标、网址、主体的颜色等等

需要在index.html中引入
```
//在webpack的打包时的html模板中引入
<link re="manifest" href="%PUBLIC_URL%/manifest.json">
```

## App.test
自动化测试文件

## import React from 'react'
只要使用jsx语法，就需要引入react库(而非react-dom)

## 声明式与命令式
声明式只需要声明一份图纸，就能达到某种功能

而命令式，必须要深入细节，亲自动手搬每一块砖

## React与其它库
React并不会影响其它库的运行

，它只会管理它挂载的根节点往下的区域

## 单向数据流
子组件可以获得父组件的数据，但不可以更改

这是为了防止同一份数据被多个组件共用时bug的定位

## 视图层框架
React只负责视图层

数据层 有redux mobx 等

## 函数式编程
都是一个个方法

方便自动化测试

##  虚拟dom
>传统渲染

1. state 数据
2. JSX 模板
3. 数据 + 模板 结合，生成真实的DOM，来显示
4. state 发生改变
5. 数据 + 模板 结合，生成真实的DOM，替换原始的DOM

缺陷：
第一次生成一个完整的DOM片段

第二次又生成了一个完整的DOM片段

第二次的DOM替换第一次的DOM

->灰常耗性能

---

> 过渡时期

1. state 数据
2. JSX 模板
3. 数据 + 模板 结合，生成真实的DOM，来显示
4. state 发生改变
5. 数据 + 模板 结合，生成真实的DOM，并不直接替换原始的DOM
6. 新的DOM(DocumentFragment) 和 原始的DOM 做比对，找差异
7. 找出input框发生了哪些变化
8. 只用新的DOM中的xx，替换掉老的DOM中的xx

缺陷：
拿新的DOM和原始的DOM直接做比对，也很消耗性能

>虚拟dom

1. state 数据
2. JSX 模板

4. 数据 + 模板 结合生成虚拟DOM(虚拟DOM就是一个JS对象，用来描述真实DOM)
{type:'div',props:{id:'abc',children:['123',{type:'span',props:{children:'some word'}}]}}

3. 用虚拟DOM的结构生成真实的DOM，来显示
<div id='abc'>123<span>some word</span></div>

5. state 发生变化

6. 数据 + 模板 生成新的虚拟DOM
{type:'div',props:{id:'abc',children:['123',{type:'span',props:{children:'bye bye'}}]}}

7. 找到原始虚拟DOM和新的虚拟DOM的区别在哪里(DOM Diff)
Diff，difference

为什么setState是异步的？
如果短时间内连续调用几次setState，只会调用一次虚拟DOM的比对

Diff细节
- 如果上一层的节点都不相同，就不会比对下层的，会整个都替换掉
  ，同层比对的好处在于算法简单，比对速度更快

- 一个虚拟dom可能有很多个子节点，那这时，新的和旧的比对时，就需要知道新的某一个节点和旧的哪一个节点进行比较，设置key值就是为了解决这个问题(这也是为什么不推荐使用像index这种不稳定的值作为key值)，他们会按照这个key值来组队比较

8. 根据区别，直接操作DOM中要改变的那部分(将some word改成bye bye)
                       ↓
<div id='abc'>123<span>bye bye</span></div>

虚拟DOM的优势：
1. 性能提升
2. 支持跨端应用 -> React Native
  原生应用里不存在dom的概念，但是有了虚拟dom，它只是一个js对象，是可以被识别的
  ，这个时候只需要做一些调整，不让虚拟dom生成dom而是转换成原生应用里的组件 即可

## 纯函数
react-redux中，reducer必须是一个纯函数，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用(比如对传入的参数进行了修改)

## 无状态组件
-> 函数(非类)组件 多用于UI组件

## pureComponent和immutable
一般来说使用了immutable就可以放心的使用原生的pureComponent来进行优化了

## 插件支持
### babel-plugin-transform-decorators-legacy
如果使用react脚手架创建的app，

需要eject的情况下package.json中如下配置
```
"babel": {
    "presets": [
      "react-app"
    ]
    ,"plugins":[
      "transform-decorators-legacy"
    ]
},
```

也可不eject

找到node_modules/babel-preset-react-app/index.js，然后在plugins加入装饰器支持

### redux-devltools-extension
> https://github.com/zalmoxisus/redux-devtools-extension

## 关于组件更新
只要调用`setState`，组件就会更新，不论setState是否传递了一个值

父组件重新渲染，所有子组件都会重新渲染（即使该子组件的状态并没有改变）

使用redux时，只要仓库里的状态改变，所有组件都会刷新，因为只要dispatch，所有组件订阅的listener就会执行，即`() => {this.setState(mapStateToProps(this.props.store.getState()))}`，即所有木偶组件的容器组件都会刷新状态，So，容器组件(父)就会重新渲染，因此所有木偶(子)组件也就会重新渲染
