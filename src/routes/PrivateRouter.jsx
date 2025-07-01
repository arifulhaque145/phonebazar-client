import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRouter() {
  const isAuthenticated = !!localStorage.getItem("token"); // Example auth check

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
