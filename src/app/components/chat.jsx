import { ask } from "@/lib/geminiService";
import { sendMessage } from "@/lib/jdsService";
import { SendOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React, { useState } from "react";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm NRC chat bot! How can I help you!",
      sender: "bot",
    },
    {
      message: "Hello, I'm user!",
      sender: "user",
    },
  ]);
  return (
    <div className=" h-full w-full flex flex-col justify-between bg-white">
      <div className="space-y-2">
        {messages.map((m, i) => (
          <div
            key={i}
            className={` p-2 rounded-md ${
              m.sender === "user" ? "text-end" : "text-start"
            }`}
          >
            <span
              className={`${
                m.sender === "user" ? "bg-blue-500/50" : "bg-black/20"
              } py-2 px-3 rounded-md inline-block`}
            >
              {m.message}
            </span>
          </div>
        ))}
      </div>
      <div className="relative bottom-0 right-0 left-0 flex space-x-3 overflow-hidden">
        <Input
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Ask something"
          className="col-span-10"
        />
        <Button
          type="default"
          onClick={async () => {
            setMessages((pre) => [
              ...pre,
              {
                message: message,
                sender: "user",
              },
            ]);
            const aws = await sendMessage(message).then((res) => res.response);
            setMessage("");
            setMessages((pre) => [
              ...pre,
              {
                message: aws,
                sender: "bot",
              },
            ]);
          }}
        >
          <SendOutlined />
        </Button>
      </div>
    </div>
  );
};

export default Chat;
