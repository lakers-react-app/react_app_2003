import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
export interface IndexModelState {
  lists: Object;
}
export interface ListModelType {
  namespace: 'list';
  state: IndexModelState;
  effects: {
    addList: Effect;
    getList: Effect;
    removeList: Effect;
    searchList: Effect;
  };
  reducers: {
    ADD_LIST: Reducer<IndexModelState>;
    GET_LIST: Reducer<IndexModelState>;
    REMOVE_LIST: Reducer<IndexModelState>;
    SEARCH_LIST: Reducer<IndexModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}
