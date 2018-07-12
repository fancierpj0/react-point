import * as Types from '../action-types';

export default function todo(state = [], action) {
  switch (action.type) {
    case Types.ADD_TODO:
      return [...state, action.text];
  }

  return state; //***********
}