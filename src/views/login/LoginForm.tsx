import React from 'react';
import { Props, InputChange } from '@/type/index';
import { FormData } from './Login';
import defaultAvatar from '@/static/login/default-logo.png';
import defaultSubmit from '@/static/login/default-login-submit.png';
import submitIcon from '@/static/login/login-submit.png';
import githubIcon from '@/static/login/github.png';
import giteeIcon from '@/static/login/gitee.png';
import baiduIcon from '@/static/login/baidu.png';
import openSourceChinaIcon from '@/static/login/open-source-china.png';
import tencentCloudIcon from '@/static/login/tencent-cloud.png';
import './login.scss';

type IProps = Props & {
  formData: FormData;
  testing: boolean;
  avatar?: string;
  usernameChange: InputChange;
  usernameBlur: InputChange;
  passwordChange: InputChange;
  submit: () => void;
  githubSubmit?: () => void;
  giteeSubmit?: () => void;
  baiduSubmit?: () => void;
}

function LoginForm(props: IProps): React.ReactElement {
  return (
    <div className="login-form">
      <div className="login-form-avatar">
        {
          !props.avatar &&
          <img
            className="avatar-img"
            src={defaultAvatar}
            alt="avatar"
          />
        }
        {
          props.avatar &&
          <img
            className="avatar-img"
            src={props.avatar}
            alt="avatar"
          />
        }
      </div>
      <div className="login-form-area">
        <div className="form-area-group">
          <input
            className="group-input"
            type="text"
            value={props.formData.username}
            onChange={props.usernameChange}
            onBlur={props.usernameBlur}
            placeholder="输入用户名"
          />
        </div>
        <div className="form-area-group">
          <input
            className="group-input"
            type="text"
            value={props.formData.password}
            onChange={props.passwordChange}
            placeholder="输入密码"
          />
          <div className="login-submit">
            {
              !props.testing &&
              <img
                className="login-submit-img"
                src={defaultSubmit}
                alt=""
              />
            }
            {
              props.testing &&
              <img
                className="login-submit-img submit-img"
                src={submitIcon}
                onClick={props.submit}
                alt=""
              />
            }
          </div>
        </div>
      </div>
      <ul className="login-form-auth">
        <li className="form-auth-item">
          <img
            className="auth-item-img"
            src={githubIcon}
            onClick={props.githubSubmit}
            alt="github登录"
          />
        </li>
        <li className="form-auth-item">
          <img
            className="auth-item-img"
            src={giteeIcon}
            onClick={props.giteeSubmit}
            alt="gitee登录"
          />
        </li>
        <li className="form-auth-item">
          <img
            className="auth-item-img"
            src={baiduIcon}
            onClick={props.baiduSubmit}
            alt="百度登录"
          />
        </li>
        <li className="form-auth-item">
          <img
            className="auth-item-img"
            src={openSourceChinaIcon}
            alt="开源中国登录"
          />
        </li>
        <li className="form-auth-item">
          <img
            className="auth-item-img"
            src={tencentCloudIcon}
            alt="腾讯云登录"
          />
        </li>
      </ul>
    </div>
  );
}

export default LoginForm;
