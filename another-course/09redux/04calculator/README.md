跨组件数据的交互 和 平级组件的交互

仓库
管理员
组件 ->store.dispatch(action)->通知管理员->管理员依据`action`修改对应的仓库数据

组件 ->store.subscribe(this.setState({ number:store.getState().number}))
->仓库数据被管理员改变->执行订阅（刷新组件）

## redux里包含的东西
1. createStore创建容器用来存放状态
2. createStore中有一个state属性，不能直接访问状态
3. 在组件中想要获取这个状态可以通过产生的容器中的getState方法来获取
4. createStore中的subscribe目的是用来订阅事件的（当用户派发新动作时会将订阅的函数进行执行）
5. 派发函数dispatch，提供派发动作的方法，在内部会调用reducer，通过reducer触发状态的更新
6. action动作，动作有一个type属性用来描述会干什么事情