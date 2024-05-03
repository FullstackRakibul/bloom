import React, { useEffect, useState } from "react";
import { Row, Col, Image, Menu, Dropdown, Button } from "antd";
import menuItemsData from "./menuItemsData";

const Header = () => {
  const [current, setCurrent] = useState("about");

  useEffect(() => {
    const keys = menuItemsData.map((item) => item.key);
    if (keys.length > 0) {
      setCurrent(keys[0]);
    }
  }, []);

  const onClick = (key) => {
    setCurrent(key);
    console.log("menu has been clicked");
  };
  const menu = (
    <Menu>
      {menuItemsData.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <>
      <Row
        justify="space-between"
        style={{ backgroundColor: "#f0f2f5", padding: 16 }}
      >
        <Col>
          <Image
            width={100}
            src="https://placehold.it/100x30?text=Your+Logo"
            alt="Your Logo"
          />
        </Col>
        <Col flex={1}>
          <Menu mode="horizontal">
            {menuItemsData.map((item) => (
              <Menu.Item key={item.key}>{item.label}</Menu.Item>
            ))}
          </Menu>
        </Col>
        <Col>
          <Dropdown overlay={menu} placement="bottomRight">
            <Button type="ghost">Login</Button>
          </Dropdown>
        </Col>
      </Row>
    </>
  );
};
export default Header;
