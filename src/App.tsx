import React from 'react';
import { Switch, Route } from 'react-router-dom';
import renderRoutes from '@router/renderRoutes';
// 路由数据
import { routes } from '@router/routes';
// 404页面
import NotFound from '@views/not-found/NotFound';

function App(): React.ReactElement {
  return (
    <Switch>
      {renderRoutes(routes)}
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
