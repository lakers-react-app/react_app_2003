import React, { FC } from 'react';
import styles from './index.less';
import { Form, Input, Button, Checkbox } from 'antd';
import { IndexModelState, ConnectProps, Loading, connect } from 'umi';
import { setCookie } from '@/utils/cookie';

interface PageProps extends ConnectProps {
  index: IndexModelState;
  loading: boolean;
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const Index: FC<PageProps> = ({ index, dispatch, history: { push } }) => {
  // console.log('props',props )
  const onFinish = values => {
    // console.log('Success:', values);
    //! 走起来redux流程
    const { username, password } = values;
    dispatch({
      type: 'index/getLogin',
      payload: { username, password },
    });

    if (index.status == 1) {
      setCookie('userId', index.userId, 7);
      setCookie('token', index.token, 7);
      setCookie('username', username, 7);
      push('/');
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={styles.login}>
      <div className={styles.content}>
        <Form
          style={{
            width: '80%',
            margin: '0 auto',
            marginLeft: '40px',
          }}
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default connect(
  ({ index, loading }: { index: IndexModelState; loading: Loading }) => ({
    index,
    loading: loading.models.index,
  }),
)(Index);
