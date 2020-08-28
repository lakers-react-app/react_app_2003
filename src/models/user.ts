import services from '@/services';
import { IndexModelType } from '@/interface/user';
const IndexModel: IndexModelType = {
  namespace: 'index', //! 因为你做了数据分块
  state: {}, // 定义状态
  effects: {
    // actions  redux-thunk   redux-saga
    *getLogin({ payload }, { call, put }) {
      const result = yield call(services.login, payload);
      yield put({
        type: 'login',
        payload: result,
      });
    },
  },
  reducers: {
    login(state, action) {
      return { ...state, ...action.payload };
    },
  },
};

export default IndexModel;
