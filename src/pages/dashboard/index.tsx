import React from 'react';
import { Route } from 'umi';
import One from './One';
import Two from './Two';
export default function index() {
  return (
    <div>
      <Route path="/dashboard/one" component={One} />
      <Route path="/dashboard/two" component={Two} />
    </div>
  );
}
