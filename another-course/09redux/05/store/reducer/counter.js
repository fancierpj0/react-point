import * as Types from '../action-types';

export default function counter(state = {num: 100}, action) {
  switch (action.type) {
    case Types.INCEREMENT:
      return {num: state.num+action.count};
    case Types.DECREMENT:
      return {num:state.num-action.count}
  }

  return state; //***********
}