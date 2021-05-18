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

/**
 * @description 获取第三方登录授权地址
 * @param { String } platform 平台名称
*/
export const getAuthorize = ({ platform }: { platform: string }) => {
  const params = { platform };

  return axios.request({
    url: '/user/getAuthorize',
    method: 'get',
    params
  });
};

/**
 * @description 第三方登录
 * @param { String } code 授权码
 * @param { String } platform 平台名称
 * @param { String } state 状态码
*/

export type AuthorizeLogin = {
  code: string;
  platform: string;
  state: string;
}

export const authorizeLogin = ({ code, platform, state }: AuthorizeLogin) => {
  const data = { code, platform, state };

  return axios.request({
    url: '/user/authorizeLogin',
    method: 'post',
    data
  });
};
