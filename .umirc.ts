import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/layouts' },
    { path: '/login', component: '@/pages/login' },
    { path: '/user', component: '@/pages/user' },
    { exact: true, path: '/list/:id', component: '@/pages/list/[id]' },
    { exact: true, path: '/login/item', component: '@/pages/login/Item' },
    { component: '@/pages/404' },
  ],
});
