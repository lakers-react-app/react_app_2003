import React from 'react';
import { QqOutlined, CrownOutlined } from '@ant-design/icons';
export default [
  {
    path: '/',
    component: '@/layouts',
    title: '布局首页',
    wrappers: ['@/wrappers/auth'],
  },
  {
    path: '/dashboard',
    component: '@/pages/dashboard',
    title: '可视化',
    name: 'DashBoard',
    icon: 'GithubOutlined',
    routes: [
      {
        path: '/dashboard/one',
        component: '@/pages/dashboard/One',
        name: '普通图表',
        icon: 'CodeSandboxOutlined',
      },
      {
        path: '/dashboard/two',
        component: '@/pages/dashboard/Two',
        name: '关系图',
        icon: 'GithubOutlined',
      },
    ],
  },
  {
    path: '/form',
    component: '@/pages/form',
    title: '表单',
    name: '表单页',
    icon: 'QqOutlined',
  },
  {
    path: '/list',
    component: '@/pages/list',
    title: '列表',
    name: '列表页',
    icon: 'CrownOutlined',
    routes: [
      {
        path: '/list/add',
        component: '@/pages/list/AddList',
        icon: 'CrownOutlined',
        name: '添加商品',
      },
      {
        path: '/list/get',
        component: '@/pages/list/ShopList',
        icon: 'CrownOutlined',
        name: '商品列表',
      },
    ],
  },
  {
    path: '/detail',
    component: '@/pages/detail',
    title: '详情',
    name: '详情页',
    icon: 'GitlabOutlined',
  },
  {
    path: '/setting',
    component: '@/pages/setting',
    title: '设置页',
    name: '设置页',
    icon: 'AntCloudOutlined',
  },
  {
    path: '/user',
    component: '@/pages/user',
    title: '个人中心',
    name: '个人中心',
    icon: 'DingdingOutlined',
  },
  {
    path: '/register',
    component: '@/pages/register',
    title: '注册',
  },
  {
    path: '/login',
    component: '@/pages/login',
    title: '登录',
  },
  {
    component: '@/pages/404',
  },
];
