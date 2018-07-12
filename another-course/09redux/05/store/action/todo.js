import * as Types from '../action-types';

export default {
  addTodo(content){
    return {type: Types.ADD_TODO,text:content};
  }
}