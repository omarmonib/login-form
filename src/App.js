import React from "react";
import { Button, Form, Input, Flex } from 'antd';
import { IdcardTwoTone } from '@ant-design/icons';
import Icon from "@ant-design/icons/lib/components/Icon";


function App() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className="App">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <div className="login">
          <Flex className="logo">
            <Icon className="icon" component={IdcardTwoTone} />
            <p>OMAR MONIB</p>
          </Flex>
          <Form.Item
            name="username"
            rules={[
              {
              required: true,
              message: 'Please input your Username!',
              },
            ]}
            >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          > 
            <Input.Password
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Sign in
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

export default App;
