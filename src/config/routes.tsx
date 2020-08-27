import React from 'react';
import {QqOutlined,CrownOutlined} from '@ant-design/icons';
export default [
  { path: '/', 
    component: '@/layouts', 
    title: '布局首页',
    wrappers: ['@/wrappers/auth']
  },
  {
    path: '/dashboard',
    component: '@/pages/dashboard',
    title: '可视化',
    name: 'DashBoard',
    // icon: <CrownOutlined />,
  },
  {
    path: '/form',
    component: '@/pages/form',
    title: '表单',
    name: '表单页',
    // icon: <CrownOutlined />,
  },
  {
    path: '/list',
    component: '@/pages/list',
    title: '列表',
    name: '列表页',
    // icon: <CrownOutlined />,
  },
  {
    path: '/detail',
    component: '@/pages/detail',
    title: '详情',
    name: '详情页',
    // icon: <CrownOutlined />,
  },
  {
    path: '/setting',
    component: '@/pages/setting',
    title: '设置页',
    name: '设置页',
    // icon: <CrownOutlined />,
  },
  {
    path: '/user',
    component: '@/pages/user',
    title: '个人中心',
    name: '个人中心',
    // icon: <CrownOutlined />,
  },
  {
    path: '/register',
    component: '@/pages/register',
    title: '注册',
    // icon: <CrownOutlined />,
  },
  {
    path: '/login',
    component: '@/pages/login',
    title: '登录',
  },
  {
      component: '@/pages/404'
  }
];
