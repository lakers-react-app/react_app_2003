import { defineConfig } from 'umi';
import routes from './src/config/routes';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  layout: {
    name: 'Lakers',
    locale: true,
    logo: 'https://ftp.bmp.ovh/imgs/2019/11/8dea885bcee7fb02.png',
  },
  request: {
    dataField: '',
  },
  dva: {
    immer: true,
    hmr: false,
  },
});
