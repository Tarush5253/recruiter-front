// src/App.jsx
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useEffect } from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import UpdateProfile from "./pages/UpdateProfile";
import UpdateRecruiter from "./pages/UpdateRecruiter";
import Landing from "./pages/Landing";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider , useAuth} from "./Context/AuthContext";
import PublicRoute from "./components/PublicRoute";

const ProfileElement = () => {
  const { user } = useAuth();

  if (user?.role === "user") {
    return <UpdateProfile />;
  } else if (user?.role === "employee") {
    return <UpdateRecruiter />;
  } else {
    return <div>Unauthorized</div>; // or a <Navigate to="/unauthorized" />
  }
};

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

          {/* Protected Routes */}
          <Route
            path="/dashboard/user"
            element={
              <ProtectedRoute allowedRoles={["user"]}>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/employee"
            element={
              <ProtectedRoute allowedRoles={["employee"]}>
                <EmployeeDashboard />
              </ProtectedRoute>
            }
          />
{/*           <Route
            path="/profile"
            element={
              <ProtectedRoute allowedRoles={["user"]}>
                <UpdateProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/recruiter"
            element={
              <ProtectedRoute allowedRoles={["employee"]}>
                <UpdateRecruiter />
              </ProtectedRoute>
            }
          /> */}
          <Route
  path="/profile"
  element={
    <ProtectedRoute allowedRoles={["user", "employee"]}>
      <ProfileElement />
    </ProtectedRoute>
  }
/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
