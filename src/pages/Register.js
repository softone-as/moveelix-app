import React from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import axios from "axios";
import { useHistory } from "react-router";
import "./register.css";

const Register = () => {
  let history = useHistory();

  const onFinish = (value) => {
    console.log(value);
    axios
      .post("https://backendexample.sanbersy.com/api/register", {
        name: value.name,
        email: value.email,
        password: value.password,
      })
      .then(() => {
        message.success("Registered successfull, now just Login!");
        history.push("/login");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <section className="register">
      <div className="form-register">
        <h1>Get connected to Moveelix!</h1>
        <p>Please register your account.</p>
        <Form
          name="normal_register"
          className="register-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your Name",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Name"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
                type: "email",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="register-form-button"
            >
              Register Now
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="image-register">
        <img src="./assets/img/hero-image.jpg" alt="hero-img" />
      </div>
    </section>
  );
};

export default Register;
