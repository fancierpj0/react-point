import * as Types from '../action-types';

let initState = {
  type:'all' //默认全部显示
  ,todos: [
    {isSelected: false, title: '今天吃药了吗？', id: 1}
    , {isSelected: false, title: '今天吃药了吗？', id: 2}
  ]
};

function reducer(state = initState, action) {
  switch (action.type){
    case Types.ADD_TODO:
      return {...state,todos: [...state.todos, action.todo]};

    case Types.CHANGE_SELECTED:
      let todos = state.todos.map((item, index) => {
        if (item.id === action.id) item.isSelected = !item.isSelected;
        return item;
      });
      return {...state,todos};

    case Types.DELETE_TODO:{ //es6块级作用域 防止todos重名
      let todos = state.todos.filter(item => item.id !== action
        .id);
      return {...state,todos};
    }

    case Types.CHANGE_CURRENT_TYPE:
      return {...state,type:action.value}
  }

  return state;
}

export default reducer;