import services from '@/services';
import { DashBoardModelType } from '@/interface/dashboard';
const DashBoardModel: DashBoardModelType = {
  namespace: 'dashboard',
  state: {
    dataSource: {},
  },
  effects: {
    *getDataSource({ payload }, { call, put }) {
      const result = yield call(services.g6Req);
      yield put({
        type: 'GET_DATA_SOURCE',
        payload: result,
      });
    },
  },
  reducers: {
    GET_DATA_SOURCE(state, action) {
      //! 切记： 不要动state
      const newState = { ...state };
      newState.dataSource = action.payload;
      return { ...newState };
    },
  },
};

export default DashBoardModel;
