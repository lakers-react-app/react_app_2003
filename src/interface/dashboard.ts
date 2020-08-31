import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
export interface IndexModelState {
  dataSource: Object;
}
export interface DashBoardModelType {
  namespace: 'dashboard';
  state: IndexModelState;
  effects: {
    getDataSource: Effect;
  };
  reducers: {
    GET_DATA_SOURCE: ImmerReducer<IndexModelState>;
  };
}
