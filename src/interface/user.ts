import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
export interface IndexModelState {
  loginData: Object;
}
export interface IndexModelType {
  namespace: 'index';
  state: IndexModelState;
  effects: {
    query: Effect;
    getLogin: Effect;
  };
  reducers: {
    login: Reducer<IndexModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}
