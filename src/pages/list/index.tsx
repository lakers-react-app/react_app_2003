import React from 'react';
import { Route } from 'umi';
import AddList from './AddList';
import ShopList from './ShopList';
export default function index() {
  return (
    <div>
      {/* 二级路由展示区域 */}
      <Route path="/list/add" component={AddList} />
      <Route path="/list/get" component={ShopList} />
    </div>
  );
}
