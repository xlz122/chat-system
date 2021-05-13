/* eslint-disable */
import React from 'react';
import Loadable from 'react-loadable';
// 404页面
import NotFound from '@views/not-found/NotFound';

class RouterGuard extends React.Component {
  UNSAFE_componentWillMount() {
    // 路由跳转前拦截
    // beforeRouteJump(this.props);
  }
  
  render() {
    // 渲染前拦截
    // beforeComponentRender(this.props);
    console.log(this.props);

    // 使用react-loadable加载组件
    const LoadableComponent = Loadable({
      loader: () => import(`@/${this.props.routeOption.component}`),
      loading: <NotFound />,
      delay: 200 // 加载时间
    })
    
    console.log(LoadableComponent);
    return <LoadableComponent />
  }
}

export default RouterGuard;
