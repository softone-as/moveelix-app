import React, { useContext, useEffect } from "react";
import { Form, Input, InputNumber, Button } from "antd";
import "./login.css";
import { MovieContext } from "../utils/Services/MovieContext";
import { useParams } from "react-router";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};

const FormMovieEdit = () => {
  const { functions } = useContext(MovieContext);
  const { editDataMovie, updateDataMovie } = functions;
  const { ID_MOVIES } = useParams();

  useEffect(() => {
    if (ID_MOVIES !== undefined) {
      editDataMovie(ID_MOVIES);
    }
  }, []);

  const onFinish = (values) => {
    console.log(values);
    updateDataMovie(values.id);
  };

  return (
    <div className="form-movie" style={{ marginTop: "8rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Edit Movie Data
      </h1>
      <Form {...layout} name="form-input" onFinish={onFinish}>
        <Form.Item
          label="as"
          name={"title"}
          rules={[{ required: true, message: "Please input the title!" }]}
        >
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item
          name={"genre"}
          label="Genre"
          rules={[{ required: true, message: "Please input the genre!" }]}
        >
          <Input placeholder="Genre" />
        </Form.Item>
        <Form.Item
          name={"duration"}
          label="Duration"
          rules={[
            {
              required: true,
              type: "number",
              message: "Please input the duration!",
            },
          ]}
        >
          <InputNumber placeholder="Duration" />
        </Form.Item>
        <Form.Item
          name={"year"}
          label="Year"
          rules={[
            {
              required: true,
              type: "number",
              min: 1980,
              max: 2021,
              message: "Please input the year!",
            },
          ]}
        >
          <InputNumber placeholder="Year" />
        </Form.Item>
        <Form.Item
          name={"rating"}
          label="Rating"
          rules={[
            {
              required: true,
              type: "number",
              min: 0,
              max: 10,
              message: "Please input the rating!",
            },
          ]}
        >
          <InputNumber placeholder="Rating" />
        </Form.Item>
        <Form.Item
          name={"review"}
          label="Review"
          rules={[{ required: true, message: "Please input the review!" }]}
        >
          <Input placeholder="Review" />
        </Form.Item>
        <Form.Item
          name={"image_url"}
          label="Image URL"
          rules={[{ required: true, message: "Please input the Image URL!" }]}
        >
          <Input placeholder="Image URL" />
        </Form.Item>
        <Form.Item
          name={"description"}
          label="Description"
          rules={[{ required: true, message: "Please input the Image URL!" }]}
        >
          <Input.TextArea placeholder="Description" />
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

export default FormMovieEdit;
