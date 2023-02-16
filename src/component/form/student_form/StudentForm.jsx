import React from "react";
import style from "./StudentForm.module.scss";
import { Button, DatePicker, Form, Input, InputNumber } from "antd";
const StudentForm = () => {
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  /* eslint-enable no-template-curly-in-string */

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div className={style.student_form_container}>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
        style={{ minWidth: 800 }}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: "email",
              required: true,
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="age"
          label="Age"
          style={{ minWidth: "30rem" }}
          rules={[
            {
              type: "number",
              min: 0,
              max: 99,
              required: true,
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item name="website" label="Website">
          <Input />
        </Form.Item>
        <Form.Item name="introduction" label="Introduction">
          <Input.TextArea rows={7} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 13, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default StudentForm;
