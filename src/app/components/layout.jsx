"use client";
import { Breadcrumb, Layout, Menu } from "antd";
import Link from "next/link";
const { Header, Content, Footer } = Layout;

const items = [
  {
    key: "new",
    label: "New Item",
    link: "/nrc",
  },
  {
    key: "list",
    label: "List Items",
    link: "/nrc/list",
  },
];
const AppLayout = ({ children }) => {
  return (
    <Layout
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <div className="space-x-4">
          {items.map((item, i) => (
            <Link key={i} href={item.link} className="text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </Header>
      <Content
        style={{
          padding: "0 48px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        {children}
      </Content>
    </Layout>
  );
};
export default AppLayout;
