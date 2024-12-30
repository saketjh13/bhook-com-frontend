import { useAuth0 } from "@auth0/auth0-react";
import { Navigate ,Outlet} from "react-router-dom";
import React from "react";

interface ProtectedRouteProps {
  children: React.ReactElement; // Define the children prop type
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return null; // Optionally, render a spinner or loading message
  }

  if (isAuthenticated) {
    return children; // Render children if the user is authenticated
  }

  return <Navigate to="/" replace />;
};

export default ProtectedRoute;
