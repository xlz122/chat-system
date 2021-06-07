import Home from '@views/Home';
import CommonBody from '@views/commonBody/index';

export type Routes = {
  path?: string;
  meta?: {
    exact?: boolean;
  };
  component: string | React.ComponentType;
  children?: Children[];
  [index: string]: any;
};

export type Children = {
  path?: string;
  meta?: {
    exact?: boolean;
  };
};

const routes: Routes[] = [
  // 嵌套路由的component需为组件，而不是文件路径
  {
    path: '/home',
    meta: {
      exact: true
    },
    component: Home,
    children: [
      {
        path: '/home/bar',
        meta: {
          exact: true
        }
      },
      {
        path: '/home/foo',
        meta: {
          exact: true
        }
      }
    ]
  },
  {
    path: '/login',
    meta: {
      exact: true
    },
    component: 'views/login/Login'
  },
  {
    path: '/404',
    meta: {
      exact: true
    },
    component: 'views/not-found/NotFound'
  },
  {
    path: '/commonBody',
    component: CommonBody,
    children: [
      {
        path: '/commonBody/message',
        meta: {
          exact: true
        }
      },
      {
        path: '/commonBody/more',
        meta: {
          exact: true
        }
      },
      {
        path: '/commonBody/friendList',
        meta: {
          exact: true
        }
      }
    ]
  }
];

export { routes };
