import React from 'react';
import { connect } from 'umi';
import { Form, Input, Upload, message, Button, InputNumber } from 'antd';
import styles from './index.less';
import { UploadOutlined } from '@ant-design/icons';
import { getCookie } from '@/utils/cookie';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const key = 'updatable';

const AddList = ({ list, dispatch, history: { push } }) => {
  const onFinish = values => {
    console.log(values);

    const imgRul = values.imgRul.file.response.image_path;
    values.imgRul = 'https://elm.cangdu.org/img/' + imgRul;
    const token = getCookie('token');
    dispatch({
      type: 'list/addList',
      payload: {
        ...values,
        token,
      },
    });

    if (list.status == 1) {
      message.success({ content: '添加成功', key, duration: 2 });
      setTimeout(() => {
        push('/list/get');
      }, 3000);
    } else {
      message.error('商品已存在，请更换');
    }
  };
  const props = {
    name: 'file',
    action: 'https://elm.cangdu.org/v1/addimg/shop',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div className={styles.add_list}>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={['shopId']}
          label="商品ID"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['d_title']}
          label="商品名称"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={['imgRul']} label="商品图片">
          <Upload {...props}>
            <Button>
              <UploadOutlined /> Click to Upload
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name={['price']}
          label="商品价格"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['oringinal']}
          label="商品原价"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['sales']}
          label="商品销量"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['comment']}
          label="商品评论数"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['num']}
          label="商品数量"
          rules={[{ required: true, type: 'number', min: 1, max: 99 }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            添加
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default connect(({ list }) => ({ list }))(AddList);
