import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("users"));

  const onFinish = (values) => {
    console.log(values);

    const user = users.find((user) => values.email === user.email);

    user === undefined
      ? toast.error("Invalid Email !", {
          position: toast.POSITION.TOP_LEFT,
        })
      : values.username === user.username
      ? login(user)
      : toast.error("Invalid Username !", {
          position: toast.POSITION.TOP_LEFT,
        });
  };

  const login = (user) => {
    toast.success("Logged in succesfully !", {
      position: toast.POSITION.TOP_RIGHT,
    });
    navigate("/Home");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="h-screen bg-black flex justify-center items-center">
        <div className="h-80 w-80 flex justify-center items-center bg-cyan-950">
          <div className="flex flex-col items-center h-4/5">
            <div className="p-4">
              <p className="font-serif text-3xl">Welcome Back!!</p>
            </div>
            <div className="p-4">
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  maxWidth: 600,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
