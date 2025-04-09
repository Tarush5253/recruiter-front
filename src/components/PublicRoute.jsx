// src/components/PublicRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const PublicRoute = ({ children }) => {
  const { user } = useAuth();

  // If user is already logged in, redirect based on their role
  if (user) {
    if (user.role === "user") {
      return <Navigate to="/dashboard/user" />;
    } else if (user.role === "employee") {
      return <Navigate to="/dashboard/employee" />;
    }
  }

  return children;
};

export default PublicRoute;
