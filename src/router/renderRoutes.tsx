/* eslint-disable */
import React from 'react';
import { Route } from 'react-router-dom';
import asyncComponent from './asyncComponent';
import { Routes } from '@router/routes';
import { Props } from '@/type/index';

/**
 * @description renderRoutes 渲染路由
 * @param { Array } routes 路由列表
 */
function renderRoutes(routes: Routes) {
  // 套路由转成一维数组
  const routeList = getAllRoute(routes);
  return (
    routeList.map((item: Routes) => {
      return (
        <Route
          key={item.path}
          path={item.path}
          exact={item.meta && item.meta.exact}
          render={(props: Props) => {
            const LoadableComponent = asyncComponent(() => import(`@/${item.component}`));
            console.log(LoadableComponent);
            return <LoadableComponent {...props} />
          }}
        />
      );
    })
  );
}

/**
 * @description 嵌套路由转成一维数组
 * @param { Array } routes 路由列表
 * @return { Array } routesList 转成一维的路由数组
 */
 export function getAllRoute(routes: Routes): Array<Routes> {
  const routeList: Routes[] = [];
  // routes不是数组直接返回
  if (Object.prototype.toString.call(routes) !== '[object Array]') {
    return routeList;
  }
  // 递归路由列表
  function recursiveRoutes(list: Routes) {
    list.forEach((item: Routes) => {
      if (
        Object.prototype.toString.call(item.children) === '[object Array]' &&
        item.children &&
        item.children.length > 0
      ) {
        recursiveRoutes(item.children);
      } else {
        routeList.push(item);
      }
    });
  }
  recursiveRoutes(routes);
  return routeList;
}

export default renderRoutes;
