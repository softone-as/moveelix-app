import React from "react";
import { Form, Input, Button, message } from "antd";
import { LockOutlined } from "@ant-design/icons";
import axios from "axios";
import { useHistory } from "react-router";
import "./register.css";
import Cookies from "js-cookie";

const ChangePassword = () => {
  let history = useHistory();

  const onFinish = (value) => {
    console.log(value);
    axios
      .post(
        "https://backendexample.sanbersy.com/api/change-password",
        {
          current_password: value.current_password,
          new_password: value.new_password,
          new_confirm_password: value.new_confirm_password,
        },
        {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        }
      )
      .then(() => {
        message.success("Change Password successfull !");
        history.push("/");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <section className="register">
      <div className="form-register">
        <h1>Change Password</h1>
        <p>Please change your password wisely.</p>
        <Form
          name="normal_password"
          className="register-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="current_password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Current Password"
            />
          </Form.Item>

          <Form.Item
            name="new_password"
            rules={[
              { required: true, message: "Please input your New Password!" },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="New Password"
            />
          </Form.Item>

          <Form.Item
            name="new_confirm_password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Confirmation Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="register-form-button"
            >
              Ganti Password
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default ChangePassword;
