import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from './LoginForm';
import { InputChange, Response } from '@/type/index';
import { getUserAvatarSrc, userLogin } from '@api/login';
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

  // 用户名失去焦点，获取头像
  const [avatar, setAvatar] = useState('');
  const usernameBlur: InputChange = () => {
    getUserAvatarSrc({
      username: formData.username
    }).then((res: Response) => {
      if (res.code === 0) {
        setAvatar(res.data as string);
      }
      // 用户不存在
      if (res.code === -4) {
        setAvatar('');
      }
    }).catch(err => {
      console.log(err);
    });
  };

  // 登录
  const history = useHistory();
  const submit = (): void => {
    userLogin({
      username: formData.username,
      password: formData.password
    }).then((res: Response) => {
      if (res.code === 0) {
        history.push('/');
      }
      // 在其他设备已登录
      if (res.code === -3) {
        alert(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
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
        avatar={avatar}
        formData={formData}
        testing={testing}
        usernameChange={usernameChange}
        usernameBlur={usernameBlur}
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
