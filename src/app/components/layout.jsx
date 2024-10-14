"use client";
import { Breadcrumb, Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

const items = [
  {
    key: "new",
    label: "New Item",
  },
  {
    key: "list",
    label: "List Items",
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
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
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
