/*
 * @Descripttion: 
 * @version: 
 * @Author: Qyc
 * @Date: 2021-05-12 17:08:23
 * @LastEditors: Qyc
 * @LastEditTime: 2021-05-14 11:04:02
 */
// import React from 'react';

// function Home(): React.ReactElement {
//   return (
//     <div className="home">home</div>
//   );
// }


// export default Home;

import React, { useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { useDispatch, useSelector, useStore } from 'react-redux';

function Bar(): React.ReactElement {
  console.log('bar组件');
  return (
    <>
      <div className="bar">bar</div>
      <Link to="/foo">foo</Link>
    </>
  );
}

function Foo(): React.ReactElement {
  console.log('foo组件');
  return (
    <>
      <div className="foo">foo</div>
    </>
  );
}

function Home(): React.ReactElement {
  console.log('父组件');
  return (
    <>
      <div className="home">home</div>
      <Link to="/bar">bar</Link>
      <Route path="/bar" component={Bar} />
      <Route path="/foo" component={Foo} />
    </>
  );
}


export default Home;
