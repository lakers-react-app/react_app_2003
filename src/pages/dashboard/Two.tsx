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
  return (
    <div>
      <div id="container"></div>
    </div>
  );
};

export default connect(({ dashboard }) => ({ dashboard }))(Two);
