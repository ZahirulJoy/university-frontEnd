import { Button, Row } from "antd";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const defaultValues = {
    userId: 'A-0002',
    password: 'admin123',
  };

  const onSubmit = async (data: { userId: string; password: string }) => {
    console.log(data);
      const userInfo = {
        id: data.userId,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken);
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Login Is Successfull")
      navigate(`/${user.role}/dashboard`)
  };

  return (
    <Row justify={"center"} align={"middle"} style={{height:"100vh"}}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues} >
      <PHInput type="text" name="userId" label="Id"></PHInput>
      <PHInput type="text" name="password" label="password"></PHInput>
      <Button htmlType="submit">Login</Button>
    </PHForm>
    </Row>
  );
};

export default Login;
