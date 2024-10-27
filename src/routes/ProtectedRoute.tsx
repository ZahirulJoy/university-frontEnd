import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hook';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]); 

  return token ? children : null; 
};

export default ProtectedRoute;
