import React, { useContext, useEffect } from "react";
import { Form, Input, InputNumber, Button, Checkbox } from "antd";
import "./login.css";
import { GamesContext } from "../utils/Services/GamesContext";
import { useParams } from "react-router";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};

const FormGameEdit = () => {
  const { functions } = useContext(GamesContext);
  const { editDataGame, updateDatagame } = functions;
  const { ID_GAMES } = useParams();

  useEffect(() => {
    if (ID_GAMES !== undefined) {
      editDataGame(ID_GAMES);
    }
  }, []);

  const onFinish = (values) => {
    console.log(values);
    updateDatagame(values.id);
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
          <Checkbox value={true} style={{ lineHeight: "16px" }} />
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
          <Checkbox value={true} style={{ lineHeight: "16px" }} />
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

export default FormGameEdit;
