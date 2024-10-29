import { jwtDecode} from "jwt-decode";
import { TUser } from "../redux/features/auth/authSlice";

export const verifyToken =(token:string) : TUser=>{
return jwtDecode(token);
}