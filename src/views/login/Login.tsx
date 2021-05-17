/*
 * @Descripttion: 
 * @version: 
 * @Author: Qyc
 * @Date: 2021-05-12 17:08:23
 * @LastEditors: Qyc
 * @LastEditTime: 2021-05-17 15:13:06
 */

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from './LoginForm';
import { InputChange } from '@/type/index';
import './login.scss';

export type FormData = {
  username: string;
  password: string;
}

function Login(): React.ReactElement {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: ''
  });

  const [testing, setTesting] = useState(false);

  // 用户名
  const usernameChange: InputChange = (e): boolean | undefined => {
    setFormData({ ...formData, username: e.target.value });
    setTesting(false);

    if (!e.target.value || !formData.password) {
      return false;
    }

    setTesting(true);
  };

  // 密码
  const passwordChange: InputChange = (e): boolean | undefined => {
    setFormData({ ...formData, password: e.target.value });
    setTesting(false);

    if (!e.target.value || !formData.username) {
      return false;
    }

    setTesting(true);
  };

  // 登录
  const history = useHistory();
  const submit = (): void => {
    console.log(formData);
    history.push('/');
  };

  // github登录
  const githubSubmit = (): void => {
    console.log('github登录');
  };

  // gitee登录
  const giteeSubmit = (): void => {
    console.log('gitee登录');
  };

  // 百度登录
  const baiduSubmit = (): void => {
    console.log('百度登录');
  };

  return (
    <div className="login">
      <LoginForm
        formData={formData}
        testing={testing}
        usernameChange={usernameChange}
        passwordChange={passwordChange}
        submit={submit}
        githubSubmit={githubSubmit}
        giteeSubmit={giteeSubmit}
        baiduSubmit={baiduSubmit}
      />
    </div>
  );
}

export default Login;
