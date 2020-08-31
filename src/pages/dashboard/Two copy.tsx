import React, { FC, useEffect } from 'react';
import G6 from '@antv/g6';
import { connect, useRequest } from 'umi';
import services from '@/services';

const Two: FC = ({ dispatch, dashboard }) => {
  useEffect(() => {
    console.log('dataSource', dashboard.dataSource);
    if (!dashboard.dataSource.id) {
      dispatch({
        type: 'dashboard/getDataSource',
      });
      const width = document.getElementById('g6').scrollWidth;
      const height = document.getElementById('g6').scrollHeight || 500;
      const graph = new G6.TreeGraph({
        container: 'g6',
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
      graph.data(dashboard.dataSource);

      graph.render();
      graph.fitView();
    }
  });
  return (
    <div>
      <h3> 通过g6来打造关系图 </h3>
      <div id="g6"></div>
    </div>
  );
};

export default connect(({ dashboard }) => ({ dashboard }))(Two);
