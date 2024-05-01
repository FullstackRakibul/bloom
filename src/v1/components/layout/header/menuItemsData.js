import { MailOutlined, AliwangwangOutlined } from "@ant-design/icons";

const menuItemsData = [
  {
    label: "Home",
    key: "home",
    icon: <MailOutlined />,
    isDelete: 1,
    isEdit: 1,
    isCreate: 1,
    isUpdate: 1,
  },
  {
    label: "About",
    key: "about",
    icon: <AliwangwangOutlined />,
    isDelete: 1,
    isEdit: 1,
    isCreate: 1,
    isUpdate: 1,
    children: [
      {
        label: "About Us",
        key: "aboutUs",
        icon: <AliwangwangOutlined />,
      },
      {
        label: "About This Product",
        key: "aboutProduct",
        icon: <AliwangwangOutlined />,
      },
    ],
  },
];

export default menuItemsData;
