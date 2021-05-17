import React from 'react';
import { Route } from 'react-router-dom';
import asyncComponent from './asyncComponent';
import { Routes, Children } from '@router/routes';
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
            return <LoadableComponent {...props} />;
          }}
        />
      );
    })
  );
}

/**
 * @description 路由数组转成一维数组
 * @param { Array } routes 路由列表
 * @return { Array } routesList 转成一维的路由数组
 */
export function getAllRoute(routes: Routes): Array<Routes> {
  const routeList: Routes[] = [];
  // routes不是数组直接返回
  if (Object.prototype.toString.call(routes) !== '[object Array]') {
    return routeList;
  }

  routes.forEach((item: Routes) => {
    if (
      item.children &&
      item.children.length > 0
    ) {
      const result = handlerNestRoute(item);
      routeList.push(...result);
    } else {
      routeList.push(item);
    }
  });
  
  return routeList;
}

/**
 * @description 处理嵌套路由
 * @param { Array } item 包含嵌套路由的路由数组项
 */
function handlerNestRoute(item: Routes) {
  const result = [];

  if (!item.path) {
    throw new Error('路由path为空或未定义');
  }

  // 根路由单独处理
  if (item.path === '/') {
    result.push({
      ...item,
      path: `${item.path}`,
      component: item.component
    });
  }

  item.children && item.children.forEach((i: Children) => {
    if (!i.path) {
      throw new Error('嵌套路由path为空或未定义');
    }

    // 根路由处理
    if (item.path === '/') {
      // 嵌套路由以 / 开头
      if (i.path.match(/^\/\.*/)) {
        result.push({
          ...i,
          path: `${i.path}`,
          component: item.component
        });
      }
      // 嵌套路由不以 / 开头
      if (!i.path.match(/^\/\.*/)) {
        result.push({
          ...i,
          path: `${item.path}${i.path}`,
          component: item.component
        });
      }
    }

    // 其余路由
    if (item.path !== '/') {
      // 嵌套路由以 / 开头
      if (i.path.match(/^\/\.*/)) {
        result.push({
          ...i,
          path: `${item.path}${i.path}`,
          component: item.component
        });
      }
      // 嵌套路由不以 / 开头
      if (!i.path.match(/^\/\.*/)) {
        result.push({
          ...i,
          path: `${item.path}/${i.path}`,
          component: item.component
        });
      }
    }
  });

  return result;
}

export default renderRoutes;
