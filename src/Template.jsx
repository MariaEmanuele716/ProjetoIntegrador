import { ConfigProvider, Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { UserOutlined, DesktopOutlined } from "@ant-design/icons";
const { Header, Content } = Layout;

export default () => {
  const items = [
    { label: <NavLink to="/">Início</NavLink>, key: "home" },
    { label: <NavLink to="/sobre">Sobre mim</NavLink>, key: "sobre" },
    { label: <NavLink to="/projetos">Projetos</NavLink>, key: "projetos" },
    { label: <NavLink to="/contato">Contato</NavLink>, key: "contato" },
  ];
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: "#702DFF",
        },
      }}
    >
      <Layout style={{ minHeight: "100vh", margin: 0 }}>
        <Header>
          <Menu
            theme="light"
            mode="horizontal"
            items={items}
            style={{
              width: "100vw",
              left: "0",
              position: "fixed",
              height: "9vh",
              color: "#fff",
            }}
          />
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};
