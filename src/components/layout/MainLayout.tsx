import { Button, Layout } from "antd";
import {Outlet, useNavigate } from "react-router-dom";
import SideLayout from "./SideLayout";
import { useAppDispatch } from "../../redux/hook";
import { logout } from "../../redux/features/auth/authSlice";
const { Header, Content } = Layout;


const MainLayout = () => {

  const navigate = useNavigate()

  const dispatch = useAppDispatch();

  const handleLogout = ()=>{
    dispatch(logout());
    navigate("/login")
  }



  return (
    <Layout style={{ height: "100vh" }}>
    <SideLayout></SideLayout>
      <Layout>
        <Header />
        <Button onClick={handleLogout}>Logout</Button>
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
      </Layout>
    </Layout>
  );
};

export default MainLayout;
