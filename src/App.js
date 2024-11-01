import React from "react";
import { Button, Form, Input } from 'antd';
import { IdcardTwoTone } from '@ant-design/icons';
import './App.css';

const App = () => {
  const onFinish = (values) => console.log('Form values:', values);

  return (
    <div className="App">
      <Form name="login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
        <div className="login">
          <div className="logo">
            <IdcardTwoTone className="icon" />
            <p>LOGIN FORM</p>
          </div>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">Sign in</Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default App;
