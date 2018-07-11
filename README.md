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
