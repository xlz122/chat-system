/*
 * @Descripttion:
 * @version:
 * @Author: Qyc
 * @Date: 2021-05-12 17:08:23
 * @LastEditors: Qyc
 * @LastEditTime: 2021-05-14 11:04:02
 */
import React from 'react';
import { Route, Link } from 'react-router-dom';

function Bar(): React.ReactElement {
  return <div className="bar">bar</div>;
}

function Foo(): React.ReactElement {
  return <div className="foo">foo</div>;
}

function Home(): React.ReactElement {
  console.log('父组件');
  return (
    <>
      <div className="home">测试父组件被重复加载问题</div>
      <Link to="/bar">bar</Link>
      <Link to="/foo">foo</Link>
      <Route path="/bar" component={Bar} />
      <Route path="/foo" component={Foo} />
    </>
  );
}

export default Home;
