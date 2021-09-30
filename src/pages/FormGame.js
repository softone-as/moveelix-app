import React, { useContext } from "react";
import { Form, Input, InputNumber, Button, Checkbox } from "antd";
import "./login.css";
import { GamesContext } from "../utils/Services/GamesContext";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};

const FormGame = () => {
  const { functions } = useContext(GamesContext);

  const { addDataGame } = functions;
  const onFinish = (values) => {
    addDataGame(values);
  };

  return (
    <div className="form-game" style={{ marginTop: "8rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Create New Game
      </h1>
      <Form {...layout} name="form-input" onFinish={onFinish}>
        <Form.Item
          label="Name"
          name={"name"}
          rules={[{ required: true, message: "Please input the name!" }]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          name={"genre"}
          label="Genre"
          rules={[{ required: true, message: "Please input the genre!" }]}
        >
          <Input placeholder="Genre" />
        </Form.Item>
        <Form.Item
          name={"release"}
          label="Release"
          rules={[
            {
              required: true,
              type: "number",
              min: 2000,
              max: 2021,
              message: "Please input the release!",
            },
          ]}
        >
          <InputNumber placeholder="Release" />
        </Form.Item>
        <Form.Item
          name={"platform"}
          label="Platform"
          rules={[{ required: true, message: "Please input the platform!" }]}
        >
          <Input placeholder="Platform" />
        </Form.Item>
        <Form.Item
          name={"singlePlayer"}
          label="Single Player"
          rules={[
            {
              type: "boolean",
              message: "Please input the Single Player!",
            },
          ]}
        >
          <Checkbox value={1} style={{ lineHeight: "16px" }} />
        </Form.Item>
        <Form.Item
          name={"multiplayer"}
          label="Multi Player"
          rules={[
            {
              type: "boolean",
              message: "Please input the Multi Player!",
            },
          ]}
        >
          <Checkbox value={1} style={{ lineHeight: "16px" }} />
        </Form.Item>
        <Form.Item
          name={"image_url"}
          label="Image URL"
          rules={[{ required: true, message: "Please input the Image URL!" }]}
        >
          <Input placeholder="Image URL" />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormGame;
