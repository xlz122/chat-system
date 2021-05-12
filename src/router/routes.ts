export type Routes = {
  path?: string;
  meta?: {
    exact?: boolean;
  };
  component?: string;
  children?: {
    path?: string;
    title?: string;
    icon?: string;
    component?: string;
  }[],
  [index: string]: any;
}

const routes: Routes[] = [
  {
    path: '/',
    meta: {
      exact: true
    },
    component: 'views/Home'
  },
  {
    path: '/login',
    component: 'views/login/Login'
  },
  {
    path: '/404',
    component: 'views/not-found/NotFound'
  }
  // {
  //   path: '/base',
  //   title: '数据统计',
  //   icon: '',
  //   children: [
  //     {
  //       path: '/base',
  //       title: '基础数据统计',
  //       icon: '',
  //       component: 'views/base/index'
  //     }
  //   ]
  // }
];

export {
  routes
};
