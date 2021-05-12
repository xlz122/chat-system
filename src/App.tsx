import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// react-redux连接器
import { connect } from 'react-redux';
import renderRoutes from '@router/renderRoutes';
// 路由数据
import { routes } from './router/routes';
// 404页面
import NotFound from '@views/not-found/NotFound';
import { reduxState, reduxDispatch } from '@store/reducer';
import { Props } from '@/type/index';

function App(props: Props): React.ReactElement {
  React.store = props;
  
  return (
    <Switch>
      <Route render={({ location }: Props) => (
        location?.state && location?.state.is404
          ? <NotFound />
          : <Accessible />
      )} />
    </Switch>
  );
}

// 重定向到404
const RedirectAs404 = ({ location }: Props) => <Redirect to={{ ...location, state: { is404: true } }} />;

// 可访问路由以及兜底404
function Accessible() {
  return (
    <Switch>
      {
        renderRoutes(routes)
      }
      <Route component={RedirectAs404} />
    </Switch>
  );
}

// redux数据挂载到props上
const mapStateToProps = (state: reduxState) => {
  return {
    msg: state.msg
  };
};
const mapDispatchToProps = (dispatch: reduxDispatch) => {
  return {
    // 设置msg方法
    setMsg() {
      const action = {
        type: 'MSG',
        msg: '新消息'
      };
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
