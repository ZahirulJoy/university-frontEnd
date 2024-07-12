import { Layout, Menu } from "antd";
import { MenuProps } from "rc-menu";
import { Link, Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "Dashboard",
    label: <Link to="/admin/dashboard">Dashboard</Link>,
  },
  {
    key: "User Management",
    label: "User Management",
    children: [
      {
        key: "Create Student",
        label: <Link to="/admin/create-student">Create Student</Link>,
      },
      {
        key: "Create Admin",
        label: <Link to="/admin/create-admin">Create Admin</Link>,
      },
      {
        key: "Create Faculty",
        label: <Link to="/admin/create-faculty">Create Faculty</Link>,
      },
    ],
  },
];

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{color:"white",height:"4rem",display:"flex",justifyContent:"center",alignItems:'center'}} >UNIVERSITY MANAGEMENT</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
