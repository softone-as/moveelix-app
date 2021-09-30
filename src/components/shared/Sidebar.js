import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const { Sider } = Layout;

function Sidebar() {
  return (
    <>
      <Sider
        className="site-layout-background"
        width={200}
        style={{
          overflow: "hidden",
          height: "100%",
          position: "fixed",
          left: 0,
          backgroundColor: "#2d446d",
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", marginTop: "2rem", zIndex: 100 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            <Menu.Item key="1">
              <Link to="/movie-list">Movie List</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/games-list">Game List</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/change-pass">Change Password</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </>
  );
}

export default Sidebar;
