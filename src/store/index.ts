// applyMiddleware 中间件
import { createStore, compose, applyMiddleware } from 'redux';
// 引入redux-thunk
import thunk from 'redux-thunk';
// reducer里更新Store里的state，这里进行分文件处理
import reducer from './reducer';

// createStore中只能放两个参数
// 为了react浏览器扩展插件和redux-thunk一起使用，修改如下，使用compose增强函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);

export default store;
