import React, { useContext, useState } from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import "./login.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { LoginContext } from "../utils/Services/LoginContext";
import Cookies from "js-cookie";
import axios from "axios";

const Login = () => {
  const { setLoginStatus } = useContext(LoginContext);

  let history = useHistory();

  const onFinish = (value) => {
    axios
      .post("https://backendexample.sanbersy.com/api/user-login", {
        email: value.email,
        password: value.password,
      })
      .then((res) => {
        var user = res.data.user;
        var token = res.data.token;
        Cookies.set("user", user.name, { expires: 1 });
        Cookies.set("email", user.email, { expires: 1 });
        Cookies.set("token", token, { expires: 1 });
        history.push("/");
        setLoginStatus(true);
      })
      .catch((err) => {
        message.error("Username or password is wrong!");
      });
  };

  return (
    <section className="login">
      <div className="image-login">
        <img src="./assets/img/hero-image.jpg" alt="hero-img" />
      </div>
      <div className="form-login">
        <h1>Welcome back to Moveelix!</h1>
        <p>Please login to your account.</p>
        <Form name="normal_login" className="login-form" onFinish={onFinish}>
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
              className="login-form-button"
            >
              Log in
            </Button>
            <p style={{ marginTop: "1rem" }}>
              {" "}
              Not haven't account yet?{" "}
              <Link to="./register">register now!</Link>
            </p>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default Login;
