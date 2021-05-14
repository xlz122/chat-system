import React from 'react';
import './login.scss';
import { Props } from '@/type/index';
import defaultAvatar from '@/static/login/default-logo.png';
import defaultSubmit from '@/static/login/login-submit.png';

type IProps = Props & {
  avatar?: string;
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
              alt="avatar" />
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
          <input className="group-input" type="text" placeholder="输入用户名" />
        </div>
        <div className="form-area-group">
          <input className="group-input" type="text" placeholder="输入密码" />
          <div className="login-submit">
            <img className="login-submit-img" src={defaultSubmit} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
