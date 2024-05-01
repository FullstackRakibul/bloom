import React from "react";
import { Button, Flex, Input, Radio } from "antd";

const HomeBannerSection = () => {
  //const baseStyle = { width: "100%", height: 400 };
  return (
    <>
      <section className="flex flex-row items-center justify-center p-56 ">
        <Input />
        <Button>submit</Button>
      </section>
      {/* <Flex horizontal style={{}}>
        <Input />
        <Button>submit</Button>
      </Flex> */}
    </>
  );
};

export default HomeBannerSection;
