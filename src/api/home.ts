import axios from '@utils/axios';

/**
 * @description get
*/
export const Login = ({ username, password }: { username: string, password: string }) => {
  const params = { username, password };
  return axios.request({
    url: '/api',
    methods: 'get',
    params
  });
};

/**
 * @description post
*/
export const getList = ({ page, size }: { page: number, size: number }) => {
  const data = { page, size };
  return axios.request({
    url: '/api',
    methods: 'post',
    data
  });
};
