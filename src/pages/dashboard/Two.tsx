import React, { useEffect, useRef } from 'react';
import { connect } from 'umi';
import G6 from '@antv/g6';
import ReactDOM from 'react-dom';
const Two = ({ dashboard, dispatch, location }) => {
  const ref = useRef(null);
  let graph = null;
  useEffect(() => {
    dispatch({
      type: 'dashboard/getDataSource',
    });
  }, []);

  useEffect(() => {
    if (!graph) {
      console.log('dashboard.dataSource.id', dashboard.dataSource.id);
      if (!dashboard.dataSource.id) return;

      graph = new G6.TreeGraph({
        container: ReactDOM.findDOMNode(ref.current),
        width: 1000,
        height: 500,
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
      graph.data(dashboard.dataSource);
      graph.render();
      graph.fitView();
    }
  });

  return (
    <div>
      <div ref={ref}></div>
    </div>
  );
};

export default connect(({ dashboard }) => ({ dashboard }))(Two);
