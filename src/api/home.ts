import axios from '@utils/axios';

/**
 * @description get
 */
type LoginParam = { username: string; password: string };

export const Login = ({ username, password }: LoginParam) => {
  const params = { username, password };
  return axios.request({
    url: '/api',
    method: 'get',
    params
  });
};

/**
 * @description post
 */
export const getList = ({ page, size }: { page: number; size: number }) => {
  const data = { page, size };
  return axios.request({
    url: '/api',
    method: 'post',
    data
  });
};
