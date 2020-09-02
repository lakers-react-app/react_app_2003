import services from '@/services';
import { DashBoardModelType } from '@/interface/dashboard';
import G6 from '@antv/g6';

const DashBoardModel: DashBoardModelType = {
  namespace: 'dashboard',
  state: {
    dataSource: {},
  },
  effects: {
    *getDataSource({ payload }, { call, put }) {
      const result = yield call(services.g6Req);
      const width = document.getElementById('container').scrollWidth;
      const height = document.getElementById('container').scrollHeight || 500;
      const graph = new G6.TreeGraph({
        container: 'container',
        width,
        height,
        linkCenter: true,
        modes: {
          default: [
            {
              type: 'collapse-expand',
              onChange: function onChange(item, collapsed) {
                const data = item.get('model').data;
                data.collapsed = collapsed;
                return true;
              },
            },
            'drag-canvas',
            'zoom-canvas',
          ],
        },
        defaultNode: {
          size: 26,
          style: {
            fill: '#C6E5FF',
            stroke: '#5B8FF9',
          },
        },
        defaultEdge: {
          style: {
            stroke: '#A3B1BF',
          },
        },
        layout: {
          type: 'dendrogram',
          direction: 'LR',
          nodeSep: 20,
          rankSep: 100,
          radial: true,
        },
      });

      graph.node(function(node) {
        return {
          label: node.id,
        };
      });

      graph.data(result);
      graph.render();
      graph.fitView();
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
