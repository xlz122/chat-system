import React from 'react';
import { useHistory } from 'react-router-dom';
import './not-found.scss';

function NotFound(): React.ReactElement {
  const history = useHistory();

  setTimeout(() => {
    history.push('/');
  }, 3000);
  return <div className="not-found">未找到该页面，将在3秒后返回首页...</div>;
}

export default NotFound;
