import React from "react";
import { Menu, Button, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Header = () => {
  const languageMenu = (
    <Menu>
      <Menu.Item key="1">English</Menu.Item>
      <Menu.Item key="2">Spanish</Menu.Item>
      <Menu.Item key="3">French</Menu.Item>
    </Menu>
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 40px",
        backgroundColor: "#fff5e5", // Matches the light beige background in the image
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      {/* Logo */}
      <div style={{ fontSize: "28px", fontWeight: "bold", color: "#000" }}>
        Jadoo<span style={{ color: "#f0a500" }}>o</span>
      </div>

      {/* Navigation Menu */}
      <Menu
        mode="horizontal"
        style={{
          borderBottom: "none",
          fontSize: "16px",
          fontWeight: "500",
          display: "flex",
          gap: "30px",
        }}
      >
        <Menu.Item key="destinations">Destinations</Menu.Item>
        <Menu.Item key="hotels">Hotels</Menu.Item>
        <Menu.Item key="flights">Flights</Menu.Item>
        <Menu.Item key="bookings">Bookings</Menu.Item>
      </Menu>

      {/* Right Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Button
          type="text"
          style={{
            fontSize: "16px",
            color: "#000",
          }}
        >
          Login
        </Button>
        <Button
          type="default"
          style={{
            fontSize: "16px",
            color: "#000",
            borderColor: "#000",
          }}
        >
          Sign up
        </Button>
        <Dropdown overlay={languageMenu} placement="bottomRight">
          <Button
            type="text"
            style={{
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              color: "#000",
            }}
          >
            EN <DownOutlined />
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;