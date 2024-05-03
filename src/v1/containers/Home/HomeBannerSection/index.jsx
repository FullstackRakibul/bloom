import React from "react";
import { Button, Input } from "antd";

const HomeBannerSection = () => {
  //const baseStyle = { width: "100%", height: 400 };
  return (
    <>
      <section className="flex flex-row items-center justify-center p-56 ">
        <Input />
        <Button>submit</Button>
      </section>
    </>
  );
};

export default HomeBannerSection;
