import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
function ProtectedRoutes({ children }) {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="container-fluid">
        <img src="./images/backgrounds/loader.gif" />
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoutes;
