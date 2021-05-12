// 在redux中，state的数据不允许直接更改，需要进行拷贝。
// 使用lodash.cloneDeep()方法进行深拷贝
import { cloneDeep } from 'lodash';

export type reduxState = {
  msg: string;
}

type reduxAction = {
  type: string;
  [index: string]: unknown;
}

export type reduxDispatch = (action: reduxAction) => void;

const defaultState: reduxState = {
  msg: '消息'
};

const reducer = (state: reduxState = defaultState, action: reduxAction) => {
  if (action.type === 'MSG') {
    let cloneState = cloneDeep(state);
    cloneState.msg = action.msg;
    return cloneState;
  }

  return state;
}

export default reducer;
