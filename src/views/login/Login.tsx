/*
 * @Descripttion: 
 * @version: 
 * @Author: Qyc
 * @Date: 2021-05-12 17:08:23
 * @LastEditors: Qyc
 * @LastEditTime: 2021-05-14 11:21:33
 */
import React from 'react';
import LoginForm from './LoginForm';
import './login.scss';

function Login(): React.ReactElement {
  return (
    <div className="login">
      <LoginForm />
    </div>
  );
}

export default Login;
