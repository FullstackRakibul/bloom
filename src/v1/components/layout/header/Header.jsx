import React, { useState } from "react";
import { Menu } from "antd";
import menuItemsData from "./menuItemsData";
import HomeBannerSection from "../../../containers/Home/HomeBannerSection";

const Header = () => {
  const [current, setCurrent] = useState("home");

  const onClick = () => {
    console.log("menu has been clicked");
  };

  return (
    <>
      <header className="flex items-center justify-center">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={menuItemsData}
        />
      </header>
      <HomeBannerSection />
    </>
  );
};
export default Header;
