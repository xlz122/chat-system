import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from './LoginForm';
import { InputChange, Response } from '@/type/index';
import { getUserAvatarSrc, userLogin, getAuthorize } from '@api/login';
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
        const src = res.data as unknown;
        setAvatar(src as string);
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
      // 用户不存在
      if (res.code === -4) {
        alert(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
  };

  // github登录
  const githubSubmit = (): void => {
    authorize('github');
  };

  // gitee登录
  const giteeSubmit = (): void => {
    authorize('gitee');
  };

  // 百度登录
  const baiduSubmit = (): void => {
    authorize('baidu');
  };

  // 开源中国登录
  const oschinaSubmit = (): void => {
    authorize('oschina');
  };

  // 腾讯云登录
  const codingSubmit = (): void => {
    authorize('coding');
  };

  // 授权方法
  const authorize = (type: string): void => {
    getAuthorize({
      platform: type
    }).then((res: Response) => {
      if (res.code === 0) {
        window.open(
          (res.data as any).authorizeUrl,
          '_blank',
          'top=300,left=300,width=800,height=500,menubar=no,toolbar=no,status=no,scrollbars=yes'
        );
      }
      if (res.code !== 0) {
        alert(res.msg);
      }
    }).catch(err => {
      console.log(err);
    });
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
        oschinaSubmit={oschinaSubmit}
        codingSubmit={codingSubmit}
      />
    </div>
  );
}

export default Login;
