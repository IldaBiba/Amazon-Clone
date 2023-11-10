import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ token, children }) => {
  if (!token) {
    return <Navigate to="/Sign-In" replace />;
  }

  return children;
};
export default ProtectedRoutes;
