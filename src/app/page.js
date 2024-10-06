"use client";
import React from "react";
import Nav from "@/components/Nav";
import { Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
const { Search } = Input;
function Home() {
  const [form] = useForm();
  const [showBtn, setShowBtn] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  async function onFinish(values) {
    try {
      const response = await axios.post("/api/visa-status/check", values);
      if (response.data.success) {
        const visa = response.data.data.visa;
        console.log(response.data);
        router.push(`/details/${visa.trackingId}`);
      }
    } catch (error) {
      setError(true);
    }
  }
  useEffect(() => {
    const token = getCookie("jwt-token");
    if (token) {
      setShowBtn(true);
    }
  }, []);
  if (error)
    return (
      <div className="w-screen h-screen flex items-center justify-center text-3xl font-semibold relative flex-col gap-4">
        No details found
        <button
          className="hover:underline text-white rounded-md py-2 px-8 bg-orange-400 cursor-pointer"
          onClick={() => router.back()}
        >
          Go back
        </button>
      </div>
    );
  return (
    <div className="flex gap-4 flex-col justify-start items-center main-page">
      <Nav showBtn={showBtn} setShowBtn={setShowBtn} />

      <div className="flex flex-col  items-center justify-center h-full w-screen mb-8 gap-4">
        <h2 className="font-bold text-5xl text-[#323849] ">
          Check your visa status <span className="text-orange-400">online</span>
        </h2>
        <Form onFinish={onFinish} form={form}>
          <Form.Item
            className="sw-full"
            name={"trackingNumber"}
            rules={[
              {
                required: true,
                message:
                  "Please enter your tracking number to search your visa details",
              },
            ]}
          >
            <Search
              placeholder="Enter your tracking number..."
              allowClear
              enterButton="Search"
              size="large"
              onSearch={(value) => {
                form.setFieldValue(trackingNumber, value);
                form.submit();
              }}
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Home;
