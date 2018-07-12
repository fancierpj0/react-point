// let titleState = {
//   color: 'red'
//   , text: '标题'
// };
// let contentState = {
//   color: 'green'
//   , text: '内容'
// };

//redux "统一"的状态管理
// let state = {
//   titleState:{
//     color: 'red'
//     , text: '标题'
//   }
//   ,contentState:{
//     color: 'green'
//     , text: '内容'
//   }
// };

const CHANGE_TITLE_TEXT = 'change_title_text';
const CHANGE_CONTENT_COLOR = 'change_content_color';

//将状态放到一个盒子里 别人改不了
function createStore(reducer){
  //让state 自己定义好

  // let state = {
  //   titleState:{
  //     color: 'red'
  //     , text: '标题'
  //   }
  //   ,contentState:{
  //     color: 'green'
  //     , text: '内容'
  //   }
  // };
  let state;

  dispatch({});
  function dispatch(action){ //派发 参数是action 动作，规定action是一个对象，这个对象必须有一个type属性

    //让switch也自己定义
    state = reducer(state,action); //调用写好的方法，这个方法会返回一个新的状态
    // switch (action.type){ //更改状态 要有一个新的状态覆盖掉
    //   //为了防止名字写错 做成宏(宏观的)（常量） 有提示
    //   case CHANGE_TITLE_TEXT:
    //     // state.titleState.text = //更改状态不要直接更改 最好用一个新的状态覆盖掉(考虑一下pureComponent)
    //     state = {...state, titleState: {...state.titleState, text: action.text}};
    //     break;
    //   case CHANGE_CONTENT_COLOR:
    //     state = {...state, contentState: {...state.contentState, color: action.color}};
    //     break;
    // }
  }

  let getState = () => JSON.parse(JSON.stringify(state)); //获取转改的方法 阻止对本源数据进行修改

  return {
    getState
    ,dispatch
  }
}

let initState = {
  titleState:{
    color: 'red'
    , text: '标题'
  }
  ,contentState:{
    color: 'green'
    , text: '内容'
  }
};

let store = createStore(); //创建容器时需要传递一个管理员

//管理员需要知道所有初始状态
function reducer(state = initState,action){ //管理员，负责如何更改状态
  switch (action.type){ //更改状态 要有一个新的状态覆盖掉
    //为了防止名字写错 做成宏(宏观的)（常量） 有提示
    case CHANGE_TITLE_TEXT:
      // state.titleState.text = //更改状态不要直接更改 最好用一个新的状态覆盖掉(考虑一下pureComponent)
      return {...state, titleState: {...state.titleState, text: action.text}};
      break;
  }
  return state; //管理员需要知道所有初始状态 //createStore()->dispatch({})->initState
}


// const CHANGE_TITLE_TEXT = 'change_title_text';
// const CHANGE_CONTENT_COLOR = 'change_content_color';
//不能直接更改状态 为了防止在一个方法中崩掉不属于自己的其它状态
// function dispatch(action){ //派发 参数是action 动作，规定action是一个对象，这个对象必须有一个type属性
//   switch (action.type){ //更改状态 要有一个新的状态覆盖掉
//     //为了防止名字写错 做成宏(宏观的)（常量） 有提示
//     case CHANGE_TITLE_TEXT:
//       // state.titleState.text = //更改状态不要直接更改 最好用一个新的状态覆盖掉(考虑一下pureComponent)
//       state = {...state, titleState: {...state.titleState, text: action.text}};
//       break;
//     case CHANGE_CONTENT_COLOR:
//       state = {...state, contentState: {...state.contentState, color: action.color}};
//       break;
//   }
// }

renderApp();

setTimeout(() => {
  //要改什么 改成什么样
  // dispatch({type:CHANGE_TITLE_TEXT,text:'长标题'}); // 除了type 其它叫它payload 载荷
  // dispatch({type:CHANGE_CONTENT_COLOR,color:'blue'});

  store.dispatch({type:CHANGE_TITLE_TEXT,text:'长标题'}); // 除了type 其它叫它payload 载荷
  store.dispatch({type:CHANGE_CONTENT_COLOR,color:'blue'});
  renderApp(); //每次派发完都需要render
}, 3000);

//将渲染拆成一个个小部分
function renderApp(){
  renderTitle();
  renderContent();
}
//自己的逻辑放在自己的方法里
function renderTitle(){
  // state = {} //为了防止 全局污染 So...
  let title = document.querySelector('.title');
  // title.innerHTML = state.titleState.text;
  // title.style.color = state.titleState.color;

  title.innerHTML = store.getState().titleState.text;
  title.style.color = store.getState().titleState.color;
}
function renderContent(){
  let content = document.querySelector('.content');
  content.innerHTML = store.getState().contentState.text;
  content.style.color = store.getState().contentState.color;
}