[toc]

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
