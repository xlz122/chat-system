import Home from '@views/Home';
import CommonBody from '@views/commonBody/index';

export type Routes = {
  path?: string;
  meta?: {
    exact?: boolean;
  };
  component: string | React.ComponentType;
  [index: string]: any;
};

const routes: Routes[] = [
  // 嵌套路由的component需为组件，而不是文件路径
  {
    path: '/home',
    meta: {
      exact: true
    },
    component: Home
  },
  {
    path: '/login',
    component: 'views/login/Login'
  },
  {
    path: '/404',
    component: 'views/not-found/NotFound'
  },
  {
    path: '/commonBody',
    component: CommonBody
  }
];

export { routes };
