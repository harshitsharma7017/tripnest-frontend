// src/components/AppLayout.jsx
import { Layout, Menu, Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  CompassOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Link, useLocation, Outlet } from "react-router-dom";
import { useState } from "react";

const { Header, Sider, Content, Footer } = Layout;

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div
          style={{
            color: "#fff",
            padding: "16px",
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          ✈️ {collapsed ? "T" : "TravelApp"}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={[
            {
              key: "/",
              icon: <HomeOutlined />,
              label: <Link to="/">Home</Link>,
            },
            {
              key: "/explore",
              icon: <CompassOutlined />,
              label: <Link to="/explore">Explore</Link>,
            },
            {
              key: "/bookings",
              icon: <StarOutlined />,
              label: <Link to="/bookings">My Trips</Link>,
            },
          ]}
        />
      </Sider>

      {/* Right Side: Header + Content + Footer */}
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            background: "#fff",
            paddingLeft: 16,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
          <h1 style={{ marginLeft: 16, fontSize: 18 }}>Travel Explorer</h1>
        </Header>

        <Content
          style={{
            flex: 1,
            margin: "16px",
            padding: "24px",
            background: "#fff",
            overflow: "auto",
          }}
        >
          <Outlet />
        </Content>

        <Footer style={{ textAlign: "center" }}>
          © {new Date().getFullYear()} TravelExplorer. All rights reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;