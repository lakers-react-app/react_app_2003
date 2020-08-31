import { getCookie } from '@/utils/cookie';
//! 提前将数据请求写好
import { request } from 'umi';
const baseURL = 'http://59.110.226.77:3000';
export default {
  //! token 校验
  checkToken() {
    return request('/api/checkToken', {
      params: {
        authToken: 'fdaskljflasjdl;',
      },
    });
  },
  //! 登录
  login(data) {
    return request(`${baseURL}/api/user/login`, {
      method: 'POST',
      data,
    });
  },
  //! 列表添加
  addListReq(data) {
    return request(`${baseURL}/api/shopcar/add`, {
      method: 'POST',
      data,
    });
  },
  //! 列表查询
  getListReq(data) {
    return request(`${baseURL}/api/shopcar/getCar`, {
      params: data,
    });
  },
  //! 列表删除
  removeListReq({ shopId }) {
    return request(`${baseURL}/api/shopcar/del`, {
      method: 'POST',
      data: {
        token: getCookie('token'),
        shopId,
      },
    });
  },
  //! g6的辐射树数据
  g6Req() {
    return request('/api/g6');
  },
};
