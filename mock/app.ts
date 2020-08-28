import { RequestConfig } from 'umi';
export default {
  'GET /api/user': {
    status: 1,
    root: 'admin',
    username: 'lakers',
  },
  'POST /api/user/login': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({
      status: 1,
      msg: '登录成功',
    });
  },
  'GET /api/checkToken': {
    status: 1,
    msg: 'token校验成功',
  },
};
