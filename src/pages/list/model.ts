import services from '@/services';
import { Subscription } from './../../.umi/plugin-dva/connect';
import { ListModelType } from '@/interface/list';
const ListModel: ListModelType = {
  namespace: 'list',
  state: {},
  effects: {
    *addList({ payload }, { call, put }) {
      console.log('payload', payload);
      const result = yield call(services.addListReq, payload);
      yield put({
        type: 'ADD_LIST',
        payload: result,
      });
    },
    *getList({ payload }, { call, put }) {
      const result = yield call(services.getListReq, payload);
      yield put({
        type: 'GET_LIST',
        payload: result,
      });
    },
    *removeList({ payload }, { call, put }) {
      const result = yield call(services.removeListReq, payload);
      yield put({
        type: 'REMOVE_LIST',
        payload: { result, shopId: payload.shopId },
      });
    },
    *searchList({ payload }, { call, put }) {
      yield put({
        type: 'SEARCH_LIST',
        payload,
      });
    },
  },
  reducers: {
    ADD_LIST(state, action) {
      return { ...state, ...action.payload };
    },
    GET_LIST(state, action) {
      return { ...state, ...action.payload };
    },
    REMOVE_LIST(state, action) {
      // console.log('action',action)
      return { ...state, ...action.payload };
    },
    SEARCH_LIST(state, action) {
      return { ...state, ...action.payload };
    },
  },
  subscriptions: {
    setup() {},
  },
};

export default ListModel;
