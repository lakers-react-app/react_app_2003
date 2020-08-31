import React, { useState } from 'react';
import { Form, Row, Col, Input, Button, message } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { connect } from 'umi';

const AdvancedSearchForm = ({ data, dispatch }) => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const getFields = () => {
    return (
      <div style={{ display: 'flex', padding: '15px' }}>
        <Col span={8}>
          <Form.Item
            name="shopId"
            label="商品ID"
            rules={[
              {
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="d_title"
            label="商品标题"
            rules={[
              {
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="price"
            label="商品价格"
            rules={[
              {
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>
      </div>
    );
  };

  const onFinish = values => {
    console.log('Received values of form: ', values);
    const { shopId, d_title, price } = values;
    if (!shopId && !d_title && !price) {
      message.info('您还没有输入查找条件，请输入', 2);
      return;
    }

    const arr = Object.keys(values).filter(item => values[item]);
    // console.log('arr',arr)

    let newList = [];
    arr.map(item => {
      newList.push(...data.filter(ele => ele[item] == values[item]));
    });
    console.log('newList', newList);
    dispatch({
      type: 'list/searchList',
      payload: { data: newList },
    });
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
      <Row gutter={24}>{getFields()}</Row>
      <Row>
        <Col
          span={24}
          style={{
            textAlign: 'right',
          }}
        >
          <Button type="primary" htmlType="submit">
            查询
          </Button>
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => {
              form.resetFields();
            }}
          >
            清空
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default connect(({ list }) => ({ list }))(AdvancedSearchForm);
