"use client";
import React from "react";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import Title from "antd/es/typography/Title";
import axios from "axios";
import { useRouter } from "next/navigation";

function AddVisa() {
  const [form] = useForm();
  const router = useRouter();
  async function onFinish(values) {
    try {
      const response = await axios.post("/api/add-visa", values);
      if (response.data.success) {
        alert("Details added");
        router.push("/");
      }
    } catch (error) {
      if (error.response.data.message) {
        alert(error.response.data.message);
      }
    }
  }
  return (
    <div className="w-full min-h-full flex items-center justify-center  hover:shadow-md md:py-6">
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        className="w-full md:w-6/12 border md:border-neutral-900 md:rounded-md p-8 hover:shadow-md hover:shadow-neutral-700"
      >
        <Title className="text-center md:text-5xl !text-[19px]">
          Enter new Details
        </Title>
        <Form.Item
          name={"visaNumber"}
          label={"Enter e-Visa number"}
          rules={[
            {
              required: true,
              message: "Please enter e-Visa number",
            },
          ]}
        >
          <Input placeholder="Enter e-Visa number " />
        </Form.Item>
        <Form.Item
          name={"trackingId"}
          label={"Enter Tracking number"}
          rules={[
            {
              required: true,
              message: "Please enter tracking number",
            },
          ]}
        >
          <Input placeholder="Enter Tracking number" />
        </Form.Item>
        <Form.Item
          name={"Name"}
          label={"Enter name"}
          rules={[
            {
              required: true,
              message: "Please enter name",
            },
          ]}
        >
          <Input placeholder="Enter Name " />
        </Form.Item>
        <Form.Item
          name={"Dob"}
          label={"Enter Date of birth"}
          rules={[
            {
              required: true,
              message: "Please enter date of birth",
            },
          ]}
        >
          <Input
            placeholder="Enter Date of Birth "
            className="custom-date-picker"
          />
        </Form.Item>
        <Form.Item
          name={"Sex"}
          label={"Enter Gender (Male/Female)"}
          rules={[
            {
              required: true,
              message: "Please enter gender",
            },
          ]}
        >
          <Input placeholder="Enter Gender " />
        </Form.Item>
        <Form.Item
          name={"Nationality"}
          label={"Enter Nationality"}
          rules={[
            {
              required: true,
              message: "Please enter nationality",
            },
          ]}
        >
          <Input placeholder="Enter your nationality " />
        </Form.Item>
        <Form.Item
          name={"TravelNumber"}
          label={"Enter Travel Number"}
          rules={[
            {
              required: true,
              message: "Please enter travel number",
            },
          ]}
        >
          <Input placeholder="Enter travel number" />
        </Form.Item>
        <Form.Item
          name={"issue_date"}
          label={"Enter Visa Issue Date"}
          rules={[
            {
              required: true,
              message: "Please enter issue date",
            },
          ]}
        >
          <Input placeholder="Enter issue date" />
        </Form.Item>
        <Form.Item
          name={"valid_till"}
          label={"Enter Visa Expiry date"}
          rules={[
            {
              required: true,
              message: "Please enter expiry date",
            },
          ]}
        >
          <Input placeholder="Enter expiry date" />
        </Form.Item>
        <div className="w-full flex items-center justify-end">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddVisa;
