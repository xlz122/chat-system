import React from 'react';
import { Route } from 'react-router-dom';
import asyncComponent from './asyncComponent';
import { Routes } from '@router/routes';
import { Props } from '@/type/index';

/**
 * @description renderRoutes 渲染路由
 * @param { Array } routes 路由列表
 */
function renderRoutes(routes: Routes): Routes[] {
  let routeList: Routes[] = [];

  // routes不是数组直接返回
  if (Object.prototype.toString.call(routes) !== '[object Array]') {
    return routeList;
  }

  routeList = routes.map((item: Routes) => {
    return handlerRoute(item);
  });

  return routeList;
}

/**
 * @description 处理路由数据
 * @param { Array } routes 路由列表项
 */
function handlerRoute(item: Routes) {
  // 嵌套路由，component传递的并不是组件
  if (
    item.children &&
    Object.prototype.toString.call(item.component) === '[object String]'
  ) {
    throw new Error('嵌套路由，component属性需为组件');
  }

  if (item.children) {
    return (
      <Route path={item.path} key={item.path}>
        <item.component />
      </Route>
    );
  }
  return (
    <Route
      key={item.path}
      path={item.path}
      exact={item.meta && item.meta.exact}
      render={(props: Props) => {
        const LoadableComponent = asyncComponent(
          () => import(`@/${item.component}`)
        );
        return <LoadableComponent {...props} />;
      }}
    />
  );
}

export default renderRoutes;
