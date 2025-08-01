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
  
  // Check if we're on the landing page
  const isLandingPage = location.pathname === "/";

  // If it's the landing page, render without sidebar and wrapper
  if (isLandingPage) {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        {/* Simple header for landing page */}
        <Header
          style={{
            background: "rgba(0, 0, 0, 0.8)",
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
          }}
        >
          <div style={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}>
            ✈️ TravelApp
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ background: "transparent", border: "none" }}
            items={[
              {
                key: "/explore",
                label: <Link to="/explore" style={{ color: "#fff" }}>Explore</Link>,
              },
              {
                key: "/bookings",
                label: <Link to="/bookings" style={{ color: "#fff" }}>My Trips</Link>,
              },
            ]}
          />
        </Header>

        {/* Full-width content for landing page */}
        <Content style={{ marginTop: 0, padding: 0 }}>
          <Outlet />
        </Content>

        <Footer style={{ textAlign: "center", marginTop: 0 }}>
          © {new Date().getFullYear()} TravelExplorer. All rights reserved.
        </Footer>
      </Layout>
    );
  }

  // Regular layout for other pages
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