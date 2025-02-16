import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const { isAuthenticated, userRole } = useSelector((state) => state.orebiReducer);
  
  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }
  
  if (userRole !== 'admin') {
    return <Navigate to="/" />;
  }

  return children;
};

export default AdminRoute;