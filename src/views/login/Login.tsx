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
