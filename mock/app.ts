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
  'GET /api/g6': {
    id: 'Modeling Methods',
    children: [
      {
        id: 'Classification',
        children: [
          {
            id: 'Logistic regression',
          },
          {
            id: 'Linear discriminant analysis',
          },
          {
            id: 'Rules',
          },
          {
            id: 'Decision trees',
          },
          {
            id: 'Naive Bayes',
          },
          {
            id: 'K nearest neighbor',
          },
          {
            id: 'Probabilistic neural network',
          },
          {
            id: 'Support vector machine',
          },
        ],
      },
      {
        id: 'Consensus',
        children: [
          {
            id: 'Models diversity',
            children: [
              {
                id: 'Different initializations',
              },
              {
                id: 'Different parameter choices',
              },
              {
                id: 'Different architectures',
              },
              {
                id: 'Different modeling methods',
              },
              {
                id: 'Different training sets',
              },
              {
                id: 'Different feature sets',
              },
            ],
          },
          {
            id: 'Methods',
            children: [
              {
                id: 'Classifier selection',
              },
              {
                id: 'Classifier fusion',
              },
            ],
          },
          {
            id: 'Common',
            children: [
              {
                id: 'Bagging',
              },
              {
                id: 'Boosting',
              },
              {
                id: 'AdaBoost',
              },
            ],
          },
        ],
      },
      {
        id: 'Regression',
        children: [
          {
            id: 'Multiple linear regression',
          },
          {
            id: 'Partial least squares',
          },
          {
            id: 'Multi-layer feedforward neural network',
          },
          {
            id: 'General regression neural network',
          },
          {
            id: 'Support vector regression',
          },
        ],
      },
    ],
  },
};
