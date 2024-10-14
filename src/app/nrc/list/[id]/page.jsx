"use client";
import React from "react";
import { Button, Flex, Input, Splitter, Switch, Typography } from "antd";
import { SendOutlined } from "@ant-design/icons";
import Chat from "@/app/components/chat";
const Desc = ({ children }) => <div className="h-full p-5">{children}</div>;

const Detail = ({ params }) => {
  const [sizes, setSizes] = React.useState(["30%", "70%"]);
  const [enabled, setEnabled] = React.useState(true);
  return (
    <div
      style={{
        minHeight: 280,
        padding: 24,
        flex: 1, // Make children take up the remaining space
      }}
    >
      <Splitter
        onResize={setSizes}
        style={{
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
        className="h-full"
      >
        <Splitter.Panel size={sizes[0]} resizable={enabled}>
          <Desc>
            <Chat />
          </Desc>
        </Splitter.Panel>
        <Splitter.Panel size={sizes[1]}>
          <Desc text="Second" />
        </Splitter.Panel>
      </Splitter>
    </div>
  );
};

export default Detail;
