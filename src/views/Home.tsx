import React, { useEffect } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';

function Bar(): React.ReactElement {
  return <div className="bar">bar</div>;
}

function Foo(): React.ReactElement {
  return <div className="foo">foo</div>;
}

function Home(): React.ReactElement {
  useEffect(() => {
    console.log('useEffect');
  }, []);
  console.log('home');
  return (
    <>
      <div className="home">嵌套路由</div>
      <p>路由必须包裹在Switch里边，Redirect需要包裹Switch才会生效</p>
      <p>所有路由必须加上精确匹配，因为贪婪匹配的原因，部分路径不会跳转404</p>
      <p>子路由必须包含父路由，否则会无限循环404</p>
      <Link to="/home/bar">bar</Link>
      <Link to="/home/foo">foo</Link>
      <Switch>
        <Route path="/home" exact={true} />
        <Route path="/home/bar" exact={true} component={Bar} />
        <Route path="/home/foo" exact={true} component={Foo} />
        <Redirect from="*" to="/404" />
      </Switch>
    </>
  );
}

export default Home;
