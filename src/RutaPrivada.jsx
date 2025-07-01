import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

export const RutaPrivada = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  return children;
};