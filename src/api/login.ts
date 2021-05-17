import axios from '@utils/axios';

/**
 * @description 通过用户名调接口获取头像
 * @param { String } username 用户名
*/
export const getUserAvatarSrc = ({ username }: { username: string }) => {
  const data = { userName: username };

  return axios.request({
    url: '/user/getUserAvatarSrc',
    method: 'post',
    data
  });
};

/**
 * @description 通过用户名调接口获取头像
 * @param { String } username 用户名
*/
export const userLogin = ({ username, password }: { username: string, password: string }) => {
  const data = { userName: username, password };

  return axios.request({
    url: '/user/login',
    method: 'post',
    data
  });
};
