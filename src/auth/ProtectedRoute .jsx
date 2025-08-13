
import { Navigate, Outlet } from 'react-router';
import { useAuth } from './AuthProvider ';

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  
  // Check localStorage in case of page refresh
  const storedAuth = localStorage.getItem('adminAuth');
  
  if (!isAuthenticated && !storedAuth) {
    return <Navigate to="/login" replace />;
  }
  
  return <Outlet />;
};

export default ProtectedRoute;