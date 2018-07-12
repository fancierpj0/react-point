import * as types from './action-types';
import _load from './actions/todo';
import {takeEvery, put} from "redux-saga/effects";
import axios from 'axios';

function* getList() {
  try{
    const res = yield axios.get('/list.json');

    const action = yield _load(res.data);

    yield put(action);
  }catch(e){console.warn('请求失败~，大侠请重新来过（づ￣3￣）づ╭❤～')}
}

export default function* rootSaga() {
  yield takeEvery(types.LOAD_ASYNC, getList)
};
