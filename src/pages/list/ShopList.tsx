import React, { useEffect, useState } from 'react';
import { Table, Image, Button } from 'antd';
import { connect } from 'umi';
import { getCookie } from '@/utils/cookie';
import styles from './index.less';
import AdvancedSearchForm from './SearchList';

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York Park',
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 40,
//     address: 'London Park',
//   },
// ];

const ShopList = ({ list: { data, status }, dispatch, history }) => {
  function remove(shopId) {
    dispatch({
      type: 'list/removeList',
      payload: {
        shopId,
      },
    });
    if (status == 1) {
      history.go(0);
    }
  }

  //! 表头
  const columns = [
    {
      title: '商品ID',
      width: 200,
      dataIndex: 'shopId',
      key: 'shopId',
      fixed: 'left',
    },
    {
      title: '商品logo',
      width: 100,
      dataIndex: 'imgUrl',
      key: 'imgUrl',
      fixed: 'left',
      render: pic => {
        return <Image width={80} src={pic && pic} />;
      },
    },
    { title: '商品标题', dataIndex: 'd_title', key: '1' },
    { title: '商品价格', dataIndex: 'price', key: '2' },
    { title: '商品销量', dataIndex: 'sales', key: '3' },
    { title: '商品评论数', dataIndex: 'comment', key: '4' },
    { title: '商品库存量', dataIndex: 'num', key: '5' },
    {
      title: 'Action',
      key: 'shopId',
      fixed: 'right',
      width: 200,
      dataIndex: 'shopId',
      render: shopId => (
        <div>
          <Button type="primary"> 修改 </Button>
          <Button
            type="primary"
            danger
            onClick={() => {
              remove(shopId);
            }}
          >
            {' '}
            删除{' '}
          </Button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    dispatch({
      type: 'list/getList',
      payload: {
        token: getCookie('token'),
      },
    });
  }, []);
  return (
    <div className={styles.shop_list}>
      <AdvancedSearchForm data={data} />
      <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
    </div>
  );
};

export default connect(({ list }) => ({ list }))(ShopList);
