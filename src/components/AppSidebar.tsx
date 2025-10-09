import React from "react";
import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "1", icon: <PieChartOutlined />, label: "Option 1" },
  { key: "2", icon: <DesktopOutlined />, label: "Option 2" },
  { key: "3", icon: <ContainerOutlined />, label: "Option 3" },
];

const AppSidebar: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return <Menu onClick={onClick} mode="inline" items={items} />;
};

export default AppSidebar;
