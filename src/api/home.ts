import axios from '@utils/axios';

/**
 * @description 登录
*/
export const Login = () => {
  return axios.request({
    url: '/api',
    methods: 'get'
  });
};

/**
 * @description 获取列表数据
*/
export const getList = () => {
  return axios.request({
    url: '/api',
    methods: 'get'
  });
};
