import React from 'react';
import { Avatar, Menu, Dropdown, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './app.less';
import { Link } from 'umi';
// import { createLogger } from 'redux-logger';
// import { message } from 'antd';
import { getCookie } from '@/utils/cookie';

const username = getCookie('username');
const pic = getCookie('pic');

function loginOut() {
  alert('已退出');
}

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/user">个人中心</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/setting">设置</Link>
    </Menu.Item>
    <Menu.Item>
      <Button type="primary" onClick={loginOut}>
        {' '}
        注销{' '}
      </Button>
    </Menu.Item>
  </Menu>
);
export const layout = {
  logout: () => {}, // do something
  rightRender: initInfo => (
    <div className={styles.avator}>
      <Dropdown overlay={menu} placement="bottomCenter">
        <div className={styles.username}>
          <Avatar shape="square" size={44} src={pic} />
          <div> {username} </div>
        </div>
      </Dropdown>
    </div>
  ), // return string || ReactNode;
};

// export const dva = {
//   config: {
//     onAction: createLogger(),
//     onError(e: Error) {
//       message.error(e.message, 3);
//     },
//   },
// };
