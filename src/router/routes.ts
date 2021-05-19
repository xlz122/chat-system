export type Routes = {
  path?: string;
  meta?: {
    exact?: boolean;
  };
  component?: string;
  children?: Children[],
  [index: string]: any;
}

export type Children = {
  path?: string;
  meta?: {
    exact?: boolean;
  };
}

const routes: Routes[] = [
  {
    path: '/',
    meta: {
      exact: true
    },
    component: 'views/Home',
    children: [
      {
        path: '/bar'
      },
      {
        path: '/foo'
      }
    ]
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
    component:'views/commonBody/index',
    children: [
      {
        path: '/message',
        meta: {
          exact: true
        }
      },
      {
        path: '/more',
        meta: {
          exact: true
        }
      },
      {
        path: '/friendList',
        meta: {
          exact: true
        }
      }
    ]
  }
  // {
  //   path: '/base',
  //   children: [
  //     {
  //       path: '/base',
  //       component: 'views/base/index'
  //     }
  //   ]
  // }
];

export {
  routes
};
