//! 提前将数据请求写好
import { request } from 'umi';

export default {
  //! token 校验
  checkToken() {
    return request('/api/checkToken', {
      params: {
        authToken: 'fdaskljflasjdl;',
      },
    });
  },
  login(data) {
    return request('http://59.110.226.77:3000/api/user/login', {
      method: 'POST',
      data,
    });
  },
};
